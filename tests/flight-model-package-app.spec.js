import { mount } from '@vue/test-utils';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { nextTick } from 'vue';
import App from '../src/App.vue';
import { createSimulationBlockPythonBinding } from '../src/composables/useWorkbenchState.js';
import { __resetLegacyRuntimeForTests } from '../src/services/legacyRuntimeBootstrap.js';
import { createWorkbenchSnapshot } from '../src/services/workbenchSnapshotService.js';

const MODEL_ID = 'evtol-small-nonlinear';
const MODEL_NAME = 'eVTOL Small Nonlinear Flight Control';

const parsedInterface = {
  fileName: 'attitude_pid.py',
  moduleName: 'attitude_pid',
  description: 'Attitude PID controller',
  entryFunction: 'process',
  inputs: [
    { name: 'pitch_error', type: 'float', default: null, comment: 'pitch error' }
  ],
  outputs: [
    { name: 'elevator_cmd', type: 'float', comment: 'elevator command' }
  ],
  middleVars: [
    { name: 'integral_state', type: 'float', comment: 'integral accumulator' }
  ],
  rawSource: 'def process(pitch_error):\n  return pitch_error'
};

const binding = createSimulationBlockPythonBinding(parsedInterface, {
  moduleCategory: 'control',
  sourcePackageId: MODEL_ID,
  sourcePackageName: MODEL_NAME,
  executionMode: 'backend'
});

const PACKAGE_FIXTURE = {
  schemaVersion: 1,
  packageType: 'flight-control-model',
  modelId: MODEL_ID,
  modelName: MODEL_NAME,
  description: 'Reference eVTOL controller package',
  source: {
    origin: 'test-fixture'
  },
  pythonModules: [
    {
      moduleId: 'attitude_pid',
      fileName: 'attitude_pid.py',
      entryFunction: 'process',
      category: 'control',
      sourcePackageId: MODEL_ID,
      sourcePackageName: MODEL_NAME,
      source: parsedInterface.rawSource,
      parsedInterface
    }
  ],
  faultLibrary: [
    {
      id: 'fault-actuator-saturation',
      name: 'Actuator Saturation Fault',
      layer: 'physical',
      desc: 'Constrains actuator output to emulate saturation.',
      tags: ['Saturation', 'physical'],
      createdAt: '2026-04-16',
      origin: 'package'
    }
  ],
  workbenchSnapshot: createWorkbenchSnapshot({
    modelNodes: [
      {
        id: 'node-1',
        type: 'simulation_block',
        x: 360,
        y: 240,
        props: {
          name: 'Attitude PID',
          moduleType: 'control',
          inputs: [{ name: 'Pitch Error', type: 'scalar' }],
          outputs: [{ name: 'Elevator Command', type: 'scalar' }],
          middleVars: [{ name: 'Integral State', type: 'scalar' }]
        },
        pythonBinding: binding
      }
    ],
    modelEdges: [],
    nodeSeq: 1,
    edgeSeq: 0,
    activeLineType: 'normal',
    faultedBlks: [],
    importedFaultModels: []
  })
};

const LEAN_PACKAGE_FIXTURE = {
  ...PACKAGE_FIXTURE,
  workbenchSnapshot: createWorkbenchSnapshot({
    modelNodes: [
      {
        id: 'node-lean-1',
        type: 'simulation_block',
        x: 300,
        y: 200,
        props: {
          name: 'Lean Attitude PID',
          moduleType: 'control',
          inputs: [{ name: 'Pitch Error', type: 'scalar' }],
          outputs: [{ name: 'Elevator Command', type: 'scalar' }],
          middleVars: [{ name: 'Integral State', type: 'scalar' }]
        },
        pythonBinding: {
          bound: true,
          moduleId: 'attitude_pid',
          fileName: 'attitude_pid.py'
        }
      }
    ],
    modelEdges: [],
    nodeSeq: 1,
    edgeSeq: 0,
    activeLineType: 'normal',
    faultedBlks: [],
    importedFaultModels: []
  })
};

const DUPLICATE_MODULE_PACKAGE_FIXTURE = {
  ...PACKAGE_FIXTURE,
  pythonModules: [
    PACKAGE_FIXTURE.pythonModules[0],
    {
      ...PACKAGE_FIXTURE.pythonModules[0],
      fileName: 'attitude_pid_copy.py'
    }
  ]
};

const MISSING_MODULE_PACKAGE_FIXTURE = {
  ...PACKAGE_FIXTURE,
  pythonModules: [],
  workbenchSnapshot: createWorkbenchSnapshot({
    modelNodes: [
      {
        id: 'node-missing-1',
        type: 'simulation_block',
        x: 320,
        y: 220,
        props: {
          name: 'Missing Module PID',
          moduleType: 'control',
          inputs: [{ name: 'Pitch Error', type: 'scalar' }],
          outputs: [{ name: 'Elevator Command', type: 'scalar' }],
          middleVars: []
        },
        pythonBinding: {
          bound: true,
          moduleId: 'missing_controller',
          fileName: 'missing_controller.py'
        }
      }
    ],
    modelEdges: [],
    nodeSeq: 1,
    edgeSeq: 0,
    activeLineType: 'normal',
    faultedBlks: [],
    importedFaultModels: []
  })
};

async function flushRuntime() {
  await nextTick();
  await Promise.resolve();
}

describe('Flight model package app integration', () => {
  afterEach(() => {
    vi.restoreAllMocks();
    window.localStorage.clear();
    document.body.innerHTML = '';
    __resetLegacyRuntimeForTests();
  });

  it('imports and exports a flight model package through the legacy runtime bridge', async () => {
    const wrapper = mount(App, { attachTo: document.body });
    await flushRuntime();

    expect(typeof window.__GZ_FLIGHT_MODEL_PACKAGE__?.importObject).toBe('function');
    expect(typeof window.__GZ_FLIGHT_MODEL_PACKAGE__?.exportCurrent).toBe('function');

    const importResult = window.__GZ_FLIGHT_MODEL_PACKAGE__.importObject(PACKAGE_FIXTURE);
    await flushRuntime();

    expect(importResult).toMatchObject({ ok: true });
    expect(window.__GZ_STATE__.modelNodes).toHaveLength(1);
    expect(window.__GZ_STATE__.activeModelPackage).toMatchObject({
      modelId: MODEL_ID,
      modelName: MODEL_NAME
    });
    expect(window.__GZ_STATE__.availableFaultModels).toHaveLength(1);
    expect(document.getElementById('tm')?.textContent).toContain(`飞控模型包“${MODEL_NAME}”已导入`);

    const exportedPackage = window.__GZ_FLIGHT_MODEL_PACKAGE__.exportCurrent();

    expect(exportedPackage.modelId).toBe(MODEL_ID);
    expect(exportedPackage.pythonModules[0].moduleId).toBe('attitude_pid');
    expect(exportedPackage.workbenchSnapshot.modelNodes[0].pythonBinding.sourcePackageId).toBe(MODEL_ID);

    wrapper.unmount();
  });

  it('falls back to the legacy localStorage snapshot when no JSON package is selected', async () => {
    const wrapper = mount(App, { attachTo: document.body });
    await flushRuntime();

    const legacySnapshot = createWorkbenchSnapshot({
      modelNodes: [
        {
          id: 'node-legacy-1',
          type: 'simulation_block',
          x: 240,
          y: 180,
          props: {
            name: 'Legacy PID',
            moduleType: 'control',
            inputs: [{ name: 'Legacy Input', type: 'scalar' }],
            outputs: [{ name: 'Legacy Output', type: 'scalar' }],
            middleVars: []
          },
          pythonBinding: binding
        }
      ],
      modelEdges: [],
      nodeSeq: 1,
      edgeSeq: 0,
      activeLineType: 'normal',
      faultedBlks: [],
      importedFaultModels: []
    });

    window.localStorage.setItem('gz-workbench-system-model', JSON.stringify(legacySnapshot));
    vi.spyOn(HTMLInputElement.prototype, 'click').mockImplementation(function click() {
      this.onchange?.(new Event('change'));
    });

    await window.doImportSys();
    await flushRuntime();

    expect(window.__GZ_STATE__.sysLoaded).toBe(true);
    expect(window.__GZ_STATE__.modelNodes).toHaveLength(1);
    expect(window.__GZ_STATE__.modelNodes[0].props.name).toBe('Legacy PID');
    expect(document.getElementById('tm')?.textContent).toContain('已恢复已保存的系统模型');

    wrapper.unmount();
  });

  it('hydrates lean imported simulation bindings from package pythonModules', async () => {
    const wrapper = mount(App, { attachTo: document.body });
    await flushRuntime();

    const importResult = window.__GZ_FLIGHT_MODEL_PACKAGE__.importObject(LEAN_PACKAGE_FIXTURE);
    await flushRuntime();

    const hydratedBinding = window.__GZ_STATE__.modelNodes[0].pythonBinding;

    expect(importResult).toMatchObject({ ok: true });
    expect(hydratedBinding).toMatchObject({
      bound: true,
      moduleId: 'attitude_pid',
      fileName: 'attitude_pid.py',
      entryFunction: 'process',
      rawSource: parsedInterface.rawSource,
      sourcePackageId: MODEL_ID,
      sourcePackageName: MODEL_NAME
    });
    expect(hydratedBinding.parsedInterface).toMatchObject({
      moduleName: 'attitude_pid',
      entryFunction: 'process'
    });

    wrapper.unmount();
  });

  it('surfaces imported model package details in the simulation block inspector and status area', async () => {
    const wrapper = mount(App, { attachTo: document.body });
    await flushRuntime();

    const importResult = window.__GZ_FLIGHT_MODEL_PACKAGE__.importObject(PACKAGE_FIXTURE);
    await flushRuntime();

    expect(importResult).toMatchObject({ ok: true });

    window.selectNode('node-1');
    await flushRuntime();

    const inspector = document.getElementById('pd');
    const status = document.getElementById('model-package-status');

    expect(inspector?.textContent).toContain('来源模型包');
    expect(inspector?.textContent).toContain('执行模式');
    expect(inspector?.textContent).toContain(MODEL_NAME);
    expect(inspector?.textContent).toContain('backend');
    expect(status).not.toBeNull();
    expect(status?.textContent).toContain(MODEL_NAME);
    expect(status?.textContent).toContain('backend');

    wrapper.unmount();
  });

  it('keeps the model package status visible outside the property panel after deselection and non-simulation selection', async () => {
    const wrapper = mount(App, { attachTo: document.body });
    await flushRuntime();

    const importResult = window.__GZ_FLIGHT_MODEL_PACKAGE__.importObject(PACKAGE_FIXTURE);
    await flushRuntime();

    expect(importResult).toMatchObject({ ok: true });

    window.selectNode('node-1');
    await flushRuntime();

    const initialStatus = document.getElementById('model-package-status');
    expect(initialStatus).not.toBeNull();
    expect(initialStatus?.parentElement?.id).not.toBe('pd');
    expect(initialStatus?.textContent).toContain(MODEL_NAME);
    expect(initialStatus?.textContent).toContain('backend');

    window.renderPropertyPanel(null);
    await flushRuntime();

    const afterDeselectStatus = document.getElementById('model-package-status');
    expect(afterDeselectStatus).not.toBeNull();
    expect(afterDeselectStatus?.textContent).toContain(MODEL_NAME);

    window.createNode('signal_source', 200, 180);
    await flushRuntime();

    const signalNode = window.__GZ_STATE__.modelNodes.find((node) => node.type === 'signal_source');
    window.selectNode(signalNode.id);
    await flushRuntime();

    const afterSignalSelectionStatus = document.getElementById('model-package-status');
    expect(afterSignalSelectionStatus).not.toBeNull();
    expect(afterSignalSelectionStatus?.textContent).toContain(MODEL_NAME);
    expect(afterSignalSelectionStatus?.textContent).not.toContain('backend');

    wrapper.unmount();
  });

  it('rejects duplicate python module identities during package import', async () => {
    const wrapper = mount(App, { attachTo: document.body });
    await flushRuntime();

    const importResult = window.__GZ_FLIGHT_MODEL_PACKAGE__.importObject(DUPLICATE_MODULE_PACKAGE_FIXTURE);

    expect(importResult.ok).toBe(false);
    expect(importResult.errors.some((error) => error.includes('Duplicate moduleId'))).toBe(true);

    wrapper.unmount();
  });

  it('rejects imports whose bound simulation blocks reference missing python modules', async () => {
    const wrapper = mount(App, { attachTo: document.body });
    await flushRuntime();

    const importResult = window.__GZ_FLIGHT_MODEL_PACKAGE__.importObject(MISSING_MODULE_PACKAGE_FIXTURE);

    expect(importResult.ok).toBe(false);
    expect(importResult.errors.some((error) => error.includes('missing_controller'))).toBe(true);

    wrapper.unmount();
  });

  it('removes persistent runtime listeners during reset before remounting', async () => {
    const windowRemoveSpy = vi.spyOn(window, 'removeEventListener');
    const documentRemoveSpy = vi.spyOn(document, 'removeEventListener');

    const wrapper = mount(App, { attachTo: document.body });
    await flushRuntime();

    __resetLegacyRuntimeForTests();

    expect(windowRemoveSpy.mock.calls.some(([type]) => type === 'gz:python-binding-confirm')).toBe(true);
    expect(windowRemoveSpy.mock.calls.some(([type]) => type === 'keydown')).toBe(true);
    expect(windowRemoveSpy.mock.calls.some(([type]) => type === 'resize')).toBe(true);
    expect(documentRemoveSpy.mock.calls.some(([type]) => type === 'keydown')).toBe(true);
    expect(window.__GZ_RUNTIME_LISTENERS__).toBeUndefined();

    wrapper.unmount();

    const wrapper2 = mount(App, { attachTo: document.body });
    await flushRuntime();

    expect(typeof window.__GZ_FLIGHT_MODEL_PACKAGE__?.importObject).toBe('function');

    wrapper2.unmount();
  });
});
