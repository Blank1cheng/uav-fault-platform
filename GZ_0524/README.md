# GZ_0524 重构工作区

`GZ_0524` 是动态故障注入平台的并行重构目录。当前目录保留一份可运行的前端基线，同时把需求文档、模型包、接口契约、后端运行时和迁移工具拆开，方便后续按模块推进，不影响原始工程。

## 目录结构

- `app/`：当前 Vue/Vite 平台副本，作为可运行基线。
- `docs/requirements/`：设计规范、技术方案和故障资料原文。
- `docs/architecture/`：本轮重构路线、故障模型契约和后续拆分说明。
- `packages/model-packages/`：飞控模型包 JSON，后续作为模块、变量、端口和故障能力的唯一数据源。
- `packages/schemas/`：模型包、故障类型、故障场景等 JSON Schema 草案。
- `runtime/python-backend/`：Python 执行后端的目标接口说明和后续实现位置。
- `tools/`：迁移、校验和审计工具的目标位置。

## 当前基线

`app/` 复制自当前工程，包含已经完成的故障设置改造：

- 故障设置面板按模块自身声明的输入、输出、中间变量和参数生成可绑定对象。
- 故障注入绑定对象使用模块变量原名，不再二次加工。
- 故障类型按层级和模块能力过滤，避免将不兼容故障注入到任意模块。
- Main Demo 包含全局故障库和演示故障实例。
- Python 模块绑定信息已经进入模型包。

## 本地验证

```powershell
cd GZ_0524/app
npm test -- --run
npm run build
npm run audit:ui
```

## 故障注入规范

- [故障组件三种注入形式规范](./docs/architecture/FAULT_COMPONENT_INJECTION_SPEC.md)
- [故障模型契约](./docs/architecture/FAULT_MODEL_CONTRACT.md)

## 重构原则

1. 模型包优先：模块、端口、变量、参数、故障能力都从模型包声明中读取。
2. 契约优先：先稳定 JSON Schema 和运行时接口，再拆 UI、服务和后端实现。
3. 真实后端优先：Python 执行失败时应暴露错误，不静默降级成前端 mock。
4. 可验证迁移：每一步重构都保留测试、构建和 UI 审计入口。
