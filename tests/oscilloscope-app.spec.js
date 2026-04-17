import { mount } from '@vue/test-utils';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { nextTick } from 'vue';
import App from '../src/App.vue';
import { __resetLegacyRuntimeForTests } from '../src/services/legacyRuntimeBootstrap.js';

async function flushRuntime() {
  await nextTick();
  await Promise.resolve();
}

async function mountWorkbench() {
  const wrapper = mount(App, { attachTo: document.body });
  await flushRuntime();
  return wrapper;
}

function dispatchDoubleClick(target) {
  target.dispatchEvent(new MouseEvent('dblclick', { bubbles: true, cancelable: true }));
}

function dispatchClick(target) {
  target.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));
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

function getScopeWindows() {
  return [...document.querySelectorAll('.scope-window')];
}

function createCanvasContextStub() {
  return {
    clearRect() {},
    fillRect() {},
    strokeRect() {},
    beginPath() {},
    closePath() {},
    moveTo() {},
    lineTo() {},
    stroke() {},
    fill() {},
    arc() {},
    fillText() {},
    strokeText() {},
    setLineDash() {},
    save() {},
    restore() {},
    translate() {},
    scale() {},
    setTransform() {},
    createLinearGradient() {
      return {
        addColorStop() {}
      };
    },
    measureText() {
      return { width: 24 };
    }
  };
}

describe('Oscilloscope app integration', () => {
  beforeEach(() => {
    vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockImplementation(() => createCanvasContextStub());
  });

  afterEach(() => {
    vi.restoreAllMocks();
    window.localStorage.clear();
    document.body.innerHTML = '';
    __resetLegacyRuntimeForTests();
  });

  it('opens one floating window per scope node and exposes CH1/CH2 ports', async () => {
    const wrapper = await mountWorkbench();

    window.createNode('instrument_scope', 320, 220);
    window.createNode('instrument_scope', 620, 260);
    await flushRuntime();

    const scopeNodes = [...document.querySelectorAll('.blk.b-inst')];
    expect(scopeNodes).toHaveLength(2);
    expect(scopeNodes[0].querySelectorAll('.node-port--input')).toHaveLength(2);

    dispatchDoubleClick(scopeNodes[0]);
    await flushRuntime();
    dispatchDoubleClick(scopeNodes[1]);
    await flushRuntime();

    const windows = getScopeWindows();
    expect(windows).toHaveLength(2);
    expect(windows[0].dataset.scopeId).not.toBe(windows[1].dataset.scopeId);

    wrapper.unmount();
  });

  it('focuses an existing scope window when the same node is reopened', async () => {
    const wrapper = await mountWorkbench();

    window.createNode('instrument_scope', 420, 240);
    await flushRuntime();

    const scopeNode = document.querySelector('.blk.b-inst');
    const scopeId = scopeNode.id.replace('b-', '');

    dispatchDoubleClick(scopeNode);
    await flushRuntime();
    const firstWindow = document.querySelector(`.scope-window[data-scope-id="${scopeId}"]`);
    const originalZ = Number(firstWindow?.style.zIndex || 0);

    dispatchDoubleClick(scopeNode);
    await flushRuntime();

    const reopenedWindows = document.querySelectorAll(`.scope-window[data-scope-id="${scopeId}"]`);
    expect(reopenedWindows).toHaveLength(1);
    expect(Number(reopenedWindows[0].style.zIndex || 0)).toBeGreaterThanOrEqual(originalZ);

    wrapper.unmount();
  });

  it('toggles CH1, CH2, and overlay views while showing per-channel readouts', async () => {
    const wrapper = await mountWorkbench();

    window.createNode('instrument_scope', 460, 260);
    await flushRuntime();

    const scopeNode = document.querySelector('.blk.b-inst');
    const scopeId = scopeNode.id.replace('b-', '');
    window.__GZ_SIM__.actual.scopeSamples[scopeId] = {
      ch1: [
        { t: 0, actual: -1.236 },
        { t: 1, actual: 1.234567 }
      ],
      ch2: [
        { t: 0, actual: -0.505 },
        { t: 1, actual: 0.5049 }
      ]
    };

    dispatchDoubleClick(scopeNode);
    await flushRuntime();

    const ch2Button = document.querySelector(`[data-scope-id="${scopeId}"] [data-scope-mode="ch2"]`);
    const overlayButton = document.querySelector(`[data-scope-id="${scopeId}"] [data-scope-mode="overlay"]`);
    expect(ch2Button).not.toBeNull();
    expect(overlayButton).not.toBeNull();

    dispatchClick(ch2Button);
    await flushRuntime();
    dispatchClick(overlayButton);
    await flushRuntime();

    const toolbarLabels = [
      ...document.querySelectorAll(`[data-scope-id="${scopeId}"] .scope-window__toolbar button`)
    ].map((button) => button.textContent?.trim());

    expect(toolbarLabels).toEqual(['叠加', 'CH1', 'CH2', '关闭 ×']);
    expect(document.querySelector(`[data-scope-id="${scopeId}"] [data-scope-tag="ch1"]`)).not.toBeNull();
    expect(document.querySelector(`[data-scope-id="${scopeId}"] [data-scope-tag="ch2"]`)).not.toBeNull();
    expect(document.querySelector(`[data-scope-id="${scopeId}"] .scope-window__signals`)).not.toBeNull();
    expect(document.querySelector(`[data-scope-id="${scopeId}"] .scope-window__header-main`)).not.toBeNull();
    expect(document.querySelector(`[data-scope-id="${scopeId}"] .scope-window__signal-band`)).not.toBeNull();
    expect(document.querySelector(`[data-scope-id="${scopeId}"] .scope-window__stats`)?.classList.contains('scope-window__stats--strip')).toBe(true);
    expect(document.querySelectorAll(`[data-scope-id="${scopeId}"] .scope-readout.scope-readout--strip`)).toHaveLength(2);
    expect(document.querySelector(`[data-scope-id="${scopeId}"] [data-scope-tag="ch1"]`)?.getAttribute('title')).toContain('CH1:');
    expect(document.querySelector(`[data-scope-id="${scopeId}"] [data-scope-tag="ch1"] .scope-window__tag-text`)).not.toBeNull();

    expect(document.querySelector(`[data-scope-id="${scopeId}"] [data-scope-channel="ch1"] [data-field="current"]`)?.textContent?.trim()).toBe('1.23');
    expect(document.querySelector(`[data-scope-id="${scopeId}"] [data-scope-channel="ch1"] [data-field="pp"]`)?.textContent?.trim()).toBe('2.47');
    expect(document.querySelector(`[data-scope-id="${scopeId}"] [data-scope-channel="ch2"] [data-field="pp"]`)?.textContent?.trim()).toBe('1.01');

    wrapper.unmount();
  });

  it('shows icons for every simulation toolbar action button', async () => {
    const wrapper = await mountWorkbench();

    const toolbarButtons = [
      document.getElementById('sbtn-init'),
      document.getElementById('sbtn-run'),
      document.getElementById('sbtn-step'),
      document.getElementById('sbtn-pause'),
      document.getElementById('sbtn-stop')
    ];

    expect(toolbarButtons.every(Boolean)).toBe(true);
    toolbarButtons.forEach((button) => {
      const icon = button.querySelector('.sim-btn-icon');
      expect(icon).not.toBeNull();
      expect(icon.textContent?.trim().length).toBeGreaterThan(0);
    });

    wrapper.unmount();
  });

  it('sizes the waveform canvas with device-pixel-ratio awareness', async () => {
    const rectSpy = vi.spyOn(HTMLCanvasElement.prototype, 'getBoundingClientRect').mockReturnValue({
      x: 0,
      y: 0,
      width: 320,
      height: 180,
      top: 0,
      left: 0,
      right: 320,
      bottom: 180,
      toJSON() {
        return this;
      }
    });

    Object.defineProperty(window, 'devicePixelRatio', {
      value: 2,
      configurable: true
    });

    const wrapper = await mountWorkbench();

    window.createNode('instrument_scope', 420, 240);
    await flushRuntime();

    const scopeNode = document.querySelector('.blk.b-inst');
    dispatchDoubleClick(scopeNode);
    await flushRuntime();

    const waveCanvas = document.querySelector('.scope-window [data-scope-role="wave-canvas"]');
    expect(waveCanvas).not.toBeNull();
    expect(waveCanvas.width).toBe(640);
    expect(waveCanvas.height).toBe(360);

    rectSpy.mockRestore();
    wrapper.unmount();
  });

  it('drags a floating scope window by its header', async () => {
    const wrapper = await mountWorkbench();

    window.createNode('instrument_scope', 400, 240);
    await flushRuntime();

    const scopeNode = document.querySelector('.blk.b-inst');
    dispatchDoubleClick(scopeNode);
    await flushRuntime();

    const scopeWindow = document.querySelector('.scope-window');
    const header = scopeWindow.querySelector('.scope-window__header');
    expect(header.dataset.scopeDragHandle).toBe(scopeWindow.dataset.scopeId);
    const beforeLeft = scopeWindow.style.left;
    const beforeTop = scopeWindow.style.top;

    window.startScopeWindowDrag(
      {
        clientX: 120,
        clientY: 120,
        stopPropagation() {},
        preventDefault() {}
      },
      scopeWindow.dataset.scopeId
    );
    dispatchPointer(document, 'mousemove', { pointerId: 7, clientX: 180, clientY: 168 });
    dispatchPointer(document, 'mouseup', { pointerId: 7, clientX: 180, clientY: 168 });
    await flushRuntime();

    const movedWindow = document.querySelector('.scope-window');
    expect(movedWindow.style.left).not.toBe(beforeLeft);
    expect(movedWindow.style.top).not.toBe(beforeTop);

    wrapper.unmount();
  });

  it('opens scope windows below the simulation toolbar and clamps upward dragging', async () => {
    const wrapper = await mountWorkbench();

    window.createNode('instrument_scope', 360, 220);
    await flushRuntime();

    const scopeNode = document.querySelector('.blk.b-inst');
    dispatchDoubleClick(scopeNode);
    await flushRuntime();

    const scopeWindow = document.querySelector('.scope-window');
    const initialTop = Number.parseInt(scopeWindow.style.top || '0', 10);
    expect(initialTop).toBeGreaterThanOrEqual(96);

    window.startScopeWindowDrag(
      {
        clientX: 180,
        clientY: initialTop + 12,
        stopPropagation() {},
        preventDefault() {}
      },
      scopeWindow.dataset.scopeId
    );
    dispatchPointer(document, 'mousemove', { pointerId: 9, clientX: 150, clientY: 0 });
    dispatchPointer(document, 'mouseup', { pointerId: 9, clientX: 150, clientY: 0 });
    await flushRuntime();

    const movedTop = Number.parseInt(document.querySelector('.scope-window').style.top || '0', 10);
    expect(movedTop).toBeGreaterThanOrEqual(96);

    wrapper.unmount();
  });

  it('keeps the close button stable on press and closes the scope window', async () => {
    const wrapper = await mountWorkbench();

    window.createNode('instrument_scope', 420, 260);
    await flushRuntime();

    const scopeNode = document.querySelector('.blk.b-inst');
    dispatchDoubleClick(scopeNode);
    await flushRuntime();

    const closeButton = document.querySelector('.scope-window__close');
    dispatchPointer(closeButton, 'pointerdown', { pointerId: 11, clientX: 24, clientY: 24 });
    await flushRuntime();

    expect(document.querySelector('.scope-window__close')).toBe(closeButton);

    dispatchClick(closeButton);
    await flushRuntime();

    expect(document.querySelector('.scope-window')).toBeNull();

    wrapper.unmount();
  });
});
