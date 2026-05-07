# UAV Fault Platform

无人机飞控系统故障注入与多信号流图分析平台。项目基于 Vue 3 和 Vite 构建，提供飞控系统模型导入、故障库注入、仿真控制、示波器查看、属性面板配置、多信号流图诊断和测点响应快照分析。

在线访问地址：

https://blank1cheng.github.io/uav-fault-platform/

## 主要功能

- 导入完整飞控系统模型包，并恢复组件、连线、子系统、故障配置和仿真配置。
- 按无人机飞控系统故障库选择故障，可配置故障参数并注入到匹配组件或 CAN 边。
- 支持取消已注入故障，画布组件和连线会同步恢复状态。
- 支持仿真初始化、运行、步进、暂停、终止和结果记录。
- 支持示波器、数据记录仪、频谱分析仪等测量仪器组件。
- 支持多信号流图展示，按指令、控制、执行、测量、诊断等信号链路梳理系统。
- 支持测点响应快照：选择临时操作，例如截断链路，计算所有测点的基线值、操作后值、变化、判定和原因。
- 支持内部映射详情弹窗，查看测点、边、CAN 信息、Python 变量和故障传播解释。

## 在线版本说明

GitHub Pages 在线版本是前端静态应用，适合演示和交互使用。浏览器内可以直接导入仓库内置模型包并操作多信号流图、故障注入和测点响应。

如果需要连接本机 Python 后端执行自定义 Python 仿真块，请在本地运行项目，并另行启动对应 Python 服务。GitHub Pages 不能直接访问你的本机 Python 环境。

## 本地运行

```bash
npm install
npm run dev
```

启动后打开终端输出的本地地址，通常是：

```text
http://127.0.0.1:5173/
```

## 构建与预览

```bash
npm run build
npm run preview
```

## 测试与 UI 审计

```bash
npm test -- --run
npm run audit:ui
```

## 推荐演示流程

1. 打开平台。
2. 点击“导入系统模型”。
3. 选择内置模型包：

   ```text
   public/model-packages/evtol_closed_loop_fault_demo.json
   ```

4. 切换到“多信号流图”。
5. 在“测点响应”面板中选择：

   ```text
   操作类型：截断链路
   目标对象：IMU 测量反馈 / edge-imu-error
   ```

6. 点击“计算”。
7. 查看全测点响应矩阵，目标链路会显示“链路截断”，对应边会临时高亮。
8. 点击测点行或内部映射详情，可以查看链路、CAN 信息、测点解释和故障传播原因。

## 内置模型包

主要模型包位于 `public/model-packages/`：

- `evtol_closed_loop_fault_demo.json`：闭环飞控故障演示模型，推荐优先使用。
- `evtol_fault_comparison_demo.json`：正常链路与故障链路对比演示。
- `evtol_fault_scope_demo.json`：示波器故障响应演示。
- `evtol_small_nonlinear.json`：小型非线性 eVTOL 模型。
- `evtol_small_nonlinear_fault_injected.json`：预置故障的小型非线性模型。
- `evtol_small_nonlinear_hierarchical.json`：层级子系统模型。
- `evtol_small_nonlinear_hierarchical_fault_injected.json`：预置故障的层级子系统模型。

## 故障库

故障库相关数据和设计文档位于 `fault-types/`。当前故障库面向无人机飞控系统设计，故障会根据当前导入的系统模型进行兼容性筛选。其他系统需要单独设计对应故障库。

故障注入方式包括：

- 添加故障注入组件。
- 修改组件或边的运行参数。
- 在 CAN 边上引入延迟、丢包、噪声等协议层影响。
- 在多信号流图中以临时响应形式查看故障传播影响。

## 项目结构

```text
src/
  components/       Vue 组件
  composables/      工作台状态与组合逻辑
  fragments/        旧运行时使用的 HTML 片段
  services/         模型包、故障注入、仿真、旧运行时桥接逻辑
  styles/           全局样式、组件样式、对话框样式
public/
  model-packages/   可导入的演示模型包
fault-types/        无人机飞控故障库与故障模型说明
tests/              Vitest 测试
tools/              UI 审计等辅助工具
```

## 发布方式

当前仓库使用 GitHub Pages 的分支发布模式：

```text
发布分支：gh-pages
发布目录：/
```

更新线上版本时，在本地执行：

```bash
npm run build
```

然后将 `dist/` 目录中的构建产物推送到 `gh-pages` 分支。`main` 分支保存源代码，`gh-pages` 分支保存可直接访问的静态页面。

## 技术栈

- Vue 3
- Vite
- Vitest
- jsdom
- GitHub Pages

## 许可

当前仓库用于研究和演示。正式开源发布前，请根据你的论文、课题组或项目要求补充明确许可证。
