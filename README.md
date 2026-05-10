# UAV Fault Platform

无人机飞控系统故障注入与测点诊断演示平台。当前仓库面向一个固定的 eVTOL 闭环飞控 Demo，重点展示故障库、故障注入、画布状态变化、固定测点安装、点击检测和人工确认候选故障。

在线演示：

https://blank1cheng.github.io/uav-fault-platform/

## 当前 Demo

打开平台后会默认加载 `public/model-packages/evtol_closed_loop_fault_demo.json`，不需要手动导入模型即可演示。该模型和当前故障库一一对应，暂不面向其他系统通用复用。

推荐演示流程：

1. 打开在线演示或本地开发地址。
2. 点击“注入故障”，在故障库中选择一个或多个故障。
3. 调整故障参数，点击“确认注入”。弹窗会保持打开，便于继续注入多个故障。
4. 画布中受故障影响的组件或连线会同步变为故障态；已注入故障可在故障库中撤销。
5. 切换到“多信号流图”，进入“测点诊断台”。
6. 在固定位置安装测点，点击“检测故障”后系统才计算每个测点的候选故障。
7. 人工确认窗口按测点折叠显示候选故障，异常测点高亮，可逐项勾选确认。

## 本地运行

```bash
npm install
npm run dev
```

启动后打开终端输出的本地地址，通常是：

```text
http://127.0.0.1:5173/
```

## 构建与验证

```bash
npm test
npm run build
```

构建产物在 `dist/`，当前 GitHub Pages 使用 `gh-pages` 分支发布。

## 主要文件

- `public/model-packages/evtol_closed_loop_fault_demo.json`：默认加载的完整飞控 Demo 模型。
- `public/demo/uav_fault_diagnostic_demo.json`：测点诊断演示数据。
- `fault-types/fault-type-catalog.json`：无人机飞控故障类型库。
- `src/services/legacy-runtime.txt`：当前平台主要运行时桥接逻辑，包括故障注入、撤销、测点诊断台和画布同步。
- `src/styles/`：平台界面、画布和诊断台样式。
- `tests/`：故障库、画布、测点诊断和运行时契约测试。

## 说明

当前版本优先保证一个完整、可演示的无人机飞控故障平台闭环。后续如果需要支持其他系统，应为新系统单独设计模型、故障库、故障传播关系和测点位置。
