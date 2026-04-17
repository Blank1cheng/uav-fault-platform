import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
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

const SIGNAL_ROUTING_PACKAGE_FIXTURE = {
  schemaVersion: 1,
  packageType: 'flight-control-model',
  modelId: 'signal-routing-demo',
  modelName: 'Signal Routing Demo',
  description: 'Branching and utility block demo package',
  source: {
    origin: 'test-fixture'
  },
  pythonModules: [],
  faultLibrary: [],
  workbenchSnapshot: createWorkbenchSnapshot({
    rootCanvasId: 'canvas-root',
    activeCanvasId: 'canvas-root',
    canvasTrail: ['canvas-root'],
    canvases: {
      'canvas-root': {
        id: 'canvas-root',
        name: '顶层',
        parentSubsystemNodeId: null,
        viewport: { scale: 1, offsetX: 0, offsetY: 0 },
        nodes: [
          { id: 'node-source', type: 'signal_source', x: 120, y: 140, w: 164, h: 84, props: { name: 'Source', waveType: '常值', amplitude: '1', frequency: '0', outputFormat: '标量' } },
          { id: 'node-gain', type: 'gain_block', x: 360, y: 120, w: 156, h: 84, props: { name: 'Gain', gain: '0.5', inputFormat: '标量', outputFormat: '标量' } },
          { id: 'node-scope', type: 'instrument_scope', x: 640, y: 120, w: 150, h: 74, props: { name: 'Scope', instrumentType: '示波器', sampleRate: '64kHz', signal: '输出' } },
          { id: 'node-sum', type: 'sum_block', x: 360, y: 280, w: 164, h: 88, props: { name: 'Sum', inputCount: 2, signs: ['+', '+'], outputFormat: '标量' } },
          { id: 'node-mux', type: 'mux_block', x: 640, y: 280, w: 164, h: 88, props: { name: 'Mux', inputCount: 2, outputFormat: '向量' } }
        ],
        edges: [
          { id: 'edge-source-gain', lineType: 'normal', sourceNodeId: 'node-source', targetNodeId: 'node-gain', sourcePortIndex: 0, targetPortIndex: 0 },
          { id: 'edge-source-scope', lineType: 'normal', sourceNodeId: 'node-source', targetNodeId: 'node-scope', sourcePortIndex: 0, targetPortIndex: 0 },
          { id: 'edge-gain-sum', lineType: 'normal', sourceNodeId: 'node-gain', targetNodeId: 'node-sum', sourcePortIndex: 0, targetPortIndex: 0 },
          { id: 'edge-source-sum', lineType: 'normal', sourceNodeId: 'node-source', targetNodeId: 'node-sum', sourcePortIndex: 0, targetPortIndex: 1 },
          { id: 'edge-source-mux', lineType: 'normal', sourceNodeId: 'node-source', targetNodeId: 'node-mux', sourcePortIndex: 0, targetPortIndex: 0 },
          { id: 'edge-sum-mux', lineType: 'normal', sourceNodeId: 'node-sum', targetNodeId: 'node-mux', sourcePortIndex: 0, targetPortIndex: 1 }
        ]
      }
    },
    nodeSeq: 5,
    edgeSeq: 6,
    activeLineType: 'normal',
    faultedBlks: [],
    importedFaultModels: []
  })
};

function loadPublicPackage(fileName) {
  const testDir = path.dirname(fileURLToPath(import.meta.url));
  const targetPath = path.resolve(testDir, '..', 'public', 'model-packages', fileName);

  return JSON.parse(readFileSync(targetPath, 'utf8'));
}

function collectLinkedSubsystemNodes(snapshot) {
  const rootCanvas = snapshot?.canvases?.[snapshot?.rootCanvasId];
  if (!rootCanvas) {
    return [];
  }

  return (rootCanvas.nodes || []).filter((node) => node?.type === 'subsystem_block' && node.targetCanvasId);
}

async function flushRuntime() {
  await nextTick();
  await Promise.resolve();
}

function getScopePeak(samples = []) {
  if (!samples.length) {
    return 0;
  }

  return samples.reduce((peak, sample) => {
    const value = Number.isFinite(sample?.actual) ? sample.actual : 0;
    return Math.max(peak, Math.abs(value));
  }, 0);
}

async function measurePackageDynamicsScopePeak(fileName) {
  const wrapper = mount(App, { attachTo: document.body });
  await flushRuntime();

  const pkg = loadPublicPackage(fileName);
  const importResult = window.__GZ_FLIGHT_MODEL_PACKAGE__.importObject(pkg);
  await flushRuntime();

  expect(importResult).toMatchObject({ ok: true });

  window.simInit(true);
  for (let step = 0; step < 6; step += 1) {
    window.simStep();
  }
  await flushRuntime();

  const scopeSamples = window.__GZ_SIM__?.actual?.scopeSamples?.['node-11']?.ch1 ?? [];
  const scopePeak = getScopePeak(scopeSamples);

  wrapper.unmount();
  document.body.innerHTML = '';
  __resetLegacyRuntimeForTests();

  return { scopeSamples, scopePeak };
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

  it('imports a branched signal-routing package and preserves utility blocks in the workbench state', async () => {
    const wrapper = mount(App, { attachTo: document.body });
    await flushRuntime();

    const importResult = window.__GZ_FLIGHT_MODEL_PACKAGE__.importObject(SIGNAL_ROUTING_PACKAGE_FIXTURE);
    await flushRuntime();

    const state = window.__GZ_STATE__;
    const rootCanvas = state.canvases[state.rootCanvasId];
    const sourceEdges = rootCanvas.edges.filter((edge) => edge.sourceNodeId === 'node-source');

    expect(importResult).toMatchObject({ ok: true });
    expect(rootCanvas.nodes).toEqual(expect.arrayContaining([
      expect.objectContaining({ type: 'gain_block' }),
      expect.objectContaining({ type: 'sum_block' }),
      expect.objectContaining({ type: 'mux_block' })
    ]));
    expect(sourceEdges).toHaveLength(4);
    expect(rootCanvas.edges).toEqual(expect.arrayContaining([
      expect.objectContaining({ targetNodeId: 'node-gain', targetPortIndex: 0 }),
      expect.objectContaining({ targetNodeId: 'node-scope', targetPortIndex: 0 }),
      expect.objectContaining({ targetNodeId: 'node-sum', targetPortIndex: 1 }),
      expect.objectContaining({ targetNodeId: 'node-mux', targetPortIndex: 0 })
    ]));

    wrapper.unmount();
  });

  it('imports the hierarchical eVTOL package and restores its child canvas structure', async () => {
    const wrapper = mount(App, { attachTo: document.body });
    await flushRuntime();

    const hierarchicalPackage = loadPublicPackage('evtol_small_nonlinear_hierarchical.json');
    const expectedLinkedSubsystemCount = collectLinkedSubsystemNodes(hierarchicalPackage.workbenchSnapshot).length;
    const importResult = window.__GZ_FLIGHT_MODEL_PACKAGE__.importObject(hierarchicalPackage);
    await flushRuntime();

    const state = window.__GZ_STATE__;
    expect(state.rootCanvasId).toBeTruthy();
    const rootCanvas = state.canvases[state.rootCanvasId];

    expect(importResult).toMatchObject({ ok: true });
    expect(state.activeModelPackage).toMatchObject({
      modelId: hierarchicalPackage.modelId,
      modelName: hierarchicalPackage.modelName
    });
    expect(rootCanvas).toBeTruthy();
    if (!rootCanvas) {
      throw new Error('Missing imported root canvas');
    }
    expect(expectedLinkedSubsystemCount).toBeGreaterThan(0);
    const linkedSubsystemNodes = (rootCanvas.nodes || []).filter((node) => node?.type === 'subsystem_block' && node.targetCanvasId);
    expect(linkedSubsystemNodes).toHaveLength(expectedLinkedSubsystemCount);

    const linkedChildCanvases = linkedSubsystemNodes
      .map((node) => state.canvases[node.targetCanvasId])
      .filter(Boolean);
    expect(linkedChildCanvases).toHaveLength(expectedLinkedSubsystemCount);
    linkedSubsystemNodes.forEach((node) => {
      const childCanvas = state.canvases[node.targetCanvasId];
      expect(childCanvas).toBeTruthy();
      if (!childCanvas) {
        throw new Error(`Missing linked child canvas for subsystem ${node.id}`);
      }
      expect(childCanvas.parentSubsystemNodeId).toBe(node.id);
      expect(childCanvas.nodes).toEqual(expect.arrayContaining([
        expect.objectContaining({ type: 'simulation_block', pythonBinding: expect.objectContaining({ bound: true }) })
      ]));
      expect(childCanvas.nodes).toEqual(expect.arrayContaining([
        expect.objectContaining({ type: 'subsystem_in_port' }),
        expect.objectContaining({ type: 'subsystem_out_port' })
      ]));
    });

    wrapper.unmount();
  });

  it('imports the hierarchical eVTOL fault package and restores motor_efficiency_loss inside the child canvas', async () => {
    const wrapper = mount(App, { attachTo: document.body });
    await flushRuntime();

    const hierarchicalFaultPackage = loadPublicPackage('evtol_small_nonlinear_hierarchical_fault_injected.json');
    const expectedLinkedSubsystemCount = collectLinkedSubsystemNodes(hierarchicalFaultPackage.workbenchSnapshot).length;
    const importResult = window.__GZ_FLIGHT_MODEL_PACKAGE__.importObject(hierarchicalFaultPackage);
    await flushRuntime();

    const state = window.__GZ_STATE__;
    expect(state.rootCanvasId).toBeTruthy();
    const rootCanvas = state.canvases[state.rootCanvasId];

    expect(importResult).toMatchObject({ ok: true });
    expect(state.activeModelPackage).toMatchObject({
      modelId: hierarchicalFaultPackage.modelId,
      modelName: hierarchicalFaultPackage.modelName
    });
    expect(state.availableFaultModels.some((model) => model.id === 'motor_efficiency_loss')).toBe(true);
    expect(rootCanvas).toBeTruthy();
    if (!rootCanvas) {
      throw new Error('Missing imported root canvas');
    }
    expect(expectedLinkedSubsystemCount).toBeGreaterThan(0);
    const rootFaultNodes = (rootCanvas.nodes || []).filter((node) => node?.injectedFault?.modelId === 'motor_efficiency_loss');
    expect(rootFaultNodes).toHaveLength(0);
    const linkedSubsystemNodes = (rootCanvas.nodes || []).filter((node) => node?.type === 'subsystem_block' && node.targetCanvasId);
    expect(linkedSubsystemNodes).toHaveLength(expectedLinkedSubsystemCount);

    const linkedChildCanvases = linkedSubsystemNodes
      .map((node) => state.canvases[node.targetCanvasId])
      .filter(Boolean);
    expect(linkedChildCanvases).toHaveLength(expectedLinkedSubsystemCount);
    linkedSubsystemNodes.forEach((node) => {
      const childCanvas = state.canvases[node.targetCanvasId];
      expect(childCanvas).toBeTruthy();
      if (!childCanvas) {
        throw new Error(`Missing linked child canvas for subsystem ${node.id}`);
      }
      expect(childCanvas.parentSubsystemNodeId).toBe(node.id);
    });

    const faultedChildCanvases = linkedChildCanvases.filter((childCanvas) => (
      childCanvas.nodes?.some((node) => node?.injectedFault?.modelId === 'motor_efficiency_loss')
    ));
    expect(faultedChildCanvases).toHaveLength(1);
    const faultedChildCanvas = faultedChildCanvases[0];
    expect(faultedChildCanvas).toBeTruthy();
    if (!faultedChildCanvas) {
      throw new Error('Missing faulted child canvas');
    }
    const faultNodes = faultedChildCanvas.nodes.filter((node) => node?.injectedFault?.modelId === 'motor_efficiency_loss');
    expect(faultNodes).toHaveLength(1);
    const totalFaultNodes = linkedChildCanvases.reduce((count, childCanvas) => (
      count + (childCanvas.nodes || []).filter((node) => node?.injectedFault?.modelId === 'motor_efficiency_loss').length
    ), 0);
    expect(totalFaultNodes).toBe(1);
    const faultNode = faultNodes[0];
    expect(faultNode).toBeTruthy();
    if (!faultNode) {
      throw new Error('Missing injected fault node in faulted child canvas');
    }
    expect(faultNode.type).toBe('simulation_block');
    expect(faultNode.injectedFault).toMatchObject({
      modelId: 'motor_efficiency_loss',
      layer: 'electrical',
      name: 'Motor Efficiency Loss'
    });

    wrapper.unmount();
  });

  it('reduces hierarchical dynamics-scope amplitude when the imported motor_efficiency_loss fault is preloaded', async () => {
    const { scopeSamples: normalScopeSamples, scopePeak: normalPeak } = await measurePackageDynamicsScopePeak(
      'evtol_small_nonlinear_hierarchical.json'
    );
    const { scopeSamples: faultScopeSamples, scopePeak: faultPeak } = await measurePackageDynamicsScopePeak(
      'evtol_small_nonlinear_hierarchical_fault_injected.json'
    );

    expect(normalScopeSamples.length).toBeGreaterThan(0);
    expect(faultScopeSamples.length).toBeGreaterThan(0);
    expect(normalPeak).toBeGreaterThan(0.01);
    expect(faultPeak).toBeGreaterThan(0);
    expect(faultPeak).toBeLessThan(normalPeak * 0.75);
  });

  it('reduces flat dynamics-scope amplitude when the imported motor_efficiency_loss fault is preloaded', async () => {
    const { scopeSamples: normalScopeSamples, scopePeak: normalPeak } = await measurePackageDynamicsScopePeak(
      'evtol_small_nonlinear.json'
    );
    const { scopeSamples: faultScopeSamples, scopePeak: faultPeak } = await measurePackageDynamicsScopePeak(
      'evtol_small_nonlinear_fault_injected.json'
    );

    expect(normalScopeSamples.length).toBeGreaterThan(0);
    expect(faultScopeSamples.length).toBeGreaterThan(0);
    expect(normalPeak).toBeGreaterThan(0.01);
    expect(faultPeak).toBeGreaterThan(0);
    expect(faultPeak).toBeLessThan(normalPeak * 0.75);
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
