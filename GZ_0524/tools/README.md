# 工具目录

本目录用于后续放置跨包工具。当前可运行应用自身的工具仍保留在 `app/tools/`，避免破坏已有脚本路径。

建议新增工具：

- `validate-model-package.mjs`：校验模型包字段、变量声明和故障能力。
- `validate-fault-scenario.mjs`：校验故障场景和实例绑定对象。
- `migrate-fault-catalog.mjs`：把旧故障目录迁移为 schema 化故障库。
- `audit-runtime-bindings.mjs`：检查 Python 绑定路径、函数名和变量映射。

