<template>
  <div class="top-info">
    <figure class="top-info-img">
      <img
        src="@/assets/logo.svg"
        alt=""
      />
    </figure>

    <div class="top-info-label">
      {{ login }}
    </div>

    <div class="top-info-serv">
      <router-link 
        :to="{ name: 'personalAccount' }"
        class="top-info-row"
        >
        Личные настройки
      </router-link>
      <div
        class="top-info-row"
        @click="logOut"
      >
        Выход
      </div>
    </div>
  </div>
</template>

<script setup>
  import { RouterLink } from 'vue-router';
  import { storeToRefs } from 'pinia';
  import { useAuthStore } from '@/stores/useAuthStore.js';

  const authStore = useAuthStore();
  const { logOut } = authStore;
  const { login } = storeToRefs(authStore)
</script>

<style lang="scss" scoped>
  .top-info {
    width: 54px;
    z-index: 1;
    cursor: pointer;
    margin: 15px auto;
    position: relative;

    &:hover &-serv {
      display: block;
    }

    &-img {
      width: 27px;
      height: 27px;
      border-radius: 50%;
      overflow: hidden;
      background: #fff;
      display: flex;
      margin: 0 auto 5px;
      justify-content: center;
      align-items: center;

      img {
        display: block;
        max-width: 90%;
      }
    }

    &-label {
      overflow: hidden;
      text-align: center;
      text-overflow: ellipsis;
    }

    &-serv {
      right: 0;
      width: 150px;
      color: #000;
      display: none;
      background: #fff;
      position: absolute;
      overflow: hidden;
      box-shadow: 0 0 10px rgba(0, 0, 0, .4);
      border-radius: var(--app-border-radius);
    }

    &-row {
      color: var(--app-color-text);
      cursor: pointer;
      padding: 3px 10px;
      display: block;
      text-decoration: none;
      border-bottom: 1px solid #000;
      &:hover {
        background: #f1e5e5;
      }
    }
  }
</style>
