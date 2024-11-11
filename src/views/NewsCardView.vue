<template>
  <ui-container class="news-card">
    <ui-spiner :load="load"></ui-spiner>

    <ui-info-block
      :isOpen="isError"
      typeBlock="error"
      @close-error="closeError"
    >
      {{ error }}
    </ui-info-block>

    <h1>{{ newsCard?.title }}</h1>

    <p>{{ newsCard?.bigDescription }}</p>

    <div>
      <router-link :to="{ name: 'home' }">
        Вернуться на главную страницу
      </router-link>
    </div>
  </ui-container>
</template>

<script setup>
  import { onBeforeMount, computed } from 'vue';
  import { useRoute, RouterLink } from 'vue-router';

  import useAPI from '@/hooks/useAPI.js';

  const route = useRoute();
  const idNews = computed(() => route.params.id);

  const {
    load,
    error,
    isError,
    response: newsCard,
    request,
    closeError,
  } = useAPI({ url: `/news/${idNews.value}` });

  onBeforeMount(request);
</script>

<style lang="scss" scoped>
  .news-card {
    position: relative;
  }
</style>
