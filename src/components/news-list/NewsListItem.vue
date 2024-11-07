<template>
  <div class="news-list-item">
    <div class="title">
      {{ title }}
    </div>

    <div class="description">
      {{ description }}
    </div>

    <div class="link">

    </div>
  </div>
</template>

<script setup>
  import { RouterLink } from 'vue-router';

  const props = defineProps([
    'id',
    'title',
    'description',
  ])
</script>

<style lang="scss" scoped>
  .news-list-item {
    .title {

    }

    .description {

    }

    .link {

    }
  }
</style>