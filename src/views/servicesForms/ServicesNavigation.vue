<template>
  <div class="services-navigation">
    <router-link
      v-if="routeName !== 'auth'"
      :to="{
        name: 'auth',
        query: {
          from: routeFrom
        }
      }"
    >
      Войти
    </router-link>
    <router-link
      v-if="routeName !== 'restorePassword'"
      :to="{
        name: 'restorePassword',
        query: {
          from: routeFrom
        }
      }"
    >
      Восстановить пароль
    </router-link>
    <router-link
      v-if="routeName !== 'registration'"
      :to="{
        name: 'registration',
        query: {
          from: routeFrom
        }
      }"
    >
      Зарегистрироваться
    </router-link>
  </div>
</template>

<script setup>
  import { computed } from 'vue';
  import { RouterLink, useRoute } from 'vue-router';

  const route = useRoute();
  const routeName = computed(() => route.name);
  const routeFrom = computed(() => route.query.from);
</script>

<style lang="scss" scoped>
  .services-navigation {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    margin: 15px 0;
  }
</style>
