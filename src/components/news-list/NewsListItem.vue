<template>
  <div class="news-list-item">
    <div class="title">
      <router-link :to="{ name: 'newsCard', params: { id: props.id } }">
        {{ title }}
      </router-link>
    </div>

    <div class="time">
      {{ props.time }}
    </div>

    <div class="description">
      {{ description }}
    </div>

    <div class="link">
      <router-link :to="{ name: 'newsCard', params: { id: props.id } }">
        Посмотреть новость
      </router-link>
    </div>
  </div>
</template>

<script setup>
  import { RouterLink } from 'vue-router';

  const props = defineProps([
    'id',
    'title',
    'description',
    'time'
  ]);
</script>

<style lang="scss" scoped>
  .news-list-item {
    padding: 10px;
    margin: 15px 0;
    border: 1px solid #000;
    transition: box-shadow .4s ease-out 0s;
    box-shadow: 0 0 10px rgba(0, 0, 0, .4);
    border-radius: var(--app-border-radius);

    &:hover {
      box-shadow: 0 0 20px rgba(0, 0, 0, .4);
    }

    .time {
      font-size: 13px;
      line-height: 120%;
    }

    .title {
      margin: 0 0 10px;

      &,
      a {
        font-size: 20px;
        font-weight: bold;
      }

      a {
        color: var(--app-color-text);
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }

    .description {
      margin: 10px 0 5px;
    }

    .link {
      &,
      a {
        font-size: 13px;
        line-height: 120%;
      }
    }
  }
</style>