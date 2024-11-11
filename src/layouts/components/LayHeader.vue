<template>
  <header>
    <top-logo
      alt="Example alt"
      :src="imgPath"
    />

    <top-nav />

    <top-info />
  </header>
</template>

<script setup>
  import imgPath from  '@/assets/logo.svg';

  import TopLogo from './TopLogo.vue';
  import TopNav from './TopNav.vue';
  import TopInfo from './TopInfo.vue';
</script>

<style lang="scss">
  header {
    color: #fff;
    line-height: 1.5;
    max-height: 100vh;
  }

  @media (min-width: 1024px) {
    header {
      display: flex;
      place-items: center;
    }
  }
</style>
