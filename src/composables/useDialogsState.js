import { reactive } from 'vue';

const dialogsState = reactive({
  scope: false,
  template: false,
  faultLibrary: false,
  electricalFault: false,
  protocolFault: false,
  config: false,
  pythonBinding: {
    open: false,
    targetNode: null,
    parsedInterface: null,
    parseError: '',
    boundSnapshot: null
  }
});

export function useDialogsState() {
  function openPythonBindingDialog(payload = {}) {
    dialogsState.pythonBinding.open = true;
    dialogsState.pythonBinding.targetNode = payload.targetNode ?? null;
    dialogsState.pythonBinding.parsedInterface = payload.parsedInterface ?? null;
    dialogsState.pythonBinding.boundSnapshot = payload.boundSnapshot ?? null;
    dialogsState.pythonBinding.parseError = payload.parseError ?? '';
  }

  function closePythonBindingDialog() {
    dialogsState.pythonBinding.open = false;
    dialogsState.pythonBinding.targetNode = null;
    dialogsState.pythonBinding.parsedInterface = null;
    dialogsState.pythonBinding.boundSnapshot = null;
    dialogsState.pythonBinding.parseError = '';
  }

  function setPythonBindingPreview(parsedInterface) {
    dialogsState.pythonBinding.parsedInterface = parsedInterface;
    dialogsState.pythonBinding.parseError = '';
  }

  function setPythonBindingError(message) {
    dialogsState.pythonBinding.parseError = message;
  }

  return {
    dialogsState,
    openPythonBindingDialog,
    closePythonBindingDialog,
    setPythonBindingPreview,
    setPythonBindingError
  };
}
