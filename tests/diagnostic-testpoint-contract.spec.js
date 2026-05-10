import { describe, expect, it } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

function readWorkspaceFile(relativePath) {
  return fs.readFileSync(path.join(rootDir, relativePath), 'utf8');
}

describe('diagnostic testpoint workbench contract', () => {
  it('keeps a manually cleared testpoint model empty until the model changes', () => {
    const runtime = readWorkspaceFile('src/services/legacy-runtime.txt');
    const functionStart = runtime.indexOf('function ensureDiagnosticTestPointState(points=null)');
    const guardIndex = runtime.indexOf('diagnosticTestPointModelSignature', functionStart);
    const defaultIndex = runtime.indexOf('getDiagnosticPointDefaults(semanticPointsForState)', functionStart);
    const returnIndex = runtime.indexOf('return S.installedDiagnosticTestPointIds;', functionStart);

    expect(functionStart).toBeGreaterThanOrEqual(0);
    expect(guardIndex).toBeGreaterThan(functionStart);
    expect(defaultIndex).toBeGreaterThan(guardIndex);
    expect(returnIndex).toBeGreaterThan(defaultIndex);
  });

  it('renders installed diagnostic points back onto the canvas edge layer', () => {
    const runtime = readWorkspaceFile('src/services/legacy-runtime.txt');

    expect(runtime).toContain('function renderCanvasDiagnosticTestPointMarkers()');
    expect(runtime).toContain("document.getElementById('edge-layer')");
    expect(runtime).toContain("data-canvas-testpoint-marker");
    expect(runtime).toContain('renderCanvasDiagnosticTestPointMarkers();');
  });

  it('keeps the diagnosis workbench compact and removes long instructional copy', () => {
    const css = readWorkspaceFile('src/styles/components.css');

    expect(css).toContain('.dataflow-workspace--diagnosis .dataflow-diagnosis-header h3');
    expect(css).toContain('display: none');
    expect(css).toContain('.dataflow-workspace--diagnosis .testpoint-card h3');
    expect(css).toContain('font-size: 17px;');
  });

  it('exposes demo fault injection and removal hooks', () => {
    const runtime = readWorkspaceFile('src/services/legacy-runtime.txt');
    const demo = JSON.parse(readWorkspaceFile('public/demo/uav_fault_diagnostic_demo.json'));

    expect(runtime).toContain('window.loadUavFaultDiagnosticDemo');
    expect(runtime).toContain('window.injectAllDemoFaults');
    expect(runtime).toContain('function renderUavDemoControls()');
    expect(runtime).toContain('window.removeInjectedFault=removeInjectedFault');
    expect(runtime).toContain('window.clearInjectedFaults');
    expect(demo.faultLibrary.length).toBeGreaterThanOrEqual(8);
    expect(demo.testPoints.length).toBeGreaterThanOrEqual(8);
    demo.faultLibrary.forEach((fault) => {
      const detectable = demo.testPoints.some((point) => point.detects.includes(fault.id));
      expect(detectable).toBe(true);
    });
  });

  it('installs the compact diagnosis console and fault selection cancel controls', () => {
    const runtime = readWorkspaceFile('src/services/legacy-runtime.txt');
    const css = readWorkspaceFile('src/styles/components.css');

    expect(runtime).toContain('installCompactFaultDiagnosisConsole');
    expect(runtime).toContain('data-clear-selected-fault-catalog');
    expect(runtime).toContain('window.addDiagnosticTestPoint=function');
    expect(runtime).toContain('window.detectDiagnosticTestPoint=function');
    expect(runtime).toContain('window.clearDiagnosticTestPoints=function');
    expect(css).toContain('.tp-console');
    expect(css).toContain('.compact-clear-fault-selection');
  });
});
