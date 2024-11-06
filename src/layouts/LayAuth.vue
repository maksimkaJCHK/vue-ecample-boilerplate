<template>
  <div class="services-form">
    <router-view />
  </div>
</template>

<script setup>
  import { RouterView } from 'vue-router';
</script>

<style lang="scss">
  .services-form {
    display: flex;
    align-items: center;
    min-height: calc(100vh - 64px);

    & > .container {
      width: 100%;
    }
  }
</style>
