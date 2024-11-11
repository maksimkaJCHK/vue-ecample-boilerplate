<template>
  <div
    v-if="props.isOpen"
    class="info-block"
    :class="classBtn"
  >
    <slot></slot>
    <ui-close
      :size="30"
      @click="closeInfoBlock"
    ></ui-close>
  </div>
</template>

<script setup>
  import { computed } from 'vue';

  const props = defineProps({
    isOpen: {
      type: Boolean,
      default: false
    },
    typeBlock: {
      type: String,
      default: 'normal'
    }
  });

  const emit = defineEmits(['close-error']);
  const closeInfoBlock = () => emit('close-error');

  const classBtn = computed(() => ({
    isError: props.typeBlock === 'error',
    warning: props.typeBlock === 'warning',
    success: props.typeBlock === 'success',
  }));
</script>

<style lang="scss">
  .info-block {
    color: #fff;
    background: var(--app-primary-color);
    position: relative;
    padding: 15px 45px 15px 15px;
    border-radius: var(--app-border-radius);

    &.isError {
      background-color: var(--app-danger-color);
    }

    &.warning {
      background-color: var(--app-warning-color);
    }

    &.success {
      background-color: var(--app-success-color);
    }

    .close {
      top: 10px;
      right: 10px;
    }
  }
</style>