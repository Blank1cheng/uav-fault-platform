import { createDefaultPythonBinding } from '../composables/useWorkbenchState.js';

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function isPlainObject(value) {
  return Boolean(value) && typeof value === 'object' && !Array.isArray(value);
}

function toSafeArray(value) {
  return Array.isArray(value) ? value : [];
}

function normalizePortMapping(bindingPortMapping) {
  const safePortMapping = clone(bindingPortMapping ?? {});

  return {
    inputs: Array.isArray(safePortMapping.inputs) ? clone(safePortMapping.inputs) : [],
    outputs: Array.isArray(safePortMapping.outputs) ? clone(safePortMapping.outputs) : [],
    middleVars: Array.isArray(safePortMapping.middleVars) ? clone(safePortMapping.middleVars) : []
  };
}

function normalizeExecutionConfig(bindingExecutionConfig) {
  const safeExecutionConfig = clone(bindingExecutionConfig ?? {});

  return {
    ...createDefaultPythonBinding().executionConfig,
    ...safeExecutionConfig
  };
}

function normalizePythonBinding(binding) {
  if (!binding || typeof binding !== 'object') {
    return createDefaultPythonBinding();
  }

  const safeBinding = {
    ...createDefaultPythonBinding(),
    ...clone(binding)
  };

  safeBinding.executionConfig = normalizeExecutionConfig(binding.executionConfig);
  safeBinding.portMapping = {
    ...createDefaultPythonBinding().portMapping,
    ...normalizePortMapping(binding.portMapping)
  };

  return safeBinding;
}

function inferSequence(items, prefix) {
  return items.reduce((max, item) => {
    const numeric = Number(String(item?.id ?? '').replace(`${prefix}-`, ''));
    return Number.isFinite(numeric) ? Math.max(max, numeric) : max;
  }, 0);
}

export function createWorkbenchSnapshot(state) {
  const safeState = isPlainObject(state) ? clone(state) : {};
  const modelNodes = toSafeArray(safeState.modelNodes);
  const modelEdges = toSafeArray(safeState.modelEdges);

  return clone({
    version: 1,
    modelNodes: modelNodes.map((node) => ({
      ...node,
      pythonBinding: node.type === 'simulation_block'
        ? normalizePythonBinding(node.pythonBinding)
        : node.pythonBinding ?? null
    })),
    modelEdges,
    nodeSeq: safeState.nodeSeq ?? inferSequence(modelNodes, 'node'),
    edgeSeq: safeState.edgeSeq ?? inferSequence(modelEdges, 'edge'),
    activeLineType: safeState.activeLineType ?? 'normal',
    faultedBlks: toSafeArray(safeState.faultedBlks),
    importedFaultModels: toSafeArray(safeState.importedFaultModels)
  });
}

export function restoreWorkbenchSnapshot(snapshot) {
  const safeSnapshot = isPlainObject(snapshot) ? clone(snapshot) : {};
  const modelNodes = toSafeArray(safeSnapshot.modelNodes).map((node) => ({
    ...node,
    pythonBinding: node.type === 'simulation_block'
      ? normalizePythonBinding(node.pythonBinding)
      : node.pythonBinding ?? null
  }));
  const modelEdges = toSafeArray(safeSnapshot.modelEdges);

  return {
    version: safeSnapshot.version ?? 1,
    modelNodes,
    modelEdges,
    nodeSeq: safeSnapshot.nodeSeq ?? inferSequence(modelNodes, 'node'),
    edgeSeq: safeSnapshot.edgeSeq ?? inferSequence(modelEdges, 'edge'),
    activeLineType: safeSnapshot.activeLineType ?? 'normal',
    faultedBlks: toSafeArray(safeSnapshot.faultedBlks),
    importedFaultModels: toSafeArray(safeSnapshot.importedFaultModels)
  };
}
