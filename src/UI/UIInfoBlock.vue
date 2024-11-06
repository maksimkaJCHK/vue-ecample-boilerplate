<template>
  <div
    v-if="props.isOpen"
    class="info-block"
    :class="{ isError: props.typeBlock === 'error' }"
  >
    <slot></slot>
    <ui-close
      :size="30"
      @click="closeInfoBlock"
    ></ui-close>
  </div>
</template>

<script setup>
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
</script>

<style lang="scss">
  .info-block {
    color: #fff;
    background: #08089f;
    position: relative;
    padding: 15px 45px 15px 15px;
    border-radius: var(--app-border-radius);

    &.isError {
      background-color: #cd3232;
    }

    .close {
      top: 10px;
      right: 10px;
    }
  }
</style>