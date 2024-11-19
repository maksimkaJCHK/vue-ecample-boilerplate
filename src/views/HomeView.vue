<template>
  <ui-container>
    <news-list
      :items="newsItems"
      :load="load"
      :error="error"
      :isError="isError"
      :closeError="closeError"
    />
  </ui-container>
</template>

<script setup>
  import { onMounted, computed } from 'vue';

  import useAPI from '@/hooks/useAPI.js';
  import NewsList from '@/components/news-list/NewsList.vue';
  import { bDate } from '@/helpers/date.js';

  const {
    load,
    error,
    isError,
    response,
    request,
    closeError,
  } = useAPI({ url: '/news' });

  const newsItems = computed(() => response.value
    ? response.value.map((el) => ({
      ...el,
      time: bDate(el.time)
    }))
    : []
  );

  onMounted(request);
</script>
