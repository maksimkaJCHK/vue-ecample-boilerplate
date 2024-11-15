<template>
  <ui-container>
    <ui-form @submit.prevent="submForm">
      <h1>Настройки пользователя</h1>

      <ui-spiner :load="load"></ui-spiner>

      <ui-info-block
        :isOpen="isError || isRespOk"
        :typeBlock="isError && 'error'"
        @close-block="closeInfoBlock"
      >
        {{ error || response.message }}
      </ui-info-block>

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
            v-model="newPas"
            :errorText="newPasError"
            typeInput="password"
            placeholder="Новый пароль"
          />
        </div>

        <div class="form-row">
          <ui-input
            v-model="confirmPas"
            :errorText="confirmPasError"
            typeInput="password"
            placeholder="Подтвердите новый пароль"
          />
        </div>
      </div>

      <div class="form-row">
        <ui-checkbox v-model="confirmTermOfServ">
          Я принимаю <span class="link" @click.prevent="goToTermsServices">условия обслуживания "название компании"</span>
        </ui-checkbox>
      </div>

      <ui-button>
        Изменить настройки
      </ui-button>
    </ui-form>
  </ui-container>
</template>

<script setup>
  import { useRouter } from 'vue-router';

  import ServicesNavigation from '@/views/servicesForms/ServicesNavigation.vue';
  import useSettings from './useSettings.js';

  const router = useRouter();

  const goToTermsServices = () => {
    const route = router.resolve({ name: 'termsServices' });
    window.open(route.href, '_blank');
  }

  const closeInfoBlock = () => {
    if (isError.value) closeError();
    if (isRespOk.value) closeIsRespOk();
  }

  const {
    error,
    isError,
    closeError,
    isRespOk,
    closeIsRespOk,
    response,
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
    newPas,
    newPasError,
    submForm,
    confirmPas,
    confirmPasError,
    confirmTermOfServ,
  } = useSettings();
</script>

<style lang="scss">

</style>
