<template>
  <div
    v-if="props.load"
    class="spiner-wrapper"
  >
    <div class="spiner"><div></div><div></div><div></div><div></div></div>
  </div>
</template>

<script setup>
  const props = defineProps(['load'])
</script>

<style lang="scss" scoped>
  .spiner-wrapper {
    --spiner-opacity: .7;
    --spiner-bg: 255, 255, 255;
    --spiner-border-width: 6px;
    --spiner-border-color: #1105ef;

    --spiner-width: 60px;
    --spiner-height: var(--spiner-width);

    --spiner-inner-width: 38px;
    --spiner-inner-height: var(--spiner-inner-width);

    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 11;
    background: rgba(var(--spiner-bg), var(--spiner-opacity));
  }

  .spiner {
    color: #1c4c5b;
    display: inline-block;
    position: relative;
    width: var(--spiner-width);
    height: var(--spiner-height);

    &,
    div {
      box-sizing: border-box;
    }

    div {
      box-sizing: border-box;
      display: block;
      position: absolute;
      width: var(--spiner-inner-width);
      height: var(--spiner-inner-height);
      margin: 8px;
      border: var(--spiner-border-width) solid var(--spiner-border-color);
      border-radius: 50%;
      animation: spinerAnimation 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
      border-color: var(--spiner-border-color) transparent transparent transparent;

      &:nth-child(1) {
        animation-delay: -0.45s;
      }

      &:nth-child(2) {
        animation-delay: -0.3s;
      }

      &:nth-child(3) {
        animation-delay: -0.15s;
      }
    }
  }

  @keyframes spinerAnimation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>
