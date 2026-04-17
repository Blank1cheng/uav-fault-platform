# GZ Vue

`GZ_vue` 是故障注入平台的 Vue 工作台。当前版本已接入飞控模型包导入、Python 后端执行绑定，以及旧运行时桥接逻辑。

## 目录说明

- `src/components/`：页面区域与弹窗组件
- `src/composables/`：工作台状态与组合式逻辑
- `src/constants/`：默认配置与静态常量
- `src/services/`：旧运行时桥接、模型包与快照服务
- `tests/`：Vitest 集成测试
- `public/model-packages/`：可直接导入的模型包样例

## 本地运行

```bash
npm install
npm run dev
```

常用命令：

```bash
npm test -- --run
npm run build
```

## 飞控模型包工作流

### 1. 生成模型包

在项目根目录执行：

```bash
node tools/flight_model_package/build_evtol_package.mjs
```

该命令会生成 eVTOL 小型非线性模型包，供工作台导入测试。

### 2. 启动 Python 后端执行服务

如果需要让仿真块通过后端模式执行，先启动 Python Runner：

```bash
python tools/python_model_runner/server.py
```

默认执行端点由 Python 绑定配置提供，前端导入模型包后可直接复用。

### 3. 导入模型包

在工作台中点击“导入系统模型”，按需选择以下四个包：

- 平铺版、正常版：`public/model-packages/evtol_small_nonlinear.json`
- 平铺版、预注入故障版：`public/model-packages/evtol_small_nonlinear_fault_injected.json`
- 层级版、正常版：`public/model-packages/evtol_small_nonlinear_hierarchical.json`
- 层级版、预注入故障版：`public/model-packages/evtol_small_nonlinear_hierarchical_fault_injected.json`

选择建议：

- 平铺版：适合直接查看完整系统拓扑，组件都在同一层级
- 层级版：适合查看子系统封装和内部层级，便于验证层级模型导入
- 正常版：未预置故障，适合从干净模型开始操作
- 预注入故障版：已包含预设故障状态，适合回放和验证故障场景

导入后：

- 工作台会恢复模型包内的系统拓扑和故障配置
- 仿真块检查面板会显示来源模型包与执行模式
- 由模型包作者绑定的仿真块会保留 `backend` 执行模式和来源信息

### 4. 导出当前模型包

当当前系统模型已加载且画布上存在组件时，点击“导出系统模型”即可导出当前工作区对应的飞控模型包 JSON。

导出内容包括：

- 当前工作区快照
- 仿真块的 Python 绑定信息
- 来源模型包元数据
- 当前故障模型列表

## 说明

- 旧运行时主逻辑仍在 `src/services/legacy-runtime.txt` 中，当前以渐进替换方式维护。
- `public/legacy/TEST.html` 仍保留为历史对照页面。

## 空白工作区与重置画布

- 打开平台后，可以继续走“导入系统模型”流程。
- 如果想从零开始建模，可以直接点击右上角 `新建空白模型`。
- 空白工作区创建后即可拖拽组件、连线、封装子系统、保存系统模型，不需要先导入 JSON。
- `重置画布` 会始终弹出确认框；确认后会清空当前根画布、所有子系统画布、当前模型包状态、故障注入状态以及示波器窗口状态，并回到新的空白工作区。

## 子系统分层建模

### 手动创建子系统

1. 在左侧组件栏拖入 `子系统块`
2. 双击子系统块进入内部画布
3. 在右侧属性面板配置输入/输出接口数量与名称
4. 在子系统内部使用自动生成的 `子系统输入口` / `子系统输出口` 继续连线
5. 通过顶部面包屑返回上层画布

### 将多个模块封装为子系统

1. 在同一层画布中先完成普通模块的摆放和连线
2. 使用 `Ctrl` 或 `Shift` 点击进行多选
3. 点击画布右下角 `封装为子系统`
4. 平台会自动创建子系统外壳、父层边界端口，以及子层 `子系统输入口` / `子系统输出口`

### 层级模型的导入与导出

- 子系统层级会跟随 `workbenchSnapshot` 一起保存到模型包 JSON 中。
- 导入层级模型包后，会恢复：
  - 根画布与子画布
  - 当前所在层级与面包屑路径
  - 子系统接口定义
  - 子系统内部节点、连线和 Python 绑定
## Signal Routing And Type Adapters

- 一个输出端口现在可以连接到多个下游输入端口。这用于信号分支，例如同一信号同时送入控制器、示波器和记录器。
- 一个输入端口默认仍然只允许一个上游来源。平台不会隐式把多路信号直接灌进同一个输入口。
- 如果需要把多个信号汇入同一个语义节点，请使用显式功能块，而不是把多根线直接接到同一个输入口。

### Flow Block

- `flow_block` 现在定位为 `信号适配块`
- 作用是统一输入输出名称、数据类型和格式，作为 Python 仿真块前的显式适配层
- 它默认仍然是单输入、单输出，不承担多路汇入语义

### Utility Blocks

- `gain_block`
  - 单输入、单输出
  - 对输入信号做比例缩放
- `sum_block`
  - 多输入、单输出
  - 通过显式端口表达求和，不再依赖隐式多源输入
- `mux_block`
  - 多输入、单输出
  - 把多路标量输入打包成一组向量输出，便于送入 Python 仿真块

### Current Routing Rule

- 允许：`一个输出 -> 多个输入`
- 禁止：`多个输出 -> 同一个输入`
- 需要汇入时：请使用 `sum_block` 或 `mux_block`
