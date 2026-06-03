# 故障组件三种注入形式规范

本文定义平台中左侧故障组件、属性面板“注入故障”按钮、运行时故障实例之间的统一契约。所有入口最终都必须生成同一种结构化记录，避免 UI 文案、中文显示名或临时拼接字符串进入后端绑定逻辑。

## 统一原则

1. 注入目标必须来自模型包声明的 `faultCapabilityMap.faultSlots`，不能由组件显示名推断。
2. `bindingObject` 和 `targetVariable` 必须保存模块或连线声明中的变量原名，不做二次加工。
3. 故障组件只决定候选目标和故障类型的过滤条件；实际绑定仍由目标槽位决定。
4. 每个运行时实例必须写入 `injectionForm`，取值只能是 `module-variable`、`signal-edge`、`protocol-bus`。

## 形式一：模块变量注入

`injectionForm = "module-variable"`

用于模块内部的参数、输入、输出、中间变量。典型入口包括属性面板“故障设置 -> 注入故障”，以及将物理层或电气层故障组件拖到模块上。

目标要求：

- `targetKind = "node"`
- 槽位来自目标模块的 `faultSlots`
- 槽位 `layer` 为 `physical` 或 `electrical`
- `bindingObject` 使用槽位声明的变量原名，例如 `controller_gain`、`integral_state`

组件映射：

- `physical_fault_injector` 只显示 `physical` 槽位和物理层故障
- `electrical_fault_injector` 显示 `electrical` 槽位和电气层故障

## 形式二：连线信号注入

`injectionForm = "signal-edge"`

用于普通信号连线上的数值扰动、偏置、噪声、冻结等电气层故障。

目标要求：

- `targetKind = "edge"`
- 槽位 `layer = "electrical"`
- 目标一般为普通信号边，槽位应声明 `signalId` 或 `bindingObject`
- `bindingObject` 使用连线信号原名，例如 `cmd.signal`

组件映射：

- `electrical_fault_injector` 拖到兼容连线时，只显示电气层连线槽位和电气层故障

## 形式三：协议/总线注入

`injectionForm = "protocol-bus"`

用于 CAN、协议总线或报文级故障，例如延迟、丢包、篡改、阻塞。

目标要求：

- `targetKind = "edge"`
- 槽位 `layer = "protocol"`
- 目标连线应声明协议槽位，例如 `messageId`、`channelId`、`signalId`
- `bindingObject` 使用协议信号原名，不使用显示标签

组件映射：

- `protocol_fault_injector` 只显示协议槽位和协议层故障

## 运行时记录

三种形式都必须同步写入以下位置：

- `state.faultInstances[]`
- 目标对象的 `target.injectedFault`
- 目标对象的 `target.faultBindings[]`
- 可视化故障标签 `state.faultTags[]`

最小字段如下：

```json
{
  "instanceId": "fault-inst-001",
  "faultTypeId": "can_bus_delay",
  "targetKind": "edge",
  "targetId": "edge-imu-error",
  "slotId": "imu-feedback-can",
  "slotName": "IMU 反馈 CAN 报文",
  "layer": "protocol",
  "injectionForm": "protocol-bus",
  "bindingObject": "imu.pitch_rate",
  "targetVariable": "imu.pitch_rate",
  "targetField": "can.payload",
  "parameters": {
    "delay_seconds": 0.12
  },
  "active": true
}
```

## UI 行为

- 属性面板不额外加工变量名，只展示槽位名和变量原名。
- 拖拽故障组件时，只高亮满足 `targetKind + layer` 的目标。
- 注入对话框只列出同时匹配目标槽位、故障层级、故障类型的候选项。
- 同一个故障类型注入到不同槽位时，应按 `targetId + slotId + faultTypeId` 区分。
