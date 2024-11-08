<template>
  <div class="news-list">
    <ui-spiner :load="props.load"></ui-spiner>

    <h1>Список новостей</h1>

    <ui-info-block
      :isOpen="props.isError"
      typeBlock="error"
      @close-error="props.closeError"
    >
      {{ props.error }}
    </ui-info-block>

    <template v-if="props.items && props.items.length">
      <news-list-item
        v-for="{ title, id, description} in props.items"
        :key="id"
        :id="id"
        :title="title"
        :description="description"
      ></news-list-item>
    </template>

    <ui-null-text v-else>
      <template v-if="!props.error">
        Пока новостей нет
      </template>

      <template v-else>
        Произошла ошибка во время загрузки списка новостей!!!
      </template>
    </ui-null-text>
  </div>
</template>

<script setup>
  import NewsListItem from './NewsListItem.vue';

  const props = defineProps([
    'items',
    'load',
    'error',
    'isError',
    'closeError',
  ]);
</script>

<style lang="scss" scoped>
  .news-list {
    position: relative;
  }
</style>
