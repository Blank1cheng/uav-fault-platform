export const FAULT_MATH_MODEL_DEFINITIONS = Object.freeze({
  physical: [
    {
      id: 'bias',
      name: '偏置模型',
      formula: 'p_fault = p + bias',
      defaultParameters: { bias: 0.1, start: 0, duration: '' }
    },
    {
      id: 'drift',
      name: '漂移模型',
      formula: 'p_fault = p + rate * max(t - start, 0)',
      defaultParameters: { rate: 0.006, start: 0, duration: '' }
    },
    {
      id: 'step',
      name: '突变模型',
      formula: 'p_fault = p + step',
      defaultParameters: { step: 0.1, start: 0, duration: '' }
    },
    {
      id: 'degradation',
      name: '衰减模型',
      formula: 'p_fault = p * scale(t)',
      defaultParameters: { scale: 0.85, start: 0, duration: '' }
    },
    {
      id: 'freeze',
      name: '卡死模型',
      formula: 'p_fault = hold(p, start)',
      defaultParameters: { start: 0, duration: '' }
    },
    {
      id: 'random',
      name: '随机模型',
      formula: 'p_fault = p + noise(seed, std)',
      defaultParameters: { seed: 1, std: 0.08, start: 0, duration: '' }
    }
  ],
  electrical: [
    {
      id: 'bias',
      name: '信号偏置',
      formula: 'y_fault = y + bias',
      defaultParameters: { bias: 0.1, start: 0, duration: '' }
    },
    {
      id: 'noise',
      name: '随机噪声',
      formula: 'y_fault = y + noise(seed, std)',
      defaultParameters: { seed: 1, std: 0.08, start: 0, duration: '' }
    },
    {
      id: 'freeze',
      name: '信号卡死',
      formula: 'y_fault = hold(y, start)',
      defaultParameters: { start: 0, duration: '' }
    },
    {
      id: 'intermittent',
      name: '间歇异常',
      formula: 'y_fault = f(y) when gate(t) else y',
      defaultParameters: { period: 4, duty: 0.25, start: 0, duration: '' }
    }
  ],
  protocol: [
    {
      id: 'delay',
      name: '报文延迟',
      formula: 'payload_fault[k] = payload[k - d]',
      defaultParameters: { delay_steps: 3, start: 0, duration: '' }
    },
    {
      id: 'dropout',
      name: '报文丢失',
      formula: 'payload_fault = previous(payload) when drop(seed, rate)',
      defaultParameters: { drop_rate: 0.08, seed: 1, start: 0, duration: '' }
    },
    {
      id: 'tamper',
      name: '报文篡改',
      formula: 'payload_fault = tamper(payload)',
      defaultParameters: { bias: 0.1, scale: 1, start: 0, duration: '' }
    },
    {
      id: 'stale',
      name: '陈旧报文',
      formula: 'payload_fault = hold(payload, start)',
      defaultParameters: { start: 0, duration: '' }
    }
  ]
});

const EDGE_ELECTRICAL_MODELS = Object.freeze(['bias', 'noise', 'freeze', 'intermittent']);
const EDGE_PROTOCOL_MODELS = Object.freeze(['delay', 'dropout', 'tamper', 'stale']);

function clone(value) {
  return JSON.parse(JSON.stringify(value ?? null));
}

function arrayOrEmpty(value) {
  return Array.isArray(value) ? value : [];
}

function isPlainObject(value) {
  return Boolean(value) && typeof value === 'object' && !Array.isArray(value);
}

function text(value, fallback = '') {
  return typeof value === 'string' && value.trim() ? value.trim() : fallback;
}

function lowerText(value) {
  return text(value).toLowerCase();
}

function uniqueTextArray(value) {
  return Array.from(new Set(arrayOrEmpty(value).map((item) => text(item)).filter(Boolean)));
}

function normalizeSlotLayer(slot = {}, fallback = 'electrical') {
  const layer = text(slot.layer ?? slot.layerKey, fallback);
  return ['physical', 'electrical', 'protocol'].includes(layer) ? layer : fallback;
}

function normalizeFaultSlot(slot = {}, target = {}, fallback = {}) {
  const fallbackLayer = fallback.layer
    ?? (target.sourceNodeId && target.targetNodeId && isProtocolEdge(target) ? 'protocol' : 'electrical');
  const layer = normalizeSlotLayer(slot, fallbackLayer);
  const slotId = text(
    slot.slotId ?? slot.id,
    fallback.slotId ?? `${layer}:${target.id || 'target'}:${fallback.index ?? 0}`
  );
  const allowedModels = uniqueTextArray(slot.allowedModels).length
    ? uniqueTextArray(slot.allowedModels)
    : uniqueTextArray(fallback.allowedModels);

  return {
    ...clone(slot),
    slotId,
    slotName: text(slot.slotName ?? slot.name ?? slot.label, fallback.slotName ?? slotId),
    layer,
    targetField: text(slot.targetField, fallback.targetField ?? ''),
    allowedModels
  };
}

function createPortSlot(layer, role, item = {}, index = 0) {
  const key = text(item.key ?? item.id ?? item.name ?? item.varName, `${role}_${index + 1}`)
    .replace(/\s+/g, '_');

  return {
    slotId: `${layer}:${role}:${key}`,
    slotName: text(item.name ?? item.label ?? item.varName, `${role} ${index + 1}`),
    layer,
    targetField: `${role}.${key}`,
    allowedModels: layer === 'physical'
      ? FAULT_MATH_MODEL_DEFINITIONS.physical.map((model) => model.id)
      : EDGE_ELECTRICAL_MODELS.slice(),
    parameterKey: text(item.key ?? item.id ?? item.name ?? item.varName),
    unit: text(item.unit)
  };
}

export function isProtocolEdge(edge = {}) {
  return Boolean(lowerText(edge.lineType ?? edge.type) === 'can'
    || lowerText(edge.bus) === 'can'
    || lowerText(edge.protocol) === 'can'
    || text(edge.channelId).toUpperCase().includes('CAN')
    || text(edge.messageId)
    || text(edge.canMessageId));
}

function createDefaultEdgeFaultSlots(edge = {}) {
  const slots = [
    {
      slotId: 'electrical:signal_value',
      slotName: text(edge.label ?? edge.signalName ?? edge.signalId, '信号值'),
      layer: 'electrical',
      targetField: 'signal.value',
      allowedModels: EDGE_ELECTRICAL_MODELS.slice(),
      signalId: text(edge.signalId),
      lineType: text(edge.lineType ?? edge.type, 'normal')
    }
  ];

  if (isProtocolEdge(edge)) {
    slots.push({
      slotId: 'protocol:can_message',
      slotName: text(edge.messageId ?? edge.canMessageId ?? edge.channelId, 'CAN 报文'),
      layer: 'protocol',
      targetField: 'can.payload',
      allowedModels: EDGE_PROTOCOL_MODELS.slice(),
      signalId: text(edge.signalId),
      channelId: text(edge.channelId),
      messageId: text(edge.messageId ?? edge.canMessageId)
    });
  }

  return slots;
}

function createDefaultNodeFaultSlots(node = {}, options = {}) {
  const props = isPlainObject(node.props) ? node.props : {};
  const physicalItems = options.skipPhysical
    ? []
    : [
      ...arrayOrEmpty(props.modelParameters),
      ...arrayOrEmpty(props.physicalParameters),
      ...arrayOrEmpty(node.physicalParameters)
    ];
  const electricalItems = [
    ...arrayOrEmpty(props.inputs).map((item, index) => ({ role: 'input', item, index })),
    ...arrayOrEmpty(props.outputs).map((item, index) => ({ role: 'output', item, index })),
    ...arrayOrEmpty(props.middleVars).map((item, index) => ({ role: 'middle', item, index }))
  ];

  return [
    ...physicalItems.map((item, index) => createPortSlot('physical', 'parameter', item, index)),
    ...electricalItems.map(({ role, item, index }) => createPortSlot('electrical', role, item, index))
  ];
}

function slotMergeKey(slot = {}) {
  return `${slot.layer || ''}:${slot.slotId || ''}:${slot.targetField || ''}`;
}

function mergeFaultSlots(target = {}, defaults = []) {
  const merged = [];
  const seen = new Set();

  [...arrayOrEmpty(target.faultSlots), ...defaults].forEach((slot, index) => {
    if (!isPlainObject(slot)) {
      return;
    }
    const normalized = normalizeFaultSlot(slot, target, { index });
    const key = slotMergeKey(normalized);
    if (seen.has(key)) {
      return;
    }
    seen.add(key);
    merged.push(normalized);
  });

  return merged;
}

function capabilitySlotsForTarget(target = {}, targetKind = 'node', capabilityMap = []) {
  const entry = arrayOrEmpty(capabilityMap).find((item) => (
    item?.targetId === target.id && (item.targetKind || targetKind) === targetKind
  ));
  return arrayOrEmpty(entry?.faultSlots);
}

export function normalizeModelNode(node = {}, { faultCapabilityMap = [] } = {}) {
  const safeNode = isPlainObject(node) ? clone(node) : {};
  const hasDeclaredPhysical = arrayOrEmpty(safeNode.faultSlots)
    .some((slot) => normalizeSlotLayer(slot) === 'physical');
  const defaults = [
    ...capabilitySlotsForTarget(safeNode, 'node', faultCapabilityMap),
    ...createDefaultNodeFaultSlots(safeNode, { skipPhysical: hasDeclaredPhysical })
  ];

  return {
    ...safeNode,
    faultSlots: mergeFaultSlots(safeNode, defaults)
  };
}

export function normalizeModelEdge(edge = {}, { faultCapabilityMap = [] } = {}) {
  const safeEdge = isPlainObject(edge) ? clone(edge) : {};
  const defaults = [
    ...capabilitySlotsForTarget(safeEdge, 'edge', faultCapabilityMap),
    ...createDefaultEdgeFaultSlots(safeEdge)
  ];

  return {
    ...safeEdge,
    lineType: text(safeEdge.lineType ?? safeEdge.type, 'normal'),
    faultSlots: mergeFaultSlots(safeEdge, defaults)
  };
}

export function normalizeModelStoreSnapshot(snapshot = {}, options = {}) {
  const safeSnapshot = isPlainObject(snapshot) ? clone(snapshot) : {};
  const faultCapabilityMap = arrayOrEmpty(options.faultCapabilityMap);
  const normalizeNodes = (nodes) => arrayOrEmpty(nodes)
    .map((node) => normalizeModelNode(node, { faultCapabilityMap }));
  const normalizeEdges = (edges) => arrayOrEmpty(edges)
    .map((edge) => normalizeModelEdge(edge, { faultCapabilityMap }));

  safeSnapshot.modelNodes = normalizeNodes(safeSnapshot.modelNodes);
  safeSnapshot.modelEdges = normalizeEdges(safeSnapshot.modelEdges);

  if (isPlainObject(safeSnapshot.canvases)) {
    Object.entries(safeSnapshot.canvases).forEach(([canvasId, canvas]) => {
      if (!isPlainObject(canvas)) {
        return;
      }
      safeSnapshot.canvases[canvasId] = {
        ...canvas,
        nodes: normalizeNodes(canvas.nodes),
        edges: normalizeEdges(canvas.edges)
      };
    });
  }

  return safeSnapshot;
}
