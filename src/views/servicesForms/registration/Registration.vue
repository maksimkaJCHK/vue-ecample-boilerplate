<template>
  <ui-container>
    <ui-form @submit.prevent="submForm">
      <h1>Регистрация</h1>

      <ui-spiner :load="load"></ui-spiner>

      <div class="form-group">
        <div class="form-row">
          <ui-input
            v-model="name"
            :errorText="nameError"
            placeholder="Имя"
          />
        </div>

        <div class="form-row">
          <ui-input
            v-model="lastName"
            :errorText="lastNameError"
            placeholder="Фамилия"
          />
        </div>

        <div class="form-row">
          <ui-input
            v-model="login"
            :errorText="loginError"
            placeholder="Логин"
          />
        </div>

        <div class="form-row">
          <ui-input
            v-model="email"
            typeInput="email"
            :errorText="emailError"
            placeholder="Email"
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

        <div class="form-row">
          <ui-input
            v-model="confirmPas"
            :errorText="confirmPasError"
            typeInput="password"
            placeholder="Подтвердите пароль"
          />
        </div>
      </div>

      <div class="form-row">
        <ui-checkbox v-model="confirmTermOfServ">
          Я принимаю <span class="link" @click.prevent="goToTermsServices">условия обслуживания "название компании"</span>
        </ui-checkbox>
      </div>

      <ui-button>
        Зарегистрироваться
      </ui-button>
    </ui-form>

    <services-navigation />
  </ui-container>
</template>

<script setup>
  import { useRouter } from 'vue-router';

  import ServicesNavigation from '@/views/servicesForms/ServicesNavigation.vue';
  import useRegistration from './useRegistration.js';

  const router = useRouter();

  const goToTermsServices = () => {
    let route = router.resolve({ name: 'termsServices' });
    window.open(route.href, '_blank');
  }

  const {
    load,
    name,
    nameError,
    lastName,
    lastNameError,
    login,
    loginError,
    email,
    emailError,
    password,
    passwordError,
    submForm,
    confirmPas,
    confirmPasError,
    confirmTermOfServ
  } = useRegistration();
</script>

<style lang="scss">

</style>
