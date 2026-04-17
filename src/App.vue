<script setup>
import { nextTick, onMounted } from 'vue';
import WorkbenchHeader from './components/layout/WorkbenchHeader.vue';
import LeftPalette from './components/layout/LeftPalette.vue';
import CanvasWorkbench from './components/layout/CanvasWorkbench.vue';
import RightInspector from './components/layout/RightInspector.vue';
import WorkbenchStatusBar from './components/layout/WorkbenchStatusBar.vue';
import FaultLibraryDialog from './components/dialogs/FaultLibraryDialog.vue';
import TemplateDialog from './components/dialogs/TemplateDialog.vue';
import ElectricalFaultDialog from './components/dialogs/ElectricalFaultDialog.vue';
import ProtocolFaultDialog from './components/dialogs/ProtocolFaultDialog.vue';
import ConfigDialog from './components/dialogs/ConfigDialog.vue';
import ScopeDialog from './components/dialogs/ScopeDialog.vue';
import PythonBindingDialog from './components/dialogs/PythonBindingDialog.vue';
import ToastHost from './components/dialogs/ToastHost.vue';
import { useWorkbenchState } from './composables/useWorkbenchState.js';
import { mountLegacyRuntime } from './services/legacyRuntimeBootstrap.js';
import './services/simulationRuntime.js';

const workbench = useWorkbenchState();

onMounted(async () => {
  await nextTick();
  mountLegacyRuntime();
  workbench.markReady();
});
</script>

<template>
  <div class="gz-app" data-testid="workbench-root" :data-runtime-ready="workbench.runtimeReady ? 'true' : 'false'">
    <WorkbenchHeader />
    <main>
      <LeftPalette />
      <CanvasWorkbench />
      <RightInspector />
    </main>
    <WorkbenchStatusBar />
    <FaultLibraryDialog />
    <TemplateDialog />
    <ElectricalFaultDialog />
    <ProtocolFaultDialog />
    <ConfigDialog />
    <ScopeDialog />
    <PythonBindingDialog />
    <ToastHost />
  </div>
</template>
