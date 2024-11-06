<template>
  <router-link
    :to="url"
    class="top-logo"
  >
    <img
      :alt="alt"
      class="top-logo-img"
      :src="src"
      :width="width"
      :height="height"
    />
  </router-link>
</template>

<script setup>
  import { RouterLink } from 'vue-router';

  const props = defineProps({
    url: {
      default: {
        name: 'home'
      }
    },
    src: {
      type: String
    },
    alt: {
      type: String
    },
    width: {
      type: Number,
      default: 125
    },
    height: {
      type: Number,
      default: 125
    }
  });
</script>

<style lang="scss" scoped>
  .top-logo {
    width: 125px;
    text-decoration: none;
    display: block;
    margin: 0 auto;

    img {
      max-width: 100%;
      text-decoration: none;
    }
  }
</style>
