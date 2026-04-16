import runtimeSource from './legacy-runtime.txt?raw';
import {
  applyFlightModelPackage,
  exportFlightModelPackage,
  validateFlightModelPackage
} from './flightModelPackageService.js';
import {
  createWorkbenchSnapshot,
  restoreWorkbenchSnapshot
} from './workbenchSnapshotService.js';

let mounted = false;

function createExportMeta(state = {}) {
  const activeModelPackage = state.activeModelPackage ?? null;
  if (activeModelPackage) {
    return {
      modelId: activeModelPackage.modelId ?? 'workbench-export',
      modelName: activeModelPackage.modelName ?? 'Workbench Export',
      description: activeModelPackage.description ?? '',
      source: activeModelPackage.source ?? { origin: 'workbench-import' }
    };
  }

  return {
    modelId: 'workbench-export',
    modelName: 'Workbench Export',
    description: '',
    source: { origin: 'workbench-export' }
  };
}

function createExportSnapshot(state = {}) {
  return {
    modelNodes: state.modelNodes ?? [],
    modelEdges: state.modelEdges ?? [],
    nodeSeq: state.nodeSeq ?? 0,
    edgeSeq: state.edgeSeq ?? 0,
    activeLineType: state.activeLineType ?? 'normal',
    faultedBlks: state.faultedBlks ?? [],
    importedFaultModels: state.importedFaultModels ?? []
  };
}

export function mountLegacyRuntime() {
  if (mounted || window.__GZ_LEGACY_RUNTIME_BOOTED__) {
    return;
  }

  window.__GZ_WORKBENCH_SNAPSHOT__ = {
    createWorkbenchSnapshot,
    restoreWorkbenchSnapshot
  };
  window.__GZ_FLIGHT_MODEL_PACKAGE__ = {
    validate(pkg) {
      return validateFlightModelPackage(pkg);
    },
    importObject(pkg) {
      const result = applyFlightModelPackage(pkg);
      if (!result.ok) {
        return result;
      }

      try {
        if (typeof window.__GZ_APPLY_FLIGHT_MODEL_PACKAGE__ === 'function') {
          window.__GZ_APPLY_FLIGHT_MODEL_PACKAGE__(pkg, result);
        }
      } catch (error) {
        return {
          ok: false,
          errors: [error instanceof Error ? error.message : 'Failed to apply flight model package.']
        };
      }

      return result;
    },
    exportCurrent() {
      const state = window.__GZ_STATE__ ?? {};

      return exportFlightModelPackage({
        meta: createExportMeta(state),
        state: createExportSnapshot(state),
        faultLibrary: state.availableFaultModels ?? []
      });
    }
  };
  window.eval(`${runtimeSource}\n//# sourceURL=gz-legacy-runtime.js`);

  window.__GZ_LEGACY_RUNTIME_BOOTED__ = true;
  mounted = true;
}

export function __resetLegacyRuntimeForTests() {
  const runtimeListeners = window.__GZ_RUNTIME_LISTENERS__;
  if (runtimeListeners) {
    if (runtimeListeners.canvasWindowKeydown) {
      window.removeEventListener('keydown', runtimeListeners.canvasWindowKeydown);
    }
    if (runtimeListeners.canvasWindowResize) {
      window.removeEventListener('resize', runtimeListeners.canvasWindowResize);
    }
    if (runtimeListeners.pythonBindingConfirm) {
      window.removeEventListener('gz:python-binding-confirm', runtimeListeners.pythonBindingConfirm);
    }
    if (runtimeListeners.pythonBindingUnbind) {
      window.removeEventListener('gz:python-binding-unbind', runtimeListeners.pythonBindingUnbind);
    }
    if (runtimeListeners.overlayEscapeKeydown) {
      document.removeEventListener('keydown', runtimeListeners.overlayEscapeKeydown);
    }
    if (runtimeListeners.scopeWindowDragPointerMove) {
      window.removeEventListener('pointermove', runtimeListeners.scopeWindowDragPointerMove);
    }
    if (runtimeListeners.scopeWindowDragPointerUp) {
      window.removeEventListener('pointerup', runtimeListeners.scopeWindowDragPointerUp);
    }
  }

  mounted = false;
  delete window.__GZ_LEGACY_RUNTIME_BOOTED__;
  delete window.__GZ_WORKBENCH_SNAPSHOT__;
  delete window.__GZ_FLIGHT_MODEL_PACKAGE__;
  delete window.__GZ_APPLY_FLIGHT_MODEL_PACKAGE__;
  delete window.__GZ_PYTHON_BINDING_EVENTS__;
  delete window.__GZ_SCOPE_WINDOW_DRAG_BOUND__;
  delete window.__GZ_RUNTIME_LISTENERS__;
}
