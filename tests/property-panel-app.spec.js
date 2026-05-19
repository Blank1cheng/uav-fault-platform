import { mount } from '@vue/test-utils';
import { afterEach, describe, expect, it } from 'vitest';
import { nextTick } from 'vue';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import App from '../src/App.vue';
import { __resetLegacyRuntimeForTests } from '../src/services/legacyRuntimeBootstrap.js';

function loadPublicPackage(fileName) {
  const testDir = path.dirname(fileURLToPath(import.meta.url));
  const targetPath = path.resolve(testDir, '..', 'public', 'model-packages', fileName);
  return JSON.parse(readFileSync(targetPath, 'utf8'));
}

async function flushRuntime() {
  await nextTick();
  await Promise.resolve();
}

async function mountWorkbench() {
  const wrapper = mount(App, { attachTo: document.body });
  await flushRuntime();
  return wrapper;
}

function setFieldValue(selector, value, eventName = 'input') {
  const field = document.querySelector(selector);
  expect(field).not.toBeNull();
  field.value = value;
  field.dispatchEvent(new Event(eventName, { bubbles: true }));
}

describe('property panel interaction', () => {
  afterEach(() => {
    window.localStorage.clear();
    document.body.innerHTML = '';
    __resetLegacyRuntimeForTests();
  });

  it('switches node property tabs and shows module-specific parameter fields', async () => {
    const wrapper = await mountWorkbench();

    window.doCreateBlankWorkspace();
    window.createNode('signal_source', 220, 220);
    await flushRuntime();

    const source = window.__GZ_STATE__.modelNodes.find((node) => node.type === 'signal_source');
    window.selectNode(source.id);
    await flushRuntime();

    expect(document.querySelector('[data-props-tab="overview"]')?.classList.contains('is-active')).toBe(true);

    document.querySelector('[data-props-tab="parameters"]').click();
    await flushRuntime();

    expect(document.querySelector('[data-props-tab="parameters"]')?.classList.contains('is-active')).toBe(true);
    expect(document.getElementById('prop-waveType')).not.toBeNull();
    expect(document.getElementById('prop-amplitude')).not.toBeNull();

    document.querySelector('[data-props-tab="faults"]').click();
    await flushRuntime();

    expect(document.getElementById('pd')?.textContent).toContain('No active faults');
    expect(document.querySelector('.props-fault-action')).not.toBeNull();

    wrapper.unmount();
  });

  it('can cancel injected faults and clears visual fault state from a component', async () => {
    const wrapper = await mountWorkbench();

    window.doCreateBlankWorkspace();
    window.createNode('simulation_block', 300, 240);
    await flushRuntime();

    const state = window.__GZ_STATE__;
    const block = state.modelNodes.find((node) => node.type === 'simulation_block');
    block.injectedFault = {
      modelId: 'sensor_additive_bias',
      name: 'Sensor Additive Bias',
      layer: 'electrical',
      runtimeBehavior: 'additive_bias',
      parameters: { offset: 0.2 }
    };
    block.faultBindings = [
      {
        bindingId: 'binding-test',
        faultModelId: 'sensor_additive_bias',
        name: 'Sensor Additive Bias',
        layer: 'electrical',
        active: true,
        injectedFault: block.injectedFault
      }
    ];
    state.faultedBlks = [block.id];

    window.selectNode(block.id);
    await flushRuntime();
    window.setPropertyPanelTab('faults');
    await flushRuntime();

    expect(document.getElementById(`b-${block.id}`)?.classList.contains('faulted')).toBe(true);
    expect(document.querySelector('[data-fault-binding-id="binding-test"]')).not.toBeNull();

    window.removeFaultBinding('node', block.id, 'binding-test');
    await flushRuntime();

    expect(block.injectedFault).toBeUndefined();
    expect(block.faultBindings?.filter((binding) => binding.active !== false)).toHaveLength(0);
    expect(state.faultedBlks).not.toContain(block.id);
    expect(document.getElementById(`b-${block.id}`)?.classList.contains('faulted')).toBe(false);
    expect(document.getElementById('pd')?.textContent).toContain('No active faults');

    wrapper.unmount();
  });

  it('edits CAN edge signal metadata for multi-signal flow inspection', async () => {
    const wrapper = await mountWorkbench();

    window.doCreateBlankWorkspace();
    window.createNode('signal_source', 180, 220);
    window.createNode('simulation_block', 480, 220);
    await flushRuntime();

    const state = window.__GZ_STATE__;
    const source = state.modelNodes.find((node) => node.type === 'signal_source');
    const target = state.modelNodes.find((node) => node.type === 'simulation_block');
    state.modelEdges.push({
      id: 'edge-can-test',
      lineType: 'can',
      sourceNodeId: source.id,
      targetNodeId: target.id,
      sourcePortIndex: 0,
      targetPortIndex: 0
    });
    window.renderModelNodes();
    window.selectEdge('edge-can-test');
    await flushRuntime();

    window.setPropertyPanelTab('parameters');
    await flushRuntime();

    document.getElementById('prop-edge-signal-id').value = 'imu.pitch_rate';
    document.getElementById('prop-edge-channel-id').value = 'CAN-FC-01';
    document.getElementById('prop-edge-message-id').value = '0x184';
    document.getElementById('prop-edge-signal-unit').value = 'rad/s';
    document.getElementById('prop-edge-payload-kind').value = 'float32';
    document.getElementById('prop-edge-fault-policy').value = 'propagates';
    window.saveSelectedEdgeMetadata();
    await flushRuntime();

    const edge = state.modelEdges.find((item) => item.id === 'edge-can-test');
    expect(edge).toMatchObject({
      signalId: 'imu.pitch_rate',
      channelId: 'CAN-FC-01',
      messageId: '0x184',
      signalUnit: 'rad/s',
      payloadKind: 'float32',
      faultPropagationPolicy: 'propagates'
    });
    expect(edge.signalChannels).toEqual([
      expect.objectContaining({
        signalId: 'imu.pitch_rate',
        channelId: 'CAN-FC-01',
        messageId: '0x184'
      })
    ]);

    const metrics = window.collectDataflowEdges().find((item) => item.edge.id === 'edge-can-test').metrics;
    expect(metrics.signalId).toBe('imu.pitch_rate');
    expect(metrics.channelId).toBe('CAN-FC-01');
    expect(metrics.messageId).toBe('0x184');

    window.setPropertyPanelTab('outputs');
    await flushRuntime();

    expect(document.getElementById('pd')?.textContent).toContain('imu.pitch_rate');
    expect(document.getElementById('pd')?.textContent).toContain('CAN-FC-01');
    expect(document.getElementById('pd')?.textContent).toContain('0x184');

    wrapper.unmount();
  });

  it('preserves secondary CAN signal channels when saving primary edge metadata', async () => {
    const wrapper = await mountWorkbench();

    window.doCreateBlankWorkspace();
    window.createNode('signal_source', 180, 220);
    window.createNode('simulation_block', 480, 220);
    await flushRuntime();

    const state = window.__GZ_STATE__;
    const source = state.modelNodes.find((node) => node.type === 'signal_source');
    const target = state.modelNodes.find((node) => node.type === 'simulation_block');
    state.modelEdges.push({
      id: 'edge-can-multi-channel',
      lineType: 'can',
      sourceNodeId: source.id,
      targetNodeId: target.id,
      sourcePortIndex: 0,
      targetPortIndex: 0,
      signalChannels: [
        {
          signalId: 'imu.pitch_rate.old',
          channelId: 'CAN-FC-OLD',
          messageId: '0x180',
          payloadKind: 'float32'
        },
        {
          signalId: 'imu.temperature',
          channelId: 'CAN-FC-IMU',
          messageId: '0x185',
          payloadKind: 'uint16'
        }
      ]
    });
    window.renderModelNodes();
    window.selectEdge('edge-can-multi-channel');
    await flushRuntime();

    window.setPropertyPanelTab('parameters');
    await flushRuntime();

    document.getElementById('prop-edge-signal-id').value = 'imu.pitch_rate';
    document.getElementById('prop-edge-channel-id').value = 'CAN-FC-01';
    document.getElementById('prop-edge-message-id').value = '0x184';
    document.getElementById('prop-edge-payload-kind').value = 'float32';
    window.saveSelectedEdgeMetadata();
    await flushRuntime();

    const edge = state.modelEdges.find((item) => item.id === 'edge-can-multi-channel');
    expect(edge.signalChannels).toHaveLength(2);
    expect(edge.signalChannels[0]).toMatchObject({
      signalId: 'imu.pitch_rate',
      channelId: 'CAN-FC-01',
      messageId: '0x184',
      payloadKind: 'float32'
    });
    expect(edge.signalChannels[1]).toMatchObject({
      signalId: 'imu.temperature',
      channelId: 'CAN-FC-IMU',
      messageId: '0x185',
      payloadKind: 'uint16'
    });

    wrapper.unmount();
  });

  it('renders CAN edge inspector sections for route, channels, faults, and diagnostics', async () => {
    const wrapper = await mountWorkbench();

    window.doCreateBlankWorkspace();
    window.createNode('signal_source', 180, 220);
    window.createNode('simulation_block', 480, 220);
    await flushRuntime();

    const state = window.__GZ_STATE__;
    const source = state.modelNodes.find((node) => node.type === 'signal_source');
    const target = state.modelNodes.find((node) => node.type === 'simulation_block');
    state.modelEdges.push({
      id: 'edge-can-inspector',
      lineType: 'can',
      sourceNodeId: source.id,
      targetNodeId: target.id,
      sourcePortIndex: 0,
      targetPortIndex: 0,
      currentValue: 12.4,
      residualValue: 0.3,
      signalChannels: [
        {
          signalId: 'imu.pitch_rate',
          channelId: 'CAN-FC-01',
          messageId: '0x184',
          signalRole: 'primary',
          signalUnit: 'rad/s',
          payloadKind: 'float32',
          sampleRate: '100Hz',
          faultPropagationPolicy: 'propagates'
        },
        {
          signalId: 'imu.temperature',
          channelId: 'CAN-FC-IMU',
          messageId: '0x185',
          signalRole: 'secondary',
          signalUnit: 'degC',
          payloadKind: 'uint16',
          sampleRate: '10Hz',
          faultPropagationPolicy: 'localOnly'
        }
      ]
    });
    window.renderModelNodes();
    window.selectEdge('edge-can-inspector');
    await flushRuntime();

    const pd = () => document.getElementById('pd');

    expect(document.querySelector('[data-edge-overview]')).not.toBeNull();
    expect(document.querySelector('[data-edge-route]')).not.toBeNull();
    expect(document.querySelector('[data-edge-channel-count]')).not.toBeNull();
    expect(pd()?.textContent).toContain(source.id);
    expect(pd()?.textContent).toContain(target.id);
    expect(pd()?.textContent.toLowerCase()).toContain('can');
    expect(pd()?.textContent).toContain('imu.pitch_rate');
    expect(pd()?.textContent).toContain('imu.temperature');

    window.setPropertyPanelTab('parameters');
    await flushRuntime();

    expect(document.querySelector('[data-edge-channel-list]')).not.toBeNull();
    expect(document.querySelector('[data-edge-channel-card="primary"]')).not.toBeNull();
    expect(document.querySelector('[data-edge-channel-card="secondary"]')).not.toBeNull();
    expect(document.getElementById('prop-edge-signal-id')).not.toBeNull();
    expect(document.getElementById('prop-edge-channel-id')).not.toBeNull();
    expect(document.getElementById('prop-edge-message-id')).not.toBeNull();
    expect(pd()?.textContent).toContain('通道配置');
    expect(pd()?.textContent).toContain('连接类型');
    expect(pd()?.textContent).toContain('主通道');
    expect(pd()?.textContent).toContain('可编辑');
    expect(pd()?.textContent).toContain('信号ID');
    expect(pd()?.textContent).toContain('通道ID');
    expect(pd()?.textContent).toContain('CAN报文ID');
    expect(pd()?.textContent).toContain('信号角色');
    expect(pd()?.textContent).toContain('单位');
    expect(pd()?.textContent).toContain('载荷类型');
    expect(pd()?.textContent).toContain('采样率');
    expect(pd()?.textContent).toContain('故障传播策略');
    expect(pd()?.textContent).not.toContain('Channel configuration');
    expect(pd()?.textContent).not.toContain('primary channel');
    expect(pd()?.textContent).not.toContain('editable');
    expect(pd()?.textContent).not.toContain('No secondary channels');

    document.getElementById('prop-edge-signal-id').value = 'imu.pitch_rate.filtered';
    document.getElementById('prop-edge-channel-id').value = 'CAN-FC-02';
    document.getElementById('prop-edge-message-id').value = '0x186';
    window.saveSelectedEdgeMetadata();
    await flushRuntime();

    const edge = state.modelEdges.find((item) => item.id === 'edge-can-inspector');
    expect(edge.signalChannels).toHaveLength(2);
    expect(edge.signalChannels[0]).toMatchObject({
      signalId: 'imu.pitch_rate.filtered',
      channelId: 'CAN-FC-02',
      messageId: '0x186'
    });
    expect(edge.signalChannels[1]).toMatchObject({
      signalId: 'imu.temperature',
      channelId: 'CAN-FC-IMU',
      messageId: '0x185'
    });

    edge.faultBindings = [
      {
        bindingId: 'edge-fault-can-delay',
        faultModelId: 'fm-can-delay',
        name: 'CAN delay',
        layer: 'protocol',
        propagationMode: 'protocolEdge',
        runtimeBehavior: 'delay',
        active: true,
        parameters: {
          latency: 0.025,
          dropRate: 0.12,
          burstLength: 4,
          affectedChannels: ['CAN-FC-02', 'CAN-FC-IMU']
        }
      }
    ];
    window.setPropertyPanelTab('faults');
    await flushRuntime();

    expect(document.querySelector('.props-protocol-action')).not.toBeNull();
    expect(document.querySelector('[data-fault-binding-id="edge-fault-can-delay"]')).not.toBeNull();
    expect(pd()?.textContent).toContain('delay');
    expect(pd()?.textContent).toContain('latency');
    expect(pd()?.textContent).toContain('dropRate');
    expect(pd()?.textContent).toContain('burstLength');

    window.setPropertyPanelTab('outputs');
    await flushRuntime();

    expect(document.querySelector('[data-edge-diagnostics]')).not.toBeNull();
    ['currentValue', 'residual', 'latency', 'dropRate', 'burstLength', 'status'].forEach((label) => {
      expect(pd()?.textContent).toContain(label);
    });
    expect(pd()?.textContent).toContain('CAN-FC-02');
    expect(pd()?.textContent).toContain('CAN-FC-IMU');
    expect(pd()?.textContent).toContain('delay');

    wrapper.unmount();
  });

  it('shows a Chinese edge summary before internal variable mapping', async () => {
    const wrapper = await mountWorkbench();

    const pkg = loadPublicPackage('evtol_closed_loop_fault_demo.json');
    const importResult = window.__GZ_FLIGHT_MODEL_PACKAGE__.importObject(pkg);
    await flushRuntime();

    expect(importResult).toMatchObject({ ok: true });

    window.selectEdge('edge-imu-error');
    await flushRuntime();

    const summary = document.querySelector('[data-edge-chinese-summary]');
    const internalMapping = document.querySelector('[data-edge-internal-mapping]');
    const pd = () => document.getElementById('pd');

    expect(document.querySelector('[data-edge-overview]')).not.toBeNull();
    expect(document.querySelector('[data-edge-route]')).not.toBeNull();
    expect(document.querySelector('[data-edge-channel-count]')).not.toBeNull();
    expect(summary).not.toBeNull();
    expect(internalMapping).not.toBeNull();
    expect(summary.compareDocumentPosition(internalMapping) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();

    expect(pd()?.textContent).toContain('链路概览');
    expect(pd()?.textContent).toContain('连接关系');
    expect(pd()?.textContent).toContain('源模块');
    expect(pd()?.textContent).toContain('目标模块');
    expect(pd()?.textContent).toContain('连线类型');
    expect(pd()?.textContent).toContain('总线类型');
    expect(pd()?.textContent).toContain('通道数量');
    expect(pd()?.textContent).toContain('故障来源');
    expect(pd()?.textContent).toContain('主信号：imu.pitch_rate');
    expect(pd()?.textContent).not.toContain('Route identity');
    expect(pd()?.textContent).not.toContain('中文链路摘要');

    expect(summary.textContent).toContain('链路摘要');
    expect(summary.textContent).toContain('IMU');
    expect(summary.textContent).toContain('测量反馈');
    expect(summary.textContent).toContain('测点');
    expect(summary.textContent).toContain('传播');

    expect(internalMapping.textContent).toContain('边ID');
    expect(internalMapping.textContent).toContain('源节点ID');
    expect(internalMapping.textContent).toContain('目标节点ID');
    expect(internalMapping.textContent).toContain('信号ID');
    expect(internalMapping.textContent).toContain('通道ID');
    expect(internalMapping.textContent).toContain('CAN报文');
    expect(internalMapping.textContent).toContain('Python变量');
    expect(internalMapping.textContent).toContain('edge-imu-error');
    expect(internalMapping.textContent).toContain('imu.pitch_rate');
    expect(internalMapping.textContent).toContain('CAN-FC-IMU');
    expect(internalMapping.textContent).toContain('0x184');

    ['涓', '鎸', '娴嬬', '浼犳', '鈫'].forEach((marker) => {
      expect(pd()?.textContent).not.toContain(marker);
    });

    wrapper.unmount();
  });

  it('shows localized parameter empty states for single-channel edges', async () => {
    const wrapper = await mountWorkbench();

    window.doCreateBlankWorkspace();
    window.createNode('signal_source', 180, 220);
    window.createNode('simulation_block', 480, 220);
    await flushRuntime();

    const state = window.__GZ_STATE__;
    const source = state.modelNodes.find((node) => node.type === 'signal_source');
    const target = state.modelNodes.find((node) => node.type === 'simulation_block');
    state.modelEdges.push({
      id: 'edge-single-channel',
      lineType: 'can',
      sourceNodeId: source.id,
      targetNodeId: target.id,
      sourcePortIndex: 0,
      targetPortIndex: 0,
      signalId: 'imu.pitch_rate',
      channelId: 'CAN-FC-IMU',
      messageId: '0x184'
    });
    window.renderModelNodes();
    window.selectEdge('edge-single-channel');
    await flushRuntime();

    window.setPropertyPanelTab('parameters');
    await flushRuntime();

    const panelText = document.getElementById('pd')?.textContent;
    expect(panelText).toContain('通道配置');
    expect(panelText).toContain('主通道');
    expect(panelText).toContain('可编辑');
    expect(panelText).toContain('暂无次级通道');
    expect(panelText).not.toContain('Channel configuration');
    expect(panelText).not.toContain('primary channel');
    expect(panelText).not.toContain('editable');
    expect(panelText).not.toContain('No secondary channels');
    ['涓', '鎸', '娴嬬', '浼犳', '鈫'].forEach((marker) => {
      expect(panelText).not.toContain(marker);
    });

    wrapper.unmount();
  });

  it('opens component authoring dialog from a custom event and displays parsed interfaces', async () => {
    const wrapper = await mountWorkbench();

    window.dispatchEvent(new CustomEvent('gz:open-component-authoring', {
      detail: {
        parsedInterface: {
          fileName: 'attitude_controller.py',
          moduleName: 'attitude_controller',
          description: '姿态控制器',
          entryFunction: 'process',
          inputs: [
            { name: 'attitude_error', displayName: '姿态误差', type: 'float' }
          ],
          outputs: [
            { name: 'output_0', displayName: '力矩指令', type: 'float' }
          ],
          middleVars: [],
          rawSource: 'def process(attitude_error): return attitude_error'
        }
      }
    }));
    await flushRuntime();

    const dialog = document.querySelector('[data-testid="component-authoring-dialog"]');
    expect(dialog).not.toBeNull();
    expect(dialog?.textContent).toContain('姿态控制器');
    expect(dialog?.textContent).toContain('姿态误差');
    expect(dialog?.textContent).toContain('力矩指令');

    wrapper.unmount();
  });

  it('opens fault authoring dialog for a selected target slot', async () => {
    const wrapper = await mountWorkbench();

    window.dispatchEvent(new CustomEvent('gz:open-fault-authoring', {
      detail: {
        target: {
          targetKind: 'node',
          targetId: 'node-imu',
          targetName: 'IMU 陀螺仪反馈',
          slotId: 'gyro-feedback',
          slotName: '陀螺仪反馈信号'
        }
      }
    }));
    await flushRuntime();

    const dialog = document.querySelector('[data-testid="fault-authoring-dialog"]');
    expect(dialog).not.toBeNull();
    expect(dialog?.textContent).toContain('IMU 陀螺仪反馈');
    expect(dialog?.textContent).toContain('陀螺仪反馈信号');
    expect(dialog?.textContent).toContain('故障名称');

    wrapper.unmount();
  });

  it('saves a newly authored component into the canvas and active model package', async () => {
    const wrapper = await mountWorkbench();

    window.doCreateBlankWorkspace();
    await flushRuntime();

    window.dispatchEvent(new CustomEvent('gz:open-component-authoring', {
      detail: {
        parsedInterface: {
          fileName: 'custom_attitude.py',
          moduleName: 'custom_attitude',
          description: '自定义姿态模块',
          entryFunction: 'process',
          inputs: [
            { name: 'pitch_error', displayName: '俯仰误差', type: 'float' }
          ],
          outputs: [
            { name: 'torque_cmd', displayName: '力矩指令', type: 'float' }
          ],
          middleVars: [
            { name: 'controller_state', displayName: '控制状态', type: 'float' }
          ],
          rawSource: 'def process(pitch_error): return pitch_error'
        }
      }
    }));
    await flushRuntime();

    setFieldValue('[data-authoring-component-name]', '自定义姿态控制器');
    setFieldValue('[data-authoring-slot-name]', '控制输出故障位');
    document.querySelector('[data-save-authored-component]').click();
    await flushRuntime();

    const state = window.__GZ_STATE__;
    const node = state.modelNodes.find((item) => item.props?.name === '自定义姿态控制器');

    expect(node).toMatchObject({
      type: 'simulation_block',
      props: expect.objectContaining({
        name: '自定义姿态控制器'
      })
    });
    expect(node.faultSlots).toEqual([
      expect.objectContaining({
        slotName: '控制输出故障位',
        signalId: 'custom_attitude.torque_cmd',
        allowedFaultTypeIds: []
      })
    ]);
    expect(state.activeModelPackage.systemModel.nodes.some((item) => item.id === node.id)).toBe(true);
    expect(state.activeModelPackage.componentTemplates.some((item) => item.templateId === node.templateId)).toBe(true);
    expect(state.activeModelPackage.faultCapabilityMap).toContainEqual(expect.objectContaining({
      targetKind: 'node',
      targetId: node.id,
      faultSlots: [
        expect.objectContaining({
          slotId: node.faultSlots[0].slotId,
          allowedFaultTypeIds: []
        })
      ]
    }));
    expect(document.querySelector('[data-testid="component-authoring-dialog"]')).toBeNull();

    wrapper.unmount();
  });

  it('saves a newly authored fault and exposes it as a compatible target fault', async () => {
    const wrapper = await mountWorkbench();

    window.doCreateBlankWorkspace();
    await flushRuntime();

    window.dispatchEvent(new CustomEvent('gz:open-component-authoring', {
      detail: {
        parsedInterface: {
          fileName: 'custom_imu.py',
          moduleName: 'custom_imu',
          description: '自定义 IMU 模块',
          entryFunction: 'process',
          inputs: [],
          outputs: [
            { name: 'pitch_rate', displayName: '俯仰角速度', type: 'float' }
          ],
          middleVars: [],
          rawSource: 'def process(): return 0'
        }
      }
    }));
    await flushRuntime();

    setFieldValue('[data-authoring-component-name]', '自定义 IMU');
    setFieldValue('[data-authoring-slot-name]', '陀螺仪反馈故障位');
    document.querySelector('[data-save-authored-component]').click();
    await flushRuntime();

    const state = window.__GZ_STATE__;
    const node = state.modelNodes.find((item) => item.props?.name === '自定义 IMU');
    const slot = node.faultSlots[0];

    window.dispatchEvent(new CustomEvent('gz:open-fault-authoring', {
      detail: {
        target: {
          targetKind: 'node',
          targetId: node.id,
          targetName: node.props.name,
          slotId: slot.slotId,
          slotName: slot.slotName
        }
      }
    }));
    await flushRuntime();

    setFieldValue('[data-authoring-fault-id]', 'custom_gyro_bias');
    setFieldValue('[data-authoring-fault-name]', '自定义陀螺仪偏置');
    setFieldValue('[data-authoring-fault-layer]', 'electrical', 'change');
    setFieldValue('[data-authoring-fault-behavior]', 'bias', 'change');
    setFieldValue('[data-authoring-param-name="bias"]', '0.18');
    document.querySelector('[data-save-authored-fault]').click();
    await flushRuntime();

    expect(state.activeModelPackage.faultTypeCatalog).toContainEqual(expect.objectContaining({
      id: 'custom_gyro_bias',
      displayName: '自定义陀螺仪偏置',
      runtimeBehavior: 'bias'
    }));
    expect(state.activeModelPackage.faultCapabilityMap.find((entry) => entry.targetId === node.id).faultSlots[0].allowedFaultTypeIds).toContain('custom_gyro_bias');

    const compatible = window.getCompatibleFaultModelsForTarget(node);
    expect(compatible.map((item) => item.id)).toContain('custom_gyro_bias');

    const dropResult = window.handleFaultComponentDrop({ target: node });
    await flushRuntime();

    expect(dropResult).toMatchObject({ ok: true, targetId: node.id, targetKind: 'node' });
    expect(document.querySelector('[data-activate-compatible-fault="custom_gyro_bias"]')).not.toBeNull();
    expect(document.querySelector('[data-testid="fault-authoring-dialog"]')).toBeNull();

    wrapper.unmount();
  });

  it('opens authoring dialogs from visible palette actions', async () => {
    const wrapper = await mountWorkbench();

    window.doCreateBlankWorkspace();
    await flushRuntime();

    document.querySelector('[data-open-component-authoring]').click();
    await flushRuntime();

    expect(document.querySelector('[data-testid="component-authoring-dialog"]')).not.toBeNull();

    setFieldValue('[data-authoring-component-name]', '入口测试模块');
    setFieldValue('[data-authoring-slot-name]', '入口测试故障位');
    document.querySelector('[data-save-authored-component]').click();
    await flushRuntime();

    const node = window.__GZ_STATE__.modelNodes.find((item) => item.props?.name === '入口测试模块');
    window.selectNode(node.id);
    await flushRuntime();

    document.querySelector('[data-open-fault-authoring-for-selected]').click();
    await flushRuntime();

    const dialog = document.querySelector('[data-testid="fault-authoring-dialog"]');
    expect(dialog).not.toBeNull();
    expect(dialog?.textContent).toContain('入口测试模块');
    expect(dialog?.textContent).toContain('入口测试故障位');

    wrapper.unmount();
  });
});
