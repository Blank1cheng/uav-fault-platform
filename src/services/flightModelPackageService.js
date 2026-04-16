export const FLIGHT_MODEL_SCHEMA_VERSION = 1;
export const FLIGHT_MODEL_PACKAGE_TYPE = 'flight-control-model';

import { createSimulationBlockPythonBinding } from '../composables/useWorkbenchState.js';
import { restoreWorkbenchSnapshot } from './workbenchSnapshotService.js';

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function normalizeModule(module) {
  const safeModule = clone(module ?? {});

  return {
    moduleId: safeModule.moduleId ?? null,
    fileName: safeModule.fileName ?? null,
    entryFunction: safeModule.entryFunction ?? null,
    category: safeModule.category ?? 'uncategorized',
    sourcePackageId: safeModule.sourcePackageId ?? null,
    sourcePackageName: safeModule.sourcePackageName ?? null,
    source: safeModule.source ?? '',
    parsedInterface: safeModule.parsedInterface ?? null
  };
}

function createModuleRegistry(pythonModules) {
  const registry = new Map();

  pythonModules.forEach((module) => {
    const normalized = normalizeModule(module);

    if (hasUsableText(normalized.moduleId) && !registry.has(normalized.moduleId)) {
      registry.set(normalized.moduleId, normalized);
    }

    if (hasUsableText(normalized.fileName) && !registry.has(normalized.fileName)) {
      registry.set(normalized.fileName, normalized);
    }
  });

  return registry;
}

function isHydratedBinding(binding) {
  return Boolean(
    binding?.bound
      && hasUsableText(binding.entryFunction)
      && hasUsableText(binding.rawSource ?? binding.source)
      && isPlainObject(binding.parsedInterface)
  );
}

function hydrateSimulationBinding(binding, moduleEntry) {
  if (!binding?.bound || !moduleEntry || !isPlainObject(moduleEntry.parsedInterface)) {
    return binding;
  }

  if (isHydratedBinding(binding)) {
    return binding;
  }

  const hydrated = createSimulationBlockPythonBinding({
    ...moduleEntry.parsedInterface,
    rawSource: moduleEntry.source
  }, {
    moduleId: moduleEntry.moduleId,
    moduleCategory: moduleEntry.category,
    sourcePackageId: moduleEntry.sourcePackageId,
    sourcePackageName: moduleEntry.sourcePackageName,
    executionMode: binding.executionMode
  });

  return {
    ...hydrated,
    ...clone(binding),
    bound: true,
    moduleId: binding.moduleId ?? moduleEntry.moduleId,
    fileName: binding.fileName ?? moduleEntry.fileName,
    moduleName: binding.moduleName ?? hydrated.moduleName,
    moduleCategory: binding.moduleCategory ?? moduleEntry.category,
    sourcePackageId: binding.sourcePackageId ?? moduleEntry.sourcePackageId,
    sourcePackageName: binding.sourcePackageName ?? moduleEntry.sourcePackageName,
    description: binding.description || hydrated.description,
    entryFunction: binding.entryFunction ?? moduleEntry.entryFunction,
    parsedInterface: binding.parsedInterface ?? clone(moduleEntry.parsedInterface),
    rawSource: binding.rawSource || moduleEntry.source,
    portMapping: hydrated.portMapping,
    executionConfig: isPlainObject(binding.executionConfig) ? binding.executionConfig : hydrated.executionConfig
  };
}

function hydrateSnapshotBindings(snapshot, pythonModules) {
  const registry = createModuleRegistry(pythonModules);
  const errors = [];
  const modelNodes = (Array.isArray(snapshot.modelNodes) ? snapshot.modelNodes : []).map((node) => {
    if (!isPlainObject(node) || node.type !== 'simulation_block' || !node?.pythonBinding?.bound) {
      return node;
    }

    const binding = node.pythonBinding;
    const moduleEntry = registry.get(binding.moduleId) ?? registry.get(binding.fileName);

    if (!moduleEntry) {
      if (!isHydratedBinding(binding)) {
        const moduleRef = binding.moduleId ?? binding.fileName ?? 'unknown-module';
        errors.push(`Simulation block "${node.id ?? 'unknown-node'}" references missing python module "${moduleRef}".`);
      }
      return node;
    }

    const hydratedBinding = hydrateSimulationBinding(binding, moduleEntry);
    if (!isHydratedBinding(hydratedBinding)) {
      const moduleRef = binding.moduleId ?? binding.fileName ?? moduleEntry.moduleId ?? moduleEntry.fileName ?? 'unknown-module';
      errors.push(`Simulation block "${node.id ?? 'unknown-node'}" has an unusable python binding for module "${moduleRef}".`);
      return node;
    }

    return {
      ...node,
      pythonBinding: hydratedBinding
    };
  });

  return {
    snapshot: {
      ...snapshot,
      modelNodes
    },
    errors
  };
}

function hasUsableText(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

function isPlainObject(value) {
  return Boolean(value) && typeof value === 'object' && !Array.isArray(value);
}

function validatePlainObjectArray(errors, value, path) {
  if (!Array.isArray(value)) {
    errors.push(`${path} must be an array.`);
    return;
  }

  value.forEach((item, index) => {
    if (!isPlainObject(item)) {
      errors.push(`${path}[${index}] must be an object.`);
    }
  });
}

export function validateFlightModelPackage(pkg) {
  const errors = [];
  const seenModuleIds = new Set();
  const seenFileNames = new Set();

  if (!isPlainObject(pkg)) {
    return { ok: false, errors: ['Package must be an object.'] };
  }

  if (pkg.schemaVersion !== FLIGHT_MODEL_SCHEMA_VERSION) {
    errors.push(`schemaVersion must be ${FLIGHT_MODEL_SCHEMA_VERSION}.`);
  }

  if (pkg.packageType !== FLIGHT_MODEL_PACKAGE_TYPE) {
    errors.push(`packageType must be ${FLIGHT_MODEL_PACKAGE_TYPE}.`);
  }

  if (!Array.isArray(pkg.pythonModules)) {
    errors.push('pythonModules must be an array.');
  } else {
    pkg.pythonModules.forEach((module, index) => {
      if (!isPlainObject(module)) {
        errors.push(`pythonModules[${index}] must be an object.`);
        return;
      }

      if (!hasUsableText(module.moduleId)) {
        errors.push(`pythonModules[${index}].moduleId is required.`);
      }

      if (!hasUsableText(module.fileName)) {
        errors.push(`pythonModules[${index}].fileName is required.`);
      }

      if (!hasUsableText(module.entryFunction)) {
        errors.push(`pythonModules[${index}].entryFunction is required.`);
      }

      if (!hasUsableText(module.source)) {
        errors.push(`pythonModules[${index}].source is required.`);
      }

      if (hasUsableText(module.moduleId)) {
        if (seenModuleIds.has(module.moduleId)) {
          errors.push(`Duplicate moduleId "${module.moduleId}" is not allowed.`);
        } else {
          seenModuleIds.add(module.moduleId);
        }
      }

      if (hasUsableText(module.fileName)) {
        if (seenFileNames.has(module.fileName)) {
          errors.push(`Duplicate fileName "${module.fileName}" is not allowed.`);
        } else {
          seenFileNames.add(module.fileName);
        }
      }
    });
  }

  if (!isPlainObject(pkg.workbenchSnapshot)) {
    errors.push('workbenchSnapshot must be an object.');
  } else {
    validatePlainObjectArray(errors, pkg.workbenchSnapshot.modelNodes, 'workbenchSnapshot.modelNodes');
    validatePlainObjectArray(errors, pkg.workbenchSnapshot.modelEdges, 'workbenchSnapshot.modelEdges');
  }

  return {
    ok: errors.length === 0,
    errors
  };
}

export function createFlightModelPackageDescriptor(pkg = {}) {
  return {
    modelId: pkg.modelId ?? null,
    modelName: pkg.modelName ?? null,
    description: pkg.description ?? '',
    schemaVersion: pkg.schemaVersion ?? null,
    packageType: pkg.packageType ?? null,
    moduleCount: Array.isArray(pkg.pythonModules) ? pkg.pythonModules.length : 0,
    faultCount: Array.isArray(pkg.faultLibrary) ? pkg.faultLibrary.length : 0
  };
}

export function applyFlightModelPackage(pkg) {
  const validation = validateFlightModelPackage(pkg);
  if (!validation.ok) {
    return {
      ok: false,
      errors: validation.errors
    };
  }

  const pythonModules = clone(Array.isArray(pkg.pythonModules) ? pkg.pythonModules : []);
  const restoredSnapshot = restoreWorkbenchSnapshot(pkg.workbenchSnapshot);
  const hydratedSnapshot = hydrateSnapshotBindings(restoredSnapshot, pythonModules);

  if (hydratedSnapshot.errors.length > 0) {
    return {
      ok: false,
      errors: hydratedSnapshot.errors
    };
  }

  return {
    ok: true,
    snapshot: hydratedSnapshot.snapshot,
    descriptor: createFlightModelPackageDescriptor(pkg),
    faultLibrary: clone(Array.isArray(pkg.faultLibrary) ? pkg.faultLibrary : []),
    pythonModules
  };
}

export function buildFlightModelPackage({ meta = {}, snapshot = {}, faultLibrary = [] } = {}) {
  const snapshotModelNodes = Array.isArray(snapshot.modelNodes) ? snapshot.modelNodes : [];
  const snapshotModelEdges = Array.isArray(snapshot.modelEdges) ? snapshot.modelEdges : [];

  const exportedModelNodes = snapshotModelNodes.map((node) => {
    if (!isPlainObject(node)) {
      return node;
    }

    if (node?.type !== 'simulation_block') {
      return clone(node);
    }

    const binding = node.pythonBinding ?? null;
    if (!binding || !binding.bound) {
      return {
        ...clone(node),
        pythonBinding: binding ? clone(binding) : null
      };
    }

    const moduleId = binding.moduleId;
    const fileName = binding.fileName;
    const entryFunction = binding.entryFunction;
    const source = binding.rawSource ?? binding.source ?? '';
    const exportable = hasUsableText(moduleId)
      && hasUsableText(fileName)
      && hasUsableText(entryFunction)
      && hasUsableText(source);

    return {
      ...clone(node),
      pythonBinding: exportable ? clone(binding) : null
    };
  });

  const pythonModulesById = exportedModelNodes.reduce((modules, node) => {
    if (!isPlainObject(node) || node.type !== 'simulation_block' || !node?.pythonBinding?.bound) {
      return modules;
    }

    const binding = node.pythonBinding;
    const moduleId = binding.moduleId;
    const fileName = binding.fileName;
    const entryFunction = binding.entryFunction;
    const source = binding.rawSource ?? binding.source ?? '';

    if (!hasUsableText(moduleId) || !hasUsableText(fileName) || !hasUsableText(entryFunction) || !hasUsableText(source)) {
      return modules;
    }

    if (!modules.has(moduleId)) {
      modules.set(moduleId, normalizeModule({
        moduleId,
        fileName,
        entryFunction,
        category: binding.moduleCategory ?? 'uncategorized',
        sourcePackageId: binding.sourcePackageId ?? null,
        sourcePackageName: binding.sourcePackageName ?? null,
        source,
        parsedInterface: binding.parsedInterface ?? null
      }));
    }

    return modules;
  }, new Map());

  return {
    schemaVersion: FLIGHT_MODEL_SCHEMA_VERSION,
    packageType: FLIGHT_MODEL_PACKAGE_TYPE,
    modelId: meta.modelId ?? null,
    modelName: meta.modelName ?? null,
    description: meta.description ?? '',
    source: clone(meta.source ?? {}),
    pythonModules: Array.from(pythonModulesById.values()),
    faultLibrary: clone(faultLibrary ?? []),
    workbenchSnapshot: {
      ...clone(snapshot ?? {}),
      modelNodes: exportedModelNodes,
      modelEdges: clone(snapshotModelEdges)
    }
  };
}

export function exportFlightModelPackage({ meta = {}, state = {}, faultLibrary = [] } = {}) {
  return buildFlightModelPackage({
    meta,
    snapshot: state,
    faultLibrary
  });
}
