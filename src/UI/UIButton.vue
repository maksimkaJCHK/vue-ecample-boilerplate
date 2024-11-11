<template>
  <button
    class="btn"
    :class="styleBtn"
  >
    <slot>Отправить</slot>
  </button>
</template>

<script setup>
  import { computed } from 'vue';

  const props = defineProps({
    typeBtn: {
      type: String,
      default: 'primary'
    }
  });

  const styleBtn = computed(() => ({
    secondary: props.typeBtn === 'secondary',
    success: props.typeBtn === 'success',
    info: props.typeBtn === 'info',
    warning: props.typeBtn === 'warning',
    danger: props.typeBtn === 'danger',
  }));
</script>

<style lang="scss">
  .btn {
    --bg: var(--app-primary-color);
    --border: var(--bg);

    --bg-hover: var(--app-primary-color-hover);
    --border-hover: var(--bg-hover);

    --bg-active: var(--app-primary-color-active);
    --border-active: var(--bg-active);

    --bg-disabled: var(--app-primary-color-disabled);
    --border-disabled: var(--bg-disabled);

    color: #fff;
    cursor: pointer;
    display: inline-block;
    box-sizing: border-box;
    padding: 5px 10px;
    border-radius: var(--app-border-radius);
    background: var(--bg);
    border: 1px solid var(--border);
    border: none;
    user-select: none;
    font: 16px/1.5 var(--app-font-family);
    transition: background var(--app-transition);

    &:hover {
      background: var(--bg-hover);
      border-color: var(--border-hover);
    }

    &:active {
      background: var(--bg-active);
      border-color: var(--border-active);
    }

    &[disabled] {
      cursor: default;
      opacity: .7;
      background: var(--bg-disabled);
      border-color: var(--border-disabled);
    }

    &.secondary {
      --bg: var(--app-secondary-color);
      --bg-hover: var(--app-secondary-color-hover);
      --bg-active: var(--app-secondary-color-active);
      --bg-disabled: var(--app-secondary-color-disabled);

      --border: var(--app-primary-color);
      --border-hover: var(--app-secondary-color-hover);
      --border-active: var(--app-secondary-color-active);
      --border-disabled: var(--app-secondary-color-disabled);
    }

    &.success {
      --bg: var(--app-success-color);
      --bg-hover: var(--app-success-color-hover);
      --bg-active: var(--app-success-color-active);
      --bg-disabled: var(--app-success-color-disabled);

      --border: var(--app-success-color);
      --border-hover: var(--app-success-color-hover);
      --border-active: var(--app-success-color-active);
      --border-disabled: var(--app-success-color-disabled);
    }

    &.info {
      --bg: var(--app-info-color);
      --bg-hover: var(--app-info-color-hover);
      --bg-active: var(--app-info-color-active);
      --bg-disabled: var(--app-info-color-disabled);

      --border: var(--app-info-color);
      --border-hover: var(--app-info-color-hover);
      --border-active: var(--app-info-color-active);
      --border-disabled: var(--app-info-color-disabled);
    }

    &.warning {
      --bg: var(--app-warning-color);
      --bg-hover: var(--app-warning-color-hover);
      --bg-active: var(--app-warning-color-active);
      --bg-disabled: var(--app-warning-color-disabled);

      --border: var(--app-warning-color);
      --border-hover: var(--app-warning-color-hover);
      --border-active: var(--app-warning-color-active);
      --border-disabled: var(--app-warning-color-disabled);
    }

    &.danger {
      --bg: var(--app-danger-color);
      --bg-hover: var(--app-danger-color-hover);
      --bg-active: var(--app-danger-color-active);
      --bg-disabled: var(--app-danger-color-disabled);

      --border: var(--app-danger-color);
      --border-hover: var(--app-danger-color-hover);
      --border-active: var(--app-danger-color-active);
      --border-disabled: var(--app-danger-color-disabled);
    }
  }
</style>
