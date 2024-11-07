<template>
  <div class="news-list">
    <template v-if="props.items && props.items.length">
      <news-list-item
        v-for="{ title, id, description} in props.items"
        :key="id"
        :id="id"
        :title="title"
        :description="description"
      ></news-list-item>
    </template>

    <div v-else>Пока новостей нет</div>
  </div>
</template>

<script setup>
  import NewsListItem from './NewsListItem.vue';

  const props = defineProps(['items']);
</script>
