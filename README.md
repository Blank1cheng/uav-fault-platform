# GZ Vue

`GZ_vue` 是故障注入平台的 Vue 工作台。当前版本已经接入飞控模型包导入、Python 后端执行绑定，以及旧运行时桥接逻辑。

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

该命令会生成 eVTOL 小型非线性飞控模型包，供工作台导入测试。

### 2. 启动 Python 后端执行服务

如果需要让仿真块以后端模式执行，先启动 Python Runner：

```bash
python tools/python_model_runner/server.py
```

默认执行端点由 Python 绑定配置提供，前端导入模型包后可直接复用。

### 3. 导入模型包

在工作台中点击“导入系统模型”，选择：

```text
public/model-packages/evtol_small_nonlinear.json
```

导入后：

- 工作台会恢复模型包内的系统拓扑和故障库
- 仿真块检查面板会显示来源模型包与执行模式
- 已由模型包作者绑定的仿真块会保留 `backend` 执行模式和来源模型包信息

### 4. 导出当前模型包

在当前系统模型已加载且画布上存在组件时，点击“导出系统模型”即可导出当前工作区对应的飞控模型包 JSON。

导出内容会包含：

- 当前工作区快照
- 仿真块的 Python 绑定信息
- 来源模型包元数据
- 当前故障模型列表

## 说明

- 旧运行时主逻辑仍在 `src/services/legacy-runtime.txt` 中，当前以渐进替换方式维护。
- `public/legacy/TEST.html` 仍保留为历史对照页面。
