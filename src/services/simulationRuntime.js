import { executePythonBinding, executePythonBindingSync } from './pythonExecutionAdapter.js';
import {
  executeFlowBlockPythonBindingSync,
  executeSimulationBlockPythonBindingSync,
  getPythonBindingDefaultValue
} from './pythonFlowBindingRuntime.js';

export function createSimulationRuntimeFacade() {
  return {
    initialize() {
      window.simInit?.();
    },
    run() {
      window.simRun?.();
    },
    pause() {
      window.simPause?.();
    },
    step() {
      window.simStep?.();
    },
    stop() {
      window.simStop?.();
    },
    executePythonBinding,
    executePythonBindingSync,
    executeFlowBlockPythonBindingSync,
    executeSimulationBlockPythonBindingSync,
    getPythonBindingDefaultValue
  };
}

if (typeof window !== 'undefined') {
  window.__GZ_PYTHON_RUNTIME__ = {
    executePythonBinding,
    executePythonBindingSync,
    executeFlowBlockPythonBindingSync,
    executeSimulationBlockPythonBindingSync,
    getPythonBindingDefaultValue
  };
}
