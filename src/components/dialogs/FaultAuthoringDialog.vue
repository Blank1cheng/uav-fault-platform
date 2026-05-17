<script setup>
import { computed, onBeforeUnmount, onMounted } from 'vue';
import {
  closeFaultAuthoringDialog,
  openFaultAuthoringDialog,
  useDialogsState
} from '../../composables/useDialogsState.js';

const { dialogsState } = useDialogsState();

const target = computed(() => dialogsState.faultAuthoring.target);

const runtimeBehaviors = [
  { value: 'bias', label: 'Bias 固定偏置' },
  { value: 'drift', label: 'Drift 缓慢漂移' },
  { value: 'intermittent', label: 'Intermittent 间歇故障' },
  { value: 'noise', label: 'Noise 噪声扰动' },
  { value: 'lock', label: 'Lock 锁定输出' },
  { value: 'tamper', label: 'Tamper 篡改信号' }
];

function handleOpenEvent(event) {
  openFaultAuthoringDialog(event.detail ?? {});
}

onMounted(() => {
  window.addEventListener('gz:open-fault-authoring', handleOpenEvent);
});

onBeforeUnmount(() => {
  window.removeEventListener('gz:open-fault-authoring', handleOpenEvent);
});
</script>

<template>
  <div
    v-if="dialogsState.faultAuthoring.open"
    class="overlay overlay--vue open"
    data-testid="fault-authoring-dialog"
  >
    <div class="modal authoring-modal" role="dialog" aria-modal="true" aria-labelledby="fault-authoring-title">
      <div class="mhead">
        <div>
          <div id="fault-authoring-title" class="mtitle">新增故障模型</div>
          <div class="authoring-modal__sub">
            {{ target?.targetKind || 'target' }} · {{ target?.targetId || '未选择目标' }}
          </div>
        </div>
        <button class="mclose" type="button" aria-label="关闭" @click="closeFaultAuthoringDialog">×</button>
      </div>

      <div class="mbody authoring-modal__body">
        <section class="authoring-card">
          <div class="authoring-card__eyebrow">目标槽位</div>
          <h3>{{ target?.targetName || '未命名目标' }}</h3>
          <div class="authoring-meta">
            <span>{{ target?.slotName || '未选择槽位' }}</span>
            <span>{{ target?.slotId || 'slot' }}</span>
          </div>
        </section>

        <section class="authoring-card authoring-form">
          <label class="authoring-form__row">
            <span>故障名称</span>
            <input type="text" placeholder="例如：陀螺仪固定偏置">
          </label>

          <label class="authoring-form__row">
            <span>运行行为</span>
            <select>
              <option v-for="behavior in runtimeBehaviors" :key="behavior.value" :value="behavior.value">
                {{ behavior.label }}
              </option>
            </select>
          </label>
        </section>
      </div>

      <div class="mfoot">
        <button class="btn-cancel" type="button" @click="closeFaultAuthoringDialog">关闭</button>
      </div>
    </div>
  </div>
</template>
