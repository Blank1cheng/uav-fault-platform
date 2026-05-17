<script setup>
import { computed, onBeforeUnmount, onMounted } from 'vue';
import {
  closeComponentAuthoringDialog,
  openComponentAuthoringDialog,
  useDialogsState
} from '../../composables/useDialogsState.js';

const { dialogsState } = useDialogsState();

const parsedInterface = computed(() => dialogsState.componentAuthoring.parsedInterface);
const inputs = computed(() => parsedInterface.value?.inputs ?? []);
const outputs = computed(() => parsedInterface.value?.outputs ?? []);

function displayName(item) {
  return item?.displayName || item?.comment || item?.name || '未命名';
}

function handleOpenEvent(event) {
  openComponentAuthoringDialog(event.detail ?? {});
}

onMounted(() => {
  window.addEventListener('gz:open-component-authoring', handleOpenEvent);
});

onBeforeUnmount(() => {
  window.removeEventListener('gz:open-component-authoring', handleOpenEvent);
});
</script>

<template>
  <div
    v-if="dialogsState.componentAuthoring.open"
    class="overlay overlay--vue open"
    data-testid="component-authoring-dialog"
  >
    <div class="modal authoring-modal" role="dialog" aria-modal="true" aria-labelledby="component-authoring-title">
      <div class="mhead">
        <div>
          <div id="component-authoring-title" class="mtitle">新增仿真组件</div>
          <div class="authoring-modal__sub">
            {{ parsedInterface?.fileName || '尚未选择 Python 接口' }}
          </div>
        </div>
        <button class="mclose" type="button" aria-label="关闭" @click="closeComponentAuthoringDialog">×</button>
      </div>

      <div class="mbody authoring-modal__body">
        <section class="authoring-card">
          <div class="authoring-card__eyebrow">Python 接口</div>
          <h3>{{ parsedInterface?.description || '未命名组件' }}</h3>
          <div class="authoring-meta">
            <span>{{ parsedInterface?.moduleName || 'unknown_module' }}</span>
            <span>{{ parsedInterface?.entryFunction || 'process' }}</span>
          </div>
        </section>

        <section class="authoring-card">
          <div class="authoring-card__eyebrow">输入</div>
          <div v-if="inputs.length" class="authoring-list">
            <div v-for="item in inputs" :key="`input-${item.name}`" class="authoring-list__row">
              <strong>{{ displayName(item) }}</strong>
              <span>{{ item.name }}</span>
              <code>{{ item.type || 'any' }}</code>
            </div>
          </div>
          <div v-else class="authoring-empty">暂无输入变量</div>
        </section>

        <section class="authoring-card">
          <div class="authoring-card__eyebrow">输出</div>
          <div v-if="outputs.length" class="authoring-list">
            <div v-for="item in outputs" :key="`output-${item.name}`" class="authoring-list__row">
              <strong>{{ displayName(item) }}</strong>
              <span>{{ item.name }}</span>
              <code>{{ item.type || 'any' }}</code>
            </div>
          </div>
          <div v-else class="authoring-empty">暂无输出变量</div>
        </section>
      </div>

      <div class="mfoot">
        <button class="btn-cancel" type="button" @click="closeComponentAuthoringDialog">关闭</button>
      </div>
    </div>
  </div>
</template>
