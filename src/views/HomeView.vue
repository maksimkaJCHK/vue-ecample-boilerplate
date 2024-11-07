<template>
  <ui-container>
    <news-list :items="newsItems" />
  </ui-container>
</template>

<script setup>
  import { onMounted } from 'vue';

  import useAPI from '@/hooks/useAPI.js';
  import NewsList from '@/components/news-list/NewsList.vue';

  const {
    load,
    error,
    isError,
    response: newsItems,
    request,
    closeError,
  } = useAPI({ url: '/news' });

  onMounted(request);
</script>
