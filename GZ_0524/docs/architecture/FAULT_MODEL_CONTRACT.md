# 故障模型契约

故障组件的三种注入形式、左侧三类注入组件与运行时 `injectionForm` 的对应关系，见 [故障组件三种注入形式规范](./FAULT_COMPONENT_INJECTION_SPEC.md)。

## 模块声明

每个模块必须在模型包中声明自身的可绑定对象。故障设置界面不能从显示名称、节点标题或硬编码目录中推断变量。

```json
{
  "id": "attitude-controller",
  "name": "姿态控制器",
  "type": "component",
  "inputs": [
    { "id": "attitude_error", "name": "姿态误差", "dataType": "scalar" }
  ],
  "outputs": [
    { "id": "torque_request", "name": "力矩需求", "dataType": "scalar" }
  ],
  "intermediates": [
    { "id": "integral_state", "name": "积分状态", "dataType": "scalar" }
  ],
  "parameters": [
    { "id": "attitude_control_gain", "name": "姿态控制增益", "dataType": "scalar" }
  ]
}
```

## 绑定对象规则

- `bindingObject` 必须保存模块变量原名，例如 `attitude_error`、`torque_request`、`integral_state`。
- UI 可以显示中文名，但实例保存时不能把中文名、路径字符串或展示拼接文本当作唯一绑定值。
- 变量所在位置通过 `targetKind` 表示，可选值为 `input`、`output`、`intermediate`、`parameter`。
- 层级勾选只表示该变量允许注入的故障层级，不改变变量自身名称。

## 故障能力规则

模块可注入的故障能力由 `faultCapabilities` 声明。一个故障实例必须同时满足以下条件：

1. 故障类型存在于故障库中。
2. 故障层级在当前变量允许的层级内。
3. 变量类型与故障类型要求匹配。
4. 模块能力允许该故障类型。
5. 若故障类型要求特定插槽，则 `slotId` 必须匹配。

## 故障实例

故障实例是运行时真正注入的对象，不应依赖界面文本反推。

```json
{
  "instanceId": "fault-attitude-001",
  "faultTypeId": "gain_drift",
  "moduleId": "attitude-controller",
  "targetKind": "parameter",
  "targetId": "attitude_control_gain",
  "bindingObject": "attitude_control_gain",
  "layer": "electrical",
  "parameters": {
    "driftRate": 0.02
  },
  "timing": {
    "start": 10,
    "duration": 20
  }
}
```

## 运行时约束

- 运行时只读取 `bindingObject` 和结构化目标字段，不解析展示文案。
- 故障撤销必须通过 `instanceId` 定位。
- 同一变量允许多个故障实例时，必须有确定的叠加顺序。
- 跨模块传播必须生成显式传播记录，不能直接修改下游模块的原始绑定。
