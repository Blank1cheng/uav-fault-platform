# Python 后端目标接口

本目录用于承载真实 Python 模块执行服务。当前 `app/` 中已经有 Python 绑定信息，后续需要把前端 mock 执行替换为该后端服务。

## 目标接口

`POST /api/python-flow/execute`

请求：

```json
{
  "modelPackageId": "main-demo-flight-control",
  "moduleId": "command-shaper",
  "sourcePath": "command_shaper.py",
  "functionName": "process",
  "inputs": {
    "command_input": 1.2
  },
  "parameters": {
    "shape_gain": 0.8
  },
  "faultInstances": []
}
```

响应：

```json
{
  "ok": true,
  "outputs": {
    "shaped_command": 0.96
  },
  "intermediates": {},
  "logs": [],
  "durationMs": 12
}
```

错误响应：

```json
{
  "ok": false,
  "error": {
    "code": "PYTHON_EXECUTION_FAILED",
    "message": "Traceback summary",
    "details": []
  },
  "logs": []
}
```

## 运行约束

- 必须设置执行超时。
- 必须返回标准化错误，前端不能静默吞掉错误。
- 模块源码路径必须来自模型包或受信任工作区。
- 后端日志应能定位输入、参数、故障实例和 Python 异常。
- 生产模式不允许自动降级为 mock 数据。

