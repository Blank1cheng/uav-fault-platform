import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createSimulationBlockPythonBinding } from '../../src/composables/useWorkbenchState.js';
import { buildFlightModelPackage } from '../../src/services/flightModelPackageService.js';
import { parsePythonBindingSource } from '../../src/services/pythonParserService.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..', '..');
const authoringDir = path.join(rootDir, 'model-authoring', 'evtol_small_nonlinear');
const modulesDir = path.join(authoringDir, 'modules');
const outputDir = path.join(rootDir, 'public', 'model-packages');
const outputFile = path.join(outputDir, 'evtol_small_nonlinear.json');

async function loadJson(fileName) {
  const content = await readFile(path.join(authoringDir, fileName), 'utf8');
  return JSON.parse(content);
}

function createHydratedBinding(nodeBinding, parsedModule, meta) {
  const binding = createSimulationBlockPythonBinding(parsedModule, {
    moduleId: nodeBinding.moduleId,
    moduleCategory: nodeBinding.moduleCategory,
    sourcePackageId: meta.modelId,
    sourcePackageName: meta.modelName,
    executionMode: 'backend'
  });

  return {
    ...binding,
    executionConfig: {
      endpoint: 'http://127.0.0.1:8765/api/python-flow/execute',
      timeoutMs: 3000
    }
  };
}

const meta = await loadJson('package-meta.json');
const faultLibrary = await loadJson('fault-library.json');
const snapshot = await loadJson('workbench-snapshot.json');
const files = (await readdir(modulesDir))
  .filter((name) => name.endsWith('.py'))
  .sort();

const parsedModules = new Map();
for (const fileName of files) {
  const source = await readFile(path.join(modulesDir, fileName), 'utf8');
  const parsed = parsePythonBindingSource({ fileName, source });
  parsedModules.set(parsed.moduleName, parsed);
}

snapshot.modelNodes = snapshot.modelNodes.map((node) => {
  if (node.type !== 'simulation_block' || !node.pythonBinding?.moduleId) {
    return node;
  }

  const parsedModule = parsedModules.get(node.pythonBinding.moduleId);
  if (!parsedModule) {
    throw new Error(`Missing parsed module for ${node.pythonBinding.moduleId}`);
  }

  return {
    ...node,
    pythonBinding: createHydratedBinding(node.pythonBinding, parsedModule, meta)
  };
});

const pkg = buildFlightModelPackage({
  meta,
  snapshot,
  faultLibrary
});

await mkdir(outputDir, { recursive: true });
await writeFile(outputFile, `${JSON.stringify(pkg, null, 2)}\n`, 'utf8');
console.log(`wrote ${outputFile}`);
