export const systemModelingComponents = [
  { type: 'signal_source', label: '信号源' },
  { type: 'flow_block', label: '流程块' },
  { type: 'simulation_block', label: '仿真块' }
];

export const faultInjectionComponents = [
  { type: 'fault_bias', label: '偏置叠加块' },
  { type: 'fault_noise', label: '噪声注入块' }
];

export const instrumentComponents = [
  { type: 'instrument_scope', label: '示波器' },
  { type: 'instrument_spectrum', label: '频谱分析仪' },
  { type: 'instrument_logger', label: '数据记录仪' }
];

export const edgeComponents = [
  { type: 'normal', label: '普通连接线' },
  { type: 'can', label: 'CAN 总线' }
];
