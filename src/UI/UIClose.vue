<template>
  <div class="close">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      :width="`${props.size}px`"
      :height="`${props.size}px`"
    >
      <path
        class="close-bg"
        d="M44,24c0,11.045-8.955,20-20,20S4,35.045,4,24S12.955,4,24,4S44,12.955,44,24z"
      />
      <path
        class="close-line-bg"
        d="M29.656,15.516l2.828,2.828l-14.14,14.14l-2.828-2.828L29.656,15.516z"
      />
      <path
        class="close-line-bg"
        d="M32.484,29.656l-2.828,2.828l-14.14-14.14l2.828-2.828L32.484,29.656z"
      />
    </svg>
  </div>
</template>

<script setup>
  const props = defineProps({
    size: {
      type: Number,
      default: 48
    },
  })
</script>

<style lang="scss">
  .close {
    --bg: var(--app-danger-color);
    --line: #fff;

    cursor: pointer;
    position: absolute;
    display: inline-block;

    svg {
      display: block;
    }

    &-bg {
      fill: var(--bg);
      transition: fill var(--app-transition);
    }

    &-line-bg {
      fill: var(--line);
      transition: fill var(--app-transition);
    }

    &:hover {
      --bg: var(--app-danger-color-hover);
    }

    .isError & {
      --bg: var(--app-primary-color);
    }

    .isError &:hover{
      --bg: var(--app-primary-color-hover);
    }
  }
</style>