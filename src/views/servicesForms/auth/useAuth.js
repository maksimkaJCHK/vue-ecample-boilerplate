import { ref, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';

import useAPI from '@/hooks/useAPI.js';
import { bUrl } from '@/helpers/helpers.js';
import { useAuthStore } from '@/stores/useAuthStore.js';

import { validateLogin, validatePassword } from '@/views/servicesForms/typeValidate.js';
import { typeValidate } from '@/views/servicesForms/helpers.js';

const useAuth = () => {
  const login = ref('');
  const loginError = ref('');
  const password = ref('');
  const passwordError = ref('');

  const isValidate = ref(false);
  const isSendForm = ref(false);

  const router = useRouter();
  const route = useRoute();

  const {
    load,
    error,
    isError,
    response,
    request,
    closeError,
  } = useAPI({ method: 'post', url: '/auth' });

  const { cUserInfo } = useAuthStore();

  const validLogin = () => typeValidate({
    input: login,
    error: loginError,
    validateFunc: validateLogin
  });

  const validPassword = () => typeValidate({
    input: password,
    error: passwordError,
    validateFunc: validatePassword
  });

  const submForm = async () => {
    isSendForm.value = false;
    isValidate.value = true;

    const { isValid: isValidLogin } = validLogin(); 
    const { isValid: isValidPassword } = validPassword();

    if (isValidLogin && isValidPassword) {
      await request({
        login: login.value,
        password: password.value
      });

      if (!error.value) {
        cUserInfo(response.value);

        const url = route.query.from ? bUrl(route.query.from) : '/';
        router.push(url);
      }
    } else {
      console.log('Болт, отправить не получится');
    }
  }

  watch(login, () => {
    if (isValidate.value) validLogin(); 
  });

  watch(password, () => {
    if (isValidate.value) validPassword();
  });

  return {
    load,
    error,
    isError,
    login,
    password,
    loginError,
    passwordError,
    submForm,
    closeError
  }
}

export default useAuth;