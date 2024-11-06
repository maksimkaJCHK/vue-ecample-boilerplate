<template>
  <ui-container>
    <ui-form @submit.prevent="submForm">
      <ui-spiner :load="load"></ui-spiner>

      <h1>Войти</h1>

      <ui-info-block
        :isOpen="isError"
        typeBlock="error"
        @close-error="closeError"
      >
        {{ error }}
      </ui-info-block>

      <div class="form-group">
        <div class="form-row">
          <ui-input
            v-model="login"
            :errorText="loginError"
            placeholder="Логин"
          />
        </div>

        <div class="form-row">
          <ui-input
            v-model="password"
            :errorText="passwordError"
            typeInput="password"
            placeholder="Пароль"
          />
        </div>
      </div>

      <ui-button>
        Войти
      </ui-button>
    </ui-form>

    <services-navigation />
  </ui-container>
</template>

<script setup>
  import ServicesNavigation from '@/views/servicesForms/ServicesNavigation.vue';
  import useAuth from './useAuth';

  const {
    load,
    error,
    isError,
    login,
    password,
    loginError,
    passwordError,
    submForm,
    closeError
  } = useAuth();
</script>

<style lang="scss">

</style>
