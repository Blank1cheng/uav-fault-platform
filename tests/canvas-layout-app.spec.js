import { mount } from '@vue/test-utils';
import { afterEach, describe, expect, it } from 'vitest';
import { nextTick } from 'vue';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import App from '../src/App.vue';
import { __resetLegacyRuntimeForTests } from '../src/services/legacyRuntimeBootstrap.js';

function loadPublicPackage(fileName) {
  const testDir = path.dirname(fileURLToPath(import.meta.url));
  const targetPath = path.resolve(testDir, '..', 'public', 'model-packages', fileName);
  return JSON.parse(readFileSync(targetPath, 'utf8'));
}

async function flushRuntime() {
  await nextTick();
  await Promise.resolve();
}

function countForwardEdges(state) {
  const nodesById = new Map(state.modelNodes.map((node) => [node.id, node]));
  return state.modelEdges.filter((edge) => {
    const source = nodesById.get(edge.sourceNodeId);
    const target = nodesById.get(edge.targetNodeId);
    return source && target && source.x <= target.x;
  }).length;
}

function dispatchPointer(target, type, init = {}) {
  const event = new MouseEvent(type, {
    bubbles: true,
    cancelable: true,
    clientX: init.clientX ?? 0,
    clientY: init.clientY ?? 0,
    button: init.button ?? 0
  });
  Object.defineProperty(event, 'pointerId', {
    value: init.pointerId ?? 1
  });
  target.dispatchEvent(event);
}

function readComponentsCss() {
  return readFileSync(
    path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'src', 'styles', 'components.css'),
    'utf8'
  );
}

function findCssRule(css, selector) {
  const escapedSelector = selector.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return css.match(new RegExp(`${escapedSelector}\\s*\\{[\\s\\S]*?\\}`))?.[0] ?? '';
}

describe('canvas layout cleanup', () => {
  afterEach(() => {
    window.localStorage.clear();
    document.body.innerHTML = '';
    __resetLegacyRuntimeForTests();
  });

  it('exposes one-click layout cleanup and arranges imported model edges left-to-right', async () => {
    const wrapper = mount(App, { attachTo: document.body });
    await flushRuntime();

    const pkg = loadPublicPackage('evtol_small_nonlinear_fault_injected.json');
    const importResult = window.__GZ_FLIGHT_MODEL_PACKAGE__.importObject(pkg);
    await flushRuntime();

    expect(importResult).toMatchObject({ ok: true });
    expect(document.querySelector('.canvas-arrange__button')?.textContent).toContain('一键整理');
    expect(typeof window.autoArrangeCanvas).toBe('function');

    const beforeForward = countForwardEdges(window.__GZ_STATE__);
    window.autoArrangeCanvas();
    await flushRuntime();

    const state = window.__GZ_STATE__;
    const afterForward = countForwardEdges(state);

    expect(afterForward).toBeGreaterThanOrEqual(beforeForward);
    expect(afterForward / state.modelEdges.length).toBeGreaterThanOrEqual(0.75);
    expect(state.modelNodes.every((node) => Number.isFinite(node.x) && Number.isFinite(node.y))).toBe(true);

    wrapper.unmount();
  });

  it('runs model diagnostics and renders actionable results in the inspector', async () => {
    const wrapper = mount(App, { attachTo: document.body });
    await flushRuntime();

    expect(document.querySelector('.canvas-check__button')?.textContent).toContain('模型检查');
    expect(typeof window.runModelCheck).toBe('function');

    window.doCreateBlankWorkspace();
    window.createNode('instrument_scope', 420, 260);
    await flushRuntime();

    const diagnostics = window.runModelCheck({ silent: true });
    await flushRuntime();

    expect(diagnostics.some((item) => item.title === '测量仪器尚未接入信号')).toBe(true);
    expect(document.getElementById('pd')?.textContent).toContain('模型检查');
    expect(document.getElementById('pd')?.textContent).toContain('测量仪器尚未接入信号');
    expect(document.querySelector('.diagnostics-card__button')).not.toBeNull();
    expect(document.querySelector('.diagnostics-title')).not.toBeNull();
    expect(document.querySelector('.diagnostics-score__num')).not.toBeNull();
    expect(document.querySelector('.diagnostics-pill__value')).not.toBeNull();

    const statusEntry = Array.from(document.querySelectorAll('[data-log-entry]')).find((row) =>
      row.textContent?.includes('模型检查')
    );
    expect(statusEntry).not.toBeNull();
    expect(statusEntry?.dataset.view).toBe('alerts');

    wrapper.unmount();
  });

  it('docks simulation controls above the canvas and removes the old global taskbar', async () => {
    const wrapper = mount(App, { attachTo: document.body });
    await flushRuntime();

    expect(document.querySelector('.workbench-taskbar')).toBeNull();
    expect(document.querySelector('header .header-project')).not.toBeNull();
    expect(document.querySelector('header .header-project__name')?.textContent).toContain('飞控系统仿真项目');
    expect(document.querySelector('header .header-project__state')?.textContent).toContain('已保存');
    expect(document.querySelector('.canvas-sim-dock #simbar')).not.toBeNull();
    expect(document.querySelector('header > .toolbar #btn-imp-sys')).not.toBeNull();
    expect(document.querySelector('.canvas-wrap > #simbar')).toBeNull();
    expect(document.querySelectorAll('.sbar-row')).toHaveLength(3);
    expect(document.querySelectorAll('.sbar-card')).toHaveLength(4);

    const testDir = path.dirname(fileURLToPath(import.meta.url));
    const baseCss = readFileSync(path.resolve(testDir, '..', 'src', 'styles', 'base.css'), 'utf8');
    const componentsCss = readFileSync(path.resolve(testDir, '..', 'src', 'styles', 'components.css'), 'utf8');
    const consoleCss = readFileSync(path.resolve(testDir, '..', 'src', 'styles', 'console-redesign.css'), 'utf8');

    expect(baseCss).toContain('grid-template-rows:minmax(0,1fr) var(--layout-resizer-size) var(--workbench-status-h)');
    expect(baseCss).toContain('--workbench-status-h:100px');
    expect(consoleCss).toContain('grid-template-rows:56px minmax(0,1fr)');
    expect(consoleCss).toContain('.workbench-taskbar');
    expect(consoleCss).toContain('display:none!important');
    expect(consoleCss).toContain('.header-project');
    expect(consoleCss).toContain('.canvas-sim-dock .simbar');
    expect(consoleCss).toContain('@media (max-width:1680px)');
    expect(consoleCss).toContain('grid-template-rows:104px minmax(0,1fr)');
    expect(consoleCss).toContain('@media (max-width:1120px)');
    expect(consoleCss).toContain('grid-template-rows:156px minmax(0,1fr)');
    expect(consoleCss).toContain('top:140px');
    expect(componentsCss).toContain('.sbar{\n  height:100%;');
    expect(componentsCss).toContain('.sbar-log-head');
    expect(componentsCss).toContain('flex:0 0 30px');
    expect(componentsCss).toContain('height:17px;');
    expect(componentsCss).not.toMatch(/@media\s*\(max-height:820px\)[\s\S]*?\.sbar\s*\{[\s\S]*?height:78px/);
    expect(componentsCss).not.toMatch(/\.sbar\s*\{[\s\S]*?max-height:78px/);

    wrapper.unmount();
  });

  it('lets users resize side panels and the bottom status layer with drag handles', async () => {
    const wrapper = mount(App, { attachTo: document.body });
    await flushRuntime();

    const root = document.querySelector('[data-testid="workbench-root"]');
    const main = document.querySelector('.workbench-main');
    expect(root).not.toBeNull();
    expect(main).not.toBeNull();

    Object.defineProperty(main, 'getBoundingClientRect', {
      configurable: true,
      value: () => ({
        x: 0,
        y: 140,
        width: 1500,
        height: 760,
        top: 140,
        left: 0,
        right: 1500,
        bottom: 900,
        toJSON() {
          return this;
        }
      })
    });

    const leftHandle = document.querySelector('[data-layout-resizer="left"]');
    const rightHandle = document.querySelector('[data-layout-resizer="right"]');
    const bottomHandle = document.querySelector('[data-layout-resizer="bottom"]');
    expect(leftHandle).not.toBeNull();
    expect(rightHandle).not.toBeNull();
    expect(bottomHandle).not.toBeNull();

    dispatchPointer(leftHandle, 'pointerdown', { pointerId: 21, clientX: 236, clientY: 220 });
    dispatchPointer(window, 'pointermove', { pointerId: 21, clientX: 292, clientY: 220 });
    dispatchPointer(window, 'pointerup', { pointerId: 21, clientX: 292, clientY: 220 });
    await flushRuntime();
    expect(root.style.getPropertyValue('--workbench-left-w')).toBe('292px');

    dispatchPointer(rightHandle, 'pointerdown', { pointerId: 22, clientX: 1194, clientY: 220 });
    dispatchPointer(window, 'pointermove', { pointerId: 22, clientX: 1148, clientY: 220 });
    dispatchPointer(window, 'pointerup', { pointerId: 22, clientX: 1148, clientY: 220 });
    await flushRuntime();
    expect(root.style.getPropertyValue('--workbench-right-w')).toBe('352px');

    dispatchPointer(bottomHandle, 'pointerdown', { pointerId: 23, clientX: 800, clientY: 900 });
    dispatchPointer(window, 'pointermove', { pointerId: 23, clientX: 800, clientY: 850 });
    dispatchPointer(window, 'pointerup', { pointerId: 23, clientX: 800, clientY: 850 });
    await flushRuntime();
    expect(root.style.getPropertyValue('--workbench-status-h')).toBe('150px');

    expect(window.localStorage.getItem('gz.layoutSizes')).toContain('"left":292');
    expect(window.localStorage.getItem('gz.layoutSizes')).toContain('"right":352');
    expect(window.localStorage.getItem('gz.layoutSizes')).toContain('"status":150');

    wrapper.unmount();
  });

  it('lets both side panels span through the bottom layer while logs stay under the canvas only', async () => {
    const wrapper = mount(App, { attachTo: document.body });
    await flushRuntime();

    const main = document.querySelector('.workbench-main');
    expect(main?.querySelector('.lpanel')).not.toBeNull();
    expect(main?.querySelector('.rpanel')).not.toBeNull();
    expect(main?.querySelector('.sbar')).not.toBeNull();
    expect(document.querySelector('.gz-app > .sbar')).toBeNull();

    const testDir = path.dirname(fileURLToPath(import.meta.url));
    const baseCss = readFileSync(path.resolve(testDir, '..', 'src', 'styles', 'base.css'), 'utf8');
    const componentsCss = readFileSync(path.resolve(testDir, '..', 'src', 'styles', 'components.css'), 'utf8');

    expect(baseCss).toContain('grid-template-rows:auto var(--workbench-taskbar-h) minmax(0,1fr)');
    expect(baseCss).toContain('grid-template-rows:minmax(0,1fr) var(--layout-resizer-size) var(--workbench-status-h)');
    expect(componentsCss).toMatch(/\.workbench-main \.lpanel\{[\s\S]*?grid-column:1;[\s\S]*?grid-row:1 \/ 4;/);
    expect(componentsCss).toMatch(/\.workbench-main \.rpanel\{[\s\S]*?grid-column:5;[\s\S]*?grid-row:1 \/ 4;/);
    expect(componentsCss).toMatch(/\.workbench-main \.sbar\{[\s\S]*?grid-column:3;[\s\S]*?grid-row:3;/);
    expect(componentsCss).toMatch(/\.workbench-main \.layout-resizer--left\{[\s\S]*?grid-column:2;[\s\S]*?grid-row:1 \/ 4;/);
    expect(componentsCss).toMatch(/\.workbench-main \.layout-resizer--bottom\{[\s\S]*?grid-column:3;[\s\S]*?grid-row:2;/);

    wrapper.unmount();
  });

  it('uses a cohesive bottom status deck with log actions and compact metric cards', async () => {
    const wrapper = mount(App, { attachTo: document.body });
    await flushRuntime();

    expect(document.querySelector('.sbar-log-head')).not.toBeNull();
    expect(document.querySelectorAll('.sbar-action')).toHaveLength(3);
    expect(document.querySelectorAll('.sbar-card__accent')).toHaveLength(4);

    const componentsCss = readFileSync(
      path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'src', 'styles', 'components.css'),
      'utf8'
    );
    expect(componentsCss).toContain('background:linear-gradient(180deg,#f8fbff 0%,#eef4fb 100%)');
    expect(componentsCss).toContain('.sbar-log-head');
    expect(componentsCss).toContain('.sbar-card__accent');
    expect(componentsCss).toContain('grid-template-columns:repeat(2,minmax(0,1fr));');
    expect(componentsCss).toContain('grid-template-rows:repeat(2,minmax(0,1fr));');
    expect(componentsCss).toContain('height:38px;');
    expect(componentsCss).toContain('font-size:12px;');

    wrapper.unmount();
  });

  it('formats bottom metrics with coordinated numeric typography instead of heavy sentence text', async () => {
    const wrapper = mount(App, { attachTo: document.body });
    await flushRuntime();

    expect(typeof window.__GZ_STATUS_BAR__?.formatMetrics).toBe('function');
    window.__GZ_STATUS_BAR__.formatMetrics({
      components: 9,
      links: 14,
      faults: 2,
      state: '待机',
      time: '00:00:00'
    });
    await flushRuntime();

    const componentCard = document.getElementById('sblk');
    const faultCard = document.getElementById('sflt');
    expect(componentCard?.querySelectorAll('.sbar-metric-number')).toHaveLength(2);
    expect(componentCard?.querySelectorAll('.sbar-metric-unit')).toHaveLength(2);
    expect(componentCard?.textContent).toContain('9');
    expect(componentCard?.textContent).toContain('14');
    expect(faultCard?.querySelector('.sbar-metric-number')?.textContent).toBe('2');

    const componentsCss = readFileSync(
      path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'src', 'styles', 'components.css'),
      'utf8'
    );
    expect(componentsCss).toContain('.sbar-metric-number');
    expect(componentsCss).toContain('font-variant-numeric:tabular-nums');
    expect(componentsCss).toContain('font-family:var(--font-data)');

    wrapper.unmount();
  });

  it('turns status log actions into working controls and preserves a visible empty state', async () => {
    const wrapper = mount(App, { attachTo: document.body });
    await flushRuntime();

    const levelButton = document.querySelector('[data-status-action="level"]');
    const clearButton = document.querySelector('[data-status-action="clear"]');
    const exportButton = document.querySelector('[data-status-action="export"]');
    const alertTab = document.querySelector('[data-status-tab="alerts"]');
    const logTab = document.querySelector('[data-status-tab="log"]');

    expect(typeof window.__GZ_STATUS_BAR__?.applyLevelFilter).toBe('function');
    expect(typeof window.__GZ_STATUS_BAR__?.exportLog).toBe('function');
    expect(levelButton).not.toBeNull();
    expect(clearButton).not.toBeNull();
    expect(exportButton).not.toBeNull();

    levelButton.click();
    await flushRuntime();
    expect(levelButton.textContent).toContain('信息');
    expect(document.querySelector('.sbar')?.dataset.filterLevel).toBe('info');
    expect(document.querySelector('[data-log-entry][data-level="ok"]')?.classList.contains('is-hidden')).toBe(true);

    alertTab.click();
    await flushRuntime();
    expect(alertTab.classList.contains('is-active')).toBe(true);
    expect(document.querySelector('[data-status-empty]')?.classList.contains('is-hidden')).toBe(false);
    expect(document.querySelector('[data-status-empty]')?.textContent).toContain('暂无告警记录');

    logTab.click();
    clearButton.click();
    await flushRuntime();
    expect(document.querySelectorAll('[data-log-entry]:not(.is-hidden)')).toHaveLength(0);
    expect(document.querySelector('[data-status-empty]')?.textContent).toContain('日志已清空');

    const exportResult = window.__GZ_STATUS_BAR__.exportLog();
    expect(exportResult.ok).toBe(true);
    expect(exportResult.content).toContain('时间,级别,来源,消息');

    wrapper.unmount();
  });

  it('accepts runtime status events and routes warning entries into the alert view', async () => {
    const wrapper = mount(App, { attachTo: document.body });
    await flushRuntime();

    const pushResult = window.__GZ_STATUS_BAR__.pushEntry({
      level: 'warn',
      source: '故障注入',
      message: 'F1_舵机卡滞接近触发窗口'
    });
    await flushRuntime();

    expect(pushResult.ok).toBe(true);
    const alertRow = document.querySelector('[data-log-entry][data-level="warn"]');
    expect(alertRow).not.toBeNull();
    expect(alertRow?.textContent).toContain('故障注入');
    expect(alertRow?.textContent).toContain('F1_舵机卡滞接近触发窗口');

    document.querySelector('[data-status-tab="alerts"]').click();
    await flushRuntime();
    expect(alertRow?.classList.contains('is-hidden')).toBe(false);
    expect(window.__GZ_STATUS_BAR__.exportLog().content).toContain('F1_舵机卡滞接近触发窗口');

    wrapper.unmount();
  });

  it('publishes simulation summaries into result and performance status views', async () => {
    const wrapper = mount(App, { attachTo: document.body });
    await flushRuntime();

    expect(typeof window.__GZ_STATUS_BAR__?.publishSimulationSummary).toBe('function');

    const publishResult = window.__GZ_STATUS_BAR__.publishSimulationSummary({
      datasetName: 'ui-regression-run',
      duration: 1200,
      elapsedSeconds: 4.2,
      faults: 2,
      sampleRate: '100 Hz',
      status: 'completed',
      stepIndex: 42
    });
    await flushRuntime();

    expect(publishResult.ok).toBe(true);

    document.querySelector('[data-status-tab="results"]').click();
    await flushRuntime();
    const resultRow = document.querySelector('[data-log-entry][data-view="results"]');
    expect(resultRow).not.toBeNull();
    expect(resultRow?.classList.contains('is-hidden')).toBe(false);
    expect(resultRow?.textContent).toContain('ui-regression-run');
    expect(resultRow?.textContent).toContain('42');

    document.querySelector('[data-status-tab="performance"]').click();
    await flushRuntime();
    const performanceRow = document.querySelector('[data-log-entry][data-view="performance"]');
    expect(performanceRow).not.toBeNull();
    expect(performanceRow?.classList.contains('is-hidden')).toBe(false);
    expect(performanceRow?.textContent).toContain('100 Hz');
    expect(performanceRow?.textContent).toContain('4.2');

    wrapper.unmount();
  });

  it('supports undo and redo for canvas model editing commands', async () => {
    const wrapper = mount(App, { attachTo: document.body });
    await flushRuntime();

    expect(typeof window.__GZ_CANVAS_COMMANDS__?.undo).toBe('function');
    expect(typeof window.undoCanvasCommand).toBe('function');
    expect(document.querySelector('[data-canvas-command="undo"]')?.disabled).toBe(true);

    window.doCreateBlankWorkspace();
    await flushRuntime();
    window.createNode('signal_source', 300, 240);
    await flushRuntime();

    expect(window.__GZ_STATE__.modelNodes).toHaveLength(1);
    expect(window.__GZ_CANVAS_COMMANDS__.canUndo()).toBe(true);
    expect(document.querySelector('[data-canvas-command="undo"]')?.disabled).toBe(false);

    const undoResult = window.undoCanvasCommand();
    await flushRuntime();
    expect(undoResult.ok).toBe(true);
    expect(window.__GZ_STATE__.modelNodes).toHaveLength(0);
    expect(window.__GZ_CANVAS_COMMANDS__.canRedo()).toBe(true);
    expect(document.querySelector('[data-canvas-command="redo"]')?.disabled).toBe(false);

    const redoResult = window.redoCanvasCommand();
    await flushRuntime();
    expect(redoResult.ok).toBe(true);
    expect(window.__GZ_STATE__.modelNodes).toHaveLength(1);
    expect(window.__GZ_STATUS_BAR__.exportLog().content).toContain('撤销');

    wrapper.unmount();
  });

  it('wires canvas toolbar view, interaction, zoom, and fullscreen controls to runtime state', async () => {
    const wrapper = mount(App, { attachTo: document.body });
    await flushRuntime();

    const canvasWrap = document.getElementById('cw');
    const panButton = document.querySelector('[data-canvas-command="pan"]');
    const dataflowTab = document.querySelector('[data-canvas-view="dataflow"]');
    const zoomInButton = document.querySelector('[data-canvas-command="zoom-in"]');
    const fullscreenButton = document.querySelector('[data-canvas-command="fullscreen"]');

    expect(typeof window.setCanvasInteractionMode).toBe('function');
    expect(typeof window.setCanvasView).toBe('function');
    expect(typeof window.toggleCanvasFullscreen).toBe('function');
    expect(panButton).not.toBeNull();
    expect(dataflowTab).not.toBeNull();

    panButton.click();
    await flushRuntime();
    expect(canvasWrap?.dataset.interactionMode).toBe('pan');
    expect(panButton.classList.contains('is-active')).toBe(true);

    dataflowTab.click();
    await flushRuntime();
    expect(canvasWrap?.dataset.view).toBe('dataflow');
    expect(dataflowTab.classList.contains('is-active')).toBe(true);

    const beforeZoom = window.__GZ_STATE__.canvasScale;
    zoomInButton.click();
    await flushRuntime();
    expect(window.__GZ_STATE__.canvasScale).toBeGreaterThan(beforeZoom);
    expect(document.getElementById('canvas-toolbar-zoom')?.textContent).toContain('%');

    fullscreenButton.click();
    await flushRuntime();
    expect(canvasWrap?.dataset.fullscreen).toBe('true');
    expect(fullscreenButton.classList.contains('is-active')).toBe(true);

    expect(window.__GZ_CANVAS_COMMANDS__.syncFullscreen().ok).toBe(true);
    await flushRuntime();
    expect(canvasWrap?.dataset.fullscreen).toBe('false');
    expect(fullscreenButton.classList.contains('is-active')).toBe(false);

    wrapper.unmount();
  });

  it('renders the multi-signal flow view as a single testpoint diagnosis workbench', async () => {
    const wrapper = mount(App, { attachTo: document.body });
    await flushRuntime();

    const pkg = loadPublicPackage('evtol_closed_loop_fault_demo.json');
    const importResult = window.__GZ_FLIGHT_MODEL_PACKAGE__.importObject(pkg);
    await flushRuntime();

    expect(importResult).toMatchObject({ ok: true });
    expect(typeof window.setCanvasView).toBe('function');
    expect(typeof window.buildDiagnosticTestPointModel).toBe('function');

    window.setCanvasView('dataflow');
    await flushRuntime();

    const panel = document.getElementById('dataflow-panel');
    const model = window.buildDiagnosticTestPointModel();

    expect(document.getElementById('cw')?.dataset.view).toBe('dataflow');
    expect(panel?.querySelector('[data-dataflow-view="testpoint-diagnosis"]')).not.toBeNull();
    expect(panel?.querySelector('[data-testpoint-workbench]')).not.toBeNull();
    expect(panel?.querySelector('[data-testpoint-position-select]')).not.toBeNull();
    expect(panel?.querySelector('[data-install-testpoint]')).not.toBeNull();
    expect(panel?.querySelectorAll('[data-fixed-testpoint-position]').length).toBe(model.positions.length);
    expect(panel?.querySelectorAll('[data-installed-testpoint]').length).toBe(model.installed.length);
    expect(panel?.textContent).toContain('测点诊断台');
    expect(panel?.textContent).toContain('固定测点');
    expect(panel?.textContent).toContain('人工确认');

    expect(panel?.querySelector('[data-measurement-response-panel]')).toBeNull();
    expect(panel?.querySelector('[data-propagation-groups]')).toBeNull();
    expect(panel?.querySelector('.signal-chain-map')).toBeNull();
    expect(panel?.querySelector('.signal-flow-legacy')).toBeNull();
    expect(panel?.querySelector('[data-dataflow-section="signals"]')).toBeNull();
    expect(panel?.querySelectorAll('.signal-flow-node')).toHaveLength(0);

    wrapper.unmount();
  });

  it('models measurement points as fixed installable positions in the dataflow view', async () => {
    const wrapper = mount(App, { attachTo: document.body });
    await flushRuntime();

    const pkg = loadPublicPackage('evtol_closed_loop_fault_demo.json');
    const importResult = window.__GZ_FLIGHT_MODEL_PACKAGE__.importObject(pkg);
    await flushRuntime();

    expect(importResult).toMatchObject({ ok: true });
    expect(typeof window.buildDiagnosticTestPointModel).toBe('function');
    expect(typeof window.installDiagnosticTestPoint).toBe('function');
    expect(typeof window.removeDiagnosticTestPoint).toBe('function');

    const semantic = window.buildDataflowSemanticModel();
    const initialModel = window.buildDiagnosticTestPointModel();
    const installablePosition = initialModel.positions.find((point) => !point.installed);

    expect(initialModel.positions).toHaveLength(semantic.measurementPoints.length);
    expect(initialModel.installed.length).toBe(0);
    expect(installablePosition).toBeTruthy();
    expect(initialModel.positions.every((point) =>
      point.pointId &&
      point.edgeId &&
      point.positionNameZh &&
      typeof point.installed === 'boolean'
    )).toBe(true);

    expect(window.installDiagnosticTestPoint(installablePosition.pointId)).toBe(true);
    const afterInstall = window.buildDiagnosticTestPointModel();
    expect(afterInstall.installed.some((point) => point.pointId === installablePosition.pointId)).toBe(true);
    expect(afterInstall.installed.length).toBe(1);

    window.setCanvasView('dataflow');
    await flushRuntime();

    const panel = document.getElementById('dataflow-panel');
    expect(panel?.querySelector('[data-testpoint-workbench]')).not.toBeNull();
    expect(panel?.querySelector('[data-testpoint-position-select]')).not.toBeNull();
    expect(panel?.querySelector('[data-install-testpoint]')).not.toBeNull();
    expect(panel?.querySelectorAll('[data-installed-testpoint]').length).toBe(afterInstall.installed.length);
    expect(panel?.querySelector(`[data-installed-testpoint="${installablePosition.pointId}"]`)).not.toBeNull();
    expect(panel?.querySelector(`[data-fixed-testpoint-position="${installablePosition.pointId}"]`)?.textContent).toContain('已安装');

    expect(window.removeDiagnosticTestPoint(installablePosition.pointId)).toBe(true);
    const afterRemove = window.buildDiagnosticTestPointModel();
    expect(afterRemove.installed.some((point) => point.pointId === installablePosition.pointId)).toBe(false);
    expect(afterRemove.installed.length).toBe(0);

    window.clearDiagnosticTestPoints();
    window.setCanvasView('dataflow');
    await flushRuntime();
    expect(window.buildDiagnosticTestPointModel().installed).toHaveLength(0);

    wrapper.unmount();
  });

  it('detects possible fault types from an installed measurement point and records manual confirmations', async () => {
    const wrapper = mount(App, { attachTo: document.body });
    await flushRuntime();

    const pkg = loadPublicPackage('evtol_closed_loop_fault_demo.json');
    const importResult = window.__GZ_FLIGHT_MODEL_PACKAGE__.importObject(pkg);
    await flushRuntime();

    expect(importResult).toMatchObject({ ok: true });
    expect(typeof window.runDiagnosticTestPointDetection).toBe('function');
    expect(typeof window.openDiagnosticTestPointDialog).toBe('function');
    expect(typeof window.toggleDiagnosticFaultConfirmation).toBe('function');

    const model = window.buildDiagnosticTestPointModel();
    const imuPoint = model.positions.find((point) => point.edgeId === 'edge-imu-error');
    expect(imuPoint).toBeTruthy();
    window.installDiagnosticTestPoint(imuPoint.pointId);

    const imuEdge = window.__GZ_STATE__.modelEdges.find((edge) => edge.id === 'edge-imu-error');
    imuEdge.injectedFault = {
      id: 'sensor_additive_bias',
      modelId: 'sensor_additive_bias',
      name: '传感器加性偏置',
      layer: 'electrical',
      runtimeBehavior: 'sensor_bias'
    };

    const diagnosis = window.runDiagnosticTestPointDetection(imuPoint.pointId);
    expect(diagnosis).toMatchObject({
      pointId: imuPoint.pointId,
      edgeId: 'edge-imu-error',
      status: 'abnormal'
    });
    expect(diagnosis.candidates.some((candidate) => candidate.faultTypeId === 'sensor_additive_bias')).toBe(true);
    expect(diagnosis.candidates.every((candidate) => typeof candidate.confirmed === 'boolean')).toBe(true);

    const scanResults = window.runAllDiagnosticTestPointDetections();
    expect(scanResults.some((result) =>
      result.pointId === imuPoint.pointId &&
      result.status === 'abnormal' &&
      result.candidates.some((candidate) => candidate.faultTypeId === 'sensor_additive_bias')
    )).toBe(true);

    window.setCanvasView('dataflow');
    await flushRuntime();

    const panel = document.getElementById('dataflow-panel');
    expect(panel?.querySelector('[data-run-fault-detection]')).not.toBeNull();
    expect(panel?.querySelector(`[data-diagnosis-point="${imuPoint.pointId}"].is-abnormal`)).not.toBeNull();

    document.querySelector(`[data-detect-testpoint="${imuPoint.pointId}"]`)?.click();
    await flushRuntime();

    const dialog = document.getElementById('ov-testpoint-diagnosis');
    expect(dialog?.classList.contains('open')).toBe(true);
    expect(dialog?.querySelectorAll('[data-fault-candidate]').length).toBeGreaterThan(0);
    expect(dialog?.querySelector('[data-fault-candidate="sensor_additive_bias"]')).not.toBeNull();

    const confirmBox = dialog?.querySelector('[data-confirm-fault-candidate="sensor_additive_bias"]');
    confirmBox.checked = true;
    confirmBox.dispatchEvent(new Event('change', { bubbles: true }));
    await flushRuntime();

    expect(window.__GZ_STATE__.confirmedDiagnosticFaults[imuPoint.pointId]).toContain('sensor_additive_bias');
    expect(window.__GZ_STATE__.testPointDiagnosis.confirmedFaultTypeIds).toContain('sensor_additive_bias');

    wrapper.unmount();
  });

  it('distinguishes detectable and non-detectable faults on the same component for one measurement point', async () => {
    const wrapper = mount(App, { attachTo: document.body });
    await flushRuntime();

    const pkg = loadPublicPackage('evtol_closed_loop_fault_demo.json');
    const importResult = window.__GZ_FLIGHT_MODEL_PACKAGE__.importObject(pkg);
    await flushRuntime();

    expect(importResult).toMatchObject({ ok: true });

    const model = window.buildDiagnosticTestPointModel();
    const imuPoint = model.positions.find((point) => point.edgeId === 'edge-imu-error');
    const imuNode = window.__GZ_STATE__.modelNodes.find((node) => node.id === 'node-imu');
    expect(imuPoint).toBeTruthy();
    expect(imuNode).toBeTruthy();

    window.installDiagnosticTestPoint(imuPoint.pointId);
    imuNode.faults = [
      {
        id: 'sensor_additive_bias',
        modelId: 'sensor_additive_bias',
        name: '传感器加性偏置',
        category: '传感器故障'
      },
      {
        id: 'imu_self_test_warning',
        modelId: 'imu_self_test_warning',
        name: 'IMU 自检状态异常',
        category: '本地状态故障'
      }
    ];

    const mixedDiagnosis = window.runDiagnosticTestPointDetection(imuPoint.pointId);
    expect(mixedDiagnosis.status).toBe('abnormal');
    expect(mixedDiagnosis.candidates.some((candidate) => candidate.faultTypeId === 'sensor_additive_bias')).toBe(true);
    expect(mixedDiagnosis.candidates.some((candidate) => candidate.faultTypeId === 'imu_self_test_warning')).toBe(false);

    imuNode.faults = [
      {
        id: 'imu_self_test_warning',
        modelId: 'imu_self_test_warning',
        name: 'IMU 自检状态异常',
        category: '本地状态故障'
      }
    ];

    const localOnlyDiagnosis = window.runDiagnosticTestPointDetection(imuPoint.pointId);
    expect(localOnlyDiagnosis.status).toBe('normal');
    expect(localOnlyDiagnosis.candidates.some((candidate) => candidate.faultTypeId === 'imu_self_test_warning')).toBe(false);

    wrapper.unmount();
  });

  it('keeps dataflow controls mounted while simulation steps update values', async () => {
    const wrapper = mount(App, { attachTo: document.body });
    await flushRuntime();

    const pkg = loadPublicPackage('evtol_closed_loop_fault_demo.json');
    const importResult = window.__GZ_FLIGHT_MODEL_PACKAGE__.importObject(pkg);
    await flushRuntime();

    expect(importResult).toMatchObject({ ok: true });

    const model = window.buildDiagnosticTestPointModel();
    window.installDiagnosticTestPoint(model.positions[0].pointId);

    window.setCanvasView('dataflow');
    await flushRuntime();

    const panel = document.getElementById('dataflow-panel');
    const workspaceBefore = panel?.querySelector('.dataflow-workspace');
    const detectButtonBefore = panel?.querySelector('[data-detect-testpoint]');
    const scanButtonBefore = panel?.querySelector('[data-run-fault-detection]');

    expect(workspaceBefore).not.toBeNull();
    expect(detectButtonBefore).not.toBeNull();
    expect(scanButtonBefore).not.toBeNull();

    window.simInit(true);
    await flushRuntime();

    expect(panel?.querySelector('.dataflow-workspace')).toBe(workspaceBefore);
    expect(panel?.querySelector('[data-detect-testpoint]')).toBe(detectButtonBefore);

    window.simStep();
    await flushRuntime();

    expect(panel?.querySelector('.dataflow-workspace')).toBe(workspaceBefore);
    expect(panel?.querySelector('[data-detect-testpoint]')).toBe(detectButtonBefore);

    wrapper.unmount();
  });

  it('builds a Chinese measurement-point semantic model for the closed-loop flight-control demo', async () => {
    const wrapper = mount(App, { attachTo: document.body });
    await flushRuntime();

    const pkg = loadPublicPackage('evtol_closed_loop_fault_demo.json');
    const importResult = window.__GZ_FLIGHT_MODEL_PACKAGE__.importObject(pkg);
    await flushRuntime();

    expect(importResult).toMatchObject({ ok: true });
    expect(typeof window.buildDataflowSemanticModel).toBe('function');
    expect(typeof window.collectMeasurementPoints).toBe('function');
    expect(typeof window.classifyFaultPropagation).toBe('function');

    const semantic = window.buildDataflowSemanticModel();
    const imuPolicyEdge = semantic.edges.find((edge) => edge.id === 'edge-imu-error');
    const imuPolicyPoint = semantic.measurementPoints.find((point) => point.edgeId === 'edge-imu-error');

    expect(semantic.stages.map((stage) => stage.labelZh)).toEqual([
      '指令与参考',
      '控制与分配',
      '执行与机体',
      '测量与估计',
      '诊断与残差'
    ]);
    expect(semantic.measurementPoints.length).toBeGreaterThanOrEqual(6);
    expect(semantic.measurementPoints.some((point) => point.labelZh.includes('测点 M1'))).toBe(true);
    expect(semantic.measurementPoints.some((point) => point.signalNameZh.includes('姿态指令'))).toBe(true);
    expect(semantic.measurementPoints.some((point) => point.signalNameZh.includes('IMU'))).toBe(true);
    expect(semantic.measurementPoints.some((point) => point.role === 'residual')).toBe(true);
    expect(semantic.edges.some((edge) => edge.signalPathZh.includes('IMU') && edge.signalPathZh.includes('反馈'))).toBe(true);
    expect(semantic.edges.every((edge) => edge.mapping?.engineeringKey)).toBe(true);
    expect(semantic.edges.some((edge) => edge.mapping?.signalId === 'imu.pitch_rate')).toBe(true);
    expect(semantic.measurementPoints.every((point) =>
      point.signalId &&
      point.nodeId &&
      Number.isInteger(point.portIndex) &&
      point.stageId &&
      point.stageLabelZh
    )).toBe(true);
    expect(semantic.edges.every((edge) => Array.isArray(edge.affectedMeasurementPointIds))).toBe(true);
    expect(imuPolicyEdge?.propagationPolicyKind).toBe('propagated');
    expect(imuPolicyEdge?.propagationPolicyLabelZh).toBeTruthy();
    expect(imuPolicyEdge?.propagationKind).toBe('none');
    expect(imuPolicyPoint?.faultInfluence).toBe('none');

    expect(window.classifyFaultPropagation(null, { faultPropagationPolicy: 'propagates' })).toBe('none');
    expect(window.classifyFaultPropagation({ layer: 'sensor', runtimeBehavior: 'sensor_bias' })).toBe('propagated');
    expect(window.classifyFaultPropagation({ layer: 'physical', runtimeBehavior: 'sensor_bias', name: 'IMU bias' })).toBe('propagated');
    expect(window.classifyFaultPropagation({ layer: 'communication', runtimeBehavior: 'delay' })).toBe('propagated');
    expect(window.classifyFaultPropagation({ layer: 'protocol', runtimeBehavior: 'packet_loss' })).toBe('blocked');
    expect(window.classifyFaultPropagation({ layer: 'diagnostic', runtimeBehavior: 'residual_alarm' })).toBe('diagnosticOnly');
    expect(window.classifyFaultPropagation({ layer: 'physical', runtimeBehavior: 'parameter_bias' })).toBe('localEffect');
    expect(window.classifyFaultPropagation({ layer: 'control', runtimeBehavior: 'gain_drift' })).toBe('localEffect');
    expect(semantic.propagationClasses.propagated.labelZh).toBe('传播型');
    expect(semantic.propagationClasses.localEffect.descriptionZh).toContain('本地参数');

    wrapper.unmount();
  });

  it('builds a measurement response snapshot for a temporary link cut', async () => {
    const wrapper = mount(App, { attachTo: document.body });
    await flushRuntime();

    const pkg = loadPublicPackage('evtol_closed_loop_fault_demo.json');
    const importResult = window.__GZ_FLIGHT_MODEL_PACKAGE__.importObject(pkg);
    await flushRuntime();

    expect(importResult).toMatchObject({ ok: true });
    expect(typeof window.buildMeasurementScenarioOptions).toBe('function');
    expect(typeof window.buildMeasurementTargetOptions).toBe('function');
    expect(typeof window.createMeasurementScenario).toBe('function');
    expect(typeof window.calculateMeasurementResponse).toBe('function');

    const targetEdge = window.__GZ_STATE__.modelEdges.find((edge) => edge.id === 'edge-imu-error');
    expect(targetEdge).toBeTruthy();
    expect(targetEdge.injectedFault).toBeUndefined();

    const scenario = window.createMeasurementScenario({
      type: 'link_cut',
      targetKind: 'edge',
      targetId: 'edge-imu-error',
      parameters: { time: 0 }
    });
    const response = window.calculateMeasurementResponse(scenario);
    const semantic = window.buildDataflowSemanticModel();
    const targetPoint = response.points.find((point) => point.edgeId === 'edge-imu-error');

    expect(response.mode).toBe('snapshot');
    expect(response.points.length).toBe(semantic.measurementPoints.length);
    expect(response.summary.total).toBe(semantic.measurementPoints.length);
    expect(response.summary.cut).toBeGreaterThanOrEqual(1);
    expect(response.summary.affected).toBeGreaterThanOrEqual(1);
    expect(targetPoint).toMatchObject({
      edgeId: 'edge-imu-error',
      status: 'cut',
      statusLabelZh: '链路截断',
      affectedByTarget: true
    });
    expect(targetPoint.operatedValue).toBeNull();
    expect(Array.isArray(targetPoint.samples)).toBe(true);
    expect(targetEdge.injectedFault).toBeUndefined();

    wrapper.unmount();
  });

  it('keeps installed diagnostic point markers after edge rerendering', async () => {
    const wrapper = mount(App, { attachTo: document.body });
    await flushRuntime();

    const pkg = loadPublicPackage('evtol_closed_loop_fault_demo.json');
    const importResult = window.__GZ_FLIGHT_MODEL_PACKAGE__.importObject(pkg);
    await flushRuntime();

    expect(importResult).toMatchObject({ ok: true });
    expect(typeof window.addDiagnosticTestPoint).toBe('function');
    expect(typeof window.clearDiagnosticTestPoints).toBe('function');
    expect(typeof window.renderCanvasDiagnosticTestPointMarkers).toBe('function');

    window.setCanvasView?.('canvas', { silent: true });
    window.clearDiagnosticTestPoints();
    const point = window.buildDiagnosticTestPointModel().positions[0];
    expect(point?.pointId).toBeTruthy();

    window.addDiagnosticTestPoint(point.pointId);
    await flushRuntime();
    expect(document.querySelectorAll('[data-canvas-testpoint-marker]').length).toBe(1);

    window.renderEdges();
    await flushRuntime();
    expect(document.querySelectorAll('[data-canvas-testpoint-marker]').length).toBe(1);

    wrapper.unmount();
  });

  it('separates propagating faults from local parameter faults in dataflow semantics', async () => {
    const wrapper = mount(App, { attachTo: document.body });
    await flushRuntime();

    const pkg = loadPublicPackage('evtol_closed_loop_fault_demo.json');
    const importResult = window.__GZ_FLIGHT_MODEL_PACKAGE__.importObject(pkg);
    await flushRuntime();

    expect(importResult).toMatchObject({ ok: true });

    const edgeById = new Map(window.__GZ_STATE__.modelEdges.map((edge) => [edge.id, edge]));
    const nodeById = new Map(window.__GZ_STATE__.modelNodes.map((node) => [node.id, node]));
    edgeById.get('edge-imu-error').injectedFault = {
      modelId: 'test-sensor-bias',
      name: 'IMU sensor bias',
      layer: 'sensor',
      runtimeBehavior: 'sensor_bias',
      faultCode: 'sensor_bias'
    };
    edgeById.get('edge-command-shaper').injectedFault = {
      modelId: 'test-packet-loss',
      name: 'CAN packet loss',
      layer: 'protocol',
      runtimeBehavior: 'packet_loss',
      faultCode: 'packet_loss'
    };
    nodeById.get('node-controller').injectedFault = {
      modelId: 'test-controller-gain',
      name: 'Controller gain drift',
      layer: 'control',
      runtimeBehavior: 'gain_drift',
      parameter: 'kp'
    };

    const semantic = window.buildDataflowSemanticModel();
    const groups = semantic.propagationGroups;
    const propagatedEdge = semantic.edges.find((edge) => edge.id === 'edge-imu-error');
    const blockedEdge = semantic.edges.find((edge) => edge.id === 'edge-command-shaper');
    const localEdge = semantic.edges.find((edge) => edge.id === 'edge-controller-allocator');
    const diagnosticEdge = semantic.edges.find((edge) => edge.propagationKind === 'diagnosticOnly');
    const normalEdge = semantic.edges.find((edge) => edge.propagationKind === 'none');

    expect(Object.keys(groups)).toEqual(['propagated', 'localEffect', 'blocked', 'diagnosticOnly', 'none']);
    Object.entries(groups).forEach(([kind, group]) => {
      expect(group).toMatchObject({
        kind,
        labelZh: expect.any(String),
        descriptionZh: expect.any(String),
        count: group.points.length
      });
      expect(Array.isArray(group.points)).toBe(true);
      expect(Array.isArray(group.edges)).toBe(true);
    });
    expect(groups.propagated.descriptionZh).toContain('沿链路传播');
    expect(groups.localEffect.descriptionZh).toContain('本地参数影响');
    expect(groups.blocked.descriptionZh).toContain('阻断当前链路');
    expect(groups.diagnosticOnly.descriptionZh).toContain('只作为诊断观测');
    expect(groups.propagated.edges.map((edge) => edge.id)).toContain('edge-imu-error');
    expect(groups.localEffect.edges.map((edge) => edge.id)).toContain('edge-controller-allocator');
    expect(groups.blocked.edges.map((edge) => edge.id)).toContain('edge-command-shaper');
    expect(groups.diagnosticOnly.edges.length).toBeGreaterThan(0);
    expect(groups.none.edges.length).toBeGreaterThan(0);

    expect(propagatedEdge).toMatchObject({
      propagationKind: 'propagated',
      canPropagateFault: true,
      propagationScopeZh: '沿链路传播到下游测点'
    });
    expect(propagatedEdge.affectedMeasurementPointIds.length).toBeGreaterThan(1);
    expect(propagatedEdge.affectedMeasurementPointIds).toContain(propagatedEdge.measurementPointId);
    expect(blockedEdge).toMatchObject({
      propagationKind: 'blocked',
      canPropagateFault: false,
      propagationScopeZh: '阻断当前链路'
    });
    expect(blockedEdge.affectedMeasurementPointIds).toContain(blockedEdge.measurementPointId);
    expect(localEdge).toMatchObject({
      propagationKind: 'localEffect',
      canPropagateFault: false,
      propagationScopeZh: '本地参数影响，不直接沿线传播',
      affectedMeasurementPointIds: []
    });
    expect(diagnosticEdge).toMatchObject({
      canPropagateFault: false,
      propagationScopeZh: '只作为诊断观测',
      affectedMeasurementPointIds: []
    });
    expect(normalEdge).toMatchObject({
      canPropagateFault: false,
      propagationScopeZh: '正常/未受故障影响',
      affectedMeasurementPointIds: []
    });

    window.setCanvasView('dataflow');
    await flushRuntime();

    const panel = document.getElementById('dataflow-panel');
    expect(panel?.querySelector('[data-testpoint-workbench]')).not.toBeNull();
    expect(panel?.querySelector('[data-propagation-groups]')).toBeNull();
    expect(panel?.textContent).toContain('测点诊断台');
    expect(panel?.textContent).not.toContain('故障传播分区');

    wrapper.unmount();
    return;

    const partition = document.querySelector('[data-propagation-groups]');
    expect(partition).not.toBeNull();
    expect(partition?.textContent).toContain('故障传播分区');
    expect(partition?.textContent).toContain('沿链路传播');
    expect(partition?.textContent).toContain('本地参数影响');
    expect(partition?.textContent).toContain('阻断当前链路');
    expect(partition?.textContent).toContain('只作为诊断观测');
    expect(partition?.querySelector('[data-propagation-group="propagated"]')?.textContent).toContain('edge-imu-error');
    expect(partition?.querySelector('[data-propagation-group="localEffect"]')?.textContent).toContain('edge-controller-allocator');
    expect(partition?.querySelector('[data-propagation-group="blocked"]')?.textContent).toContain('edge-command-shaper');
    ['propagated', 'localEffect', 'blocked', 'diagnosticOnly', 'none'].forEach((kind) => {
      expect(partition?.querySelector(`[data-propagation-group="${kind}"]`)).not.toBeNull();
    });

    wrapper.unmount();
  });

  it('keeps the testpoint diagnosis view Carbon styled and responsive', () => {
    const componentsCss = readComponentsCss();
    const compactCss = componentsCss.replace(/\s+/g, '');
    const panelRule = findCssRule(componentsCss, '.dataflow-panel');
    const workspaceRule = findCssRule(componentsCss, '.dataflow-workspace');
    const diagnosisWorkspaceRule = findCssRule(componentsCss, '.dataflow-workspace--diagnosis');
    const headerRule = findCssRule(componentsCss, '.dataflow-diagnosis-header');
    const cardRule = findCssRule(componentsCss, '.dataflow-workspace--diagnosis .testpoint-card');
    const positionRule = findCssRule(componentsCss, '.dataflow-workspace--diagnosis .testpoint-position');

    expect(panelRule).toMatch(/overflow\s*:\s*auto/);
    expect(workspaceRule).toMatch(/height\s*:\s*max\(100%,720px\)/);
    expect(diagnosisWorkspaceRule).toMatch(/background\s*:\s*#fff/);
    expect(diagnosisWorkspaceRule).toMatch(/font-family\s*:\s*"IBM Plex Sans"/);
    expect(headerRule).toMatch(/border-bottom\s*:\s*1px solid #e0e0e0/);
    expect(cardRule).toMatch(/border-radius\s*:\s*0/);
    expect(cardRule).toMatch(/background\s*:\s*#fff/);
    expect(positionRule).toMatch(/border-radius\s*:\s*0/);
    expect(compactCss).toContain('.dataflow-workspace--diagnosis.testpoint-operator-layout{grid-template-columns:minmax(320px,1fr)minmax(320px,1fr)minmax(280px,.85fr)');
    expect(compactCss).toMatch(/@media\(max-width:[^)]+\)\{[\s\S]*?\.dataflow-workspace--diagnosis\.testpoint-operator-layout\{[\s\S]*?grid-template-columns:1fr/);
  });

  it('removes the improvement guidance panel from the lower inspector area', async () => {
    const wrapper = mount(App, { attachTo: document.body });
    await flushRuntime();

    const guide = document.querySelector('[data-testid="improvement-guide"]');
    expect(guide).toBeNull();
    expect(document.querySelectorAll('.rpanel-guidance__item')).toHaveLength(0);

    const componentsCss = readFileSync(
      path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'src', 'styles', 'components.css'),
      'utf8'
    );
    expect(componentsCss).not.toContain('.rpanel-guidance');
    expect(componentsCss).not.toContain('data-testid="improvement-guide"');

    wrapper.unmount();
  });
});
