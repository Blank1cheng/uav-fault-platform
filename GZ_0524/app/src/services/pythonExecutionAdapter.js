function buildMockExecutionResult(payload) {
  const values = Object.values(payload.inputs ?? {});
  const baseValue = typeof values[0] === 'number' ? values[0] : Number(values[0] ?? 0);
  const aggregate = values.reduce((sum, value) => sum + Number(value ?? 0), 0);

  return {
    outputs: Object.fromEntries(
      (payload.outputNames ?? []).map((name, index) => [
        name,
        Number((baseValue + aggregate * 0.12 + index * 0.1).toFixed(6))
      ])
    ),
    middleVars: Object.fromEntries(
      (payload.middleVarNames ?? []).map((name, index) => [
        name,
        Number(((aggregate || baseValue) * (index + 1) * 0.1).toFixed(6))
      ])
    )
  };
}

export function executePythonBindingSync({ adapterMode = 'mock', payload }) {
  if (adapterMode === 'backend' && typeof window !== 'undefined' && typeof window.__GZ_PYTHON_BACKEND_SYNC__ === 'function') {
    return window.__GZ_PYTHON_BACKEND_SYNC__(payload);
  }

  return buildMockExecutionResult(payload);
}

export async function executePythonBinding({
  adapterMode = 'mock',
  endpoint = '/api/python-flow/execute',
  payload,
  fetchImpl = globalThis.fetch
}) {
  if (adapterMode === 'backend') {
    if (typeof fetchImpl !== 'function') {
      throw new Error('PYTHON_EXECUTION_FAILED: fetch unavailable');
    }

    const response = await fetchImpl(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(`PYTHON_EXECUTION_FAILED: ${response.status}`);
    }

    return response.json();
  }

  return buildMockExecutionResult(payload);
}
