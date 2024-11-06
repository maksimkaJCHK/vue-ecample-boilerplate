<template>
  <ui-container>
    <ui-form @submit.prevent="submForm">
      <h1>Восстановить пароль</h1>

      <div class="form-group">
        <div class="form-row restore-password-radio">
          <ui-radio
            v-model="typeInput"
            name="radio"
            value="text"
          >
            Логин
          </ui-radio>
          <ui-radio
            v-model="typeInput"
            name="radio"
            value="email"
          >
            Email
          </ui-radio>
        </div>

        <div class="form-row">
          <ui-input
            v-model="textInput"
            :typeInput="typeInput"
            :placeholder="placeholder"
            :errorText="errorObj.errorText"
          />
        </div>
      </div>

      <ui-button>
        Восстановить пароль
      </ui-button>
    </ui-form>

    <services-navigation />
  </ui-container>
</template>

<script setup>
  import { ref, computed } from 'vue';
  import ServicesNavigation from '@/views/servicesForms/ServicesNavigation.vue';
  import { validateLogin, validateEmail } from '@/views/servicesForms/typeValidate.js';

  const isValidate = ref(false);

  const typeInput = ref('text');
  const textInput = ref('');

  const isSendForm = ref(false);

  const placeholder = computed(() => {
    if (typeInput.value === 'text') return 'Введите логин';

    return 'Введите email'
  });

  const errorObj = computed(() => {
    let errorText = '';
    let isError = true;

    if (typeInput.value === 'text' && isValidate.value) {
      const { errorText, isError } = validateLogin(textInput.value);

      return { errorText, isError };
    }

    if (typeInput.value === 'email' && isValidate.value) {
      const { errorText, isError } = validateEmail(textInput.value);

      return { errorText, isError };
    }

    return {
      errorText,
      isError
    };
  });

  const submForm = () => {
    isValidate.value = true;

    if (errorObj.value.isError) {
      console.log('болт');
    } else {
      console.log('Все заебок, можно отправлять');
    }
  }
</script>

<style lang="scss">
  .restore-password {
    &-radio {
      display: flex;
      flex-wrap: wrap;
      gap: 0 10px;
    }
  }
</style>
