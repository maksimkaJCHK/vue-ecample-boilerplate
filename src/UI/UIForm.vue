<template>
  <form
    novalidate
    autocomplete="off"
    class="form auth"
  >
    <slot></slot>
  </form>
</template>

<style lang="scss">
  .form {
    position: relative;

    &-group {
      margin: 30px 0;
    }

    &-row {
      margin: 30px 0;
    }
  }
</style>