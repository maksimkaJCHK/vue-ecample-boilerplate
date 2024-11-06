import { ref, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';

import { useAuthStore } from '@/stores/useAuthStore.js';
import { bUrl } from '@/helpers/helpers.js';
import useAPI from '@/hooks/useAPI.js';

import {
  validateLogin,
  validatePassword,
  validateName,
  validateLastName,
  validateConfirmPas,
  validateEmail
} from '@/views/servicesForms/typeValidate.js';

import { typeValidate } from '@/views/servicesForms/helpers.js';

const useAuth = () => {
  const name = ref('');
  const nameError = ref('');
  const lastName = ref('');
  const lastNameError = ref('');
  const login = ref('');
  const loginError = ref('');
  const email = ref('');
  const emailError = ref('');
  const password = ref('');
  const passwordError = ref('');
  const confirmPas = ref('');
  const confirmPasError = ref('');
  const confirmTermOfServ = ref(false);

  const isValidate = ref(false);
  const isSendForm = ref(false);

  const router = useRouter();
  const route = useRoute();

  const {
    load,
    error,
    response,
    request,
  } = useAPI({
    method: 'post',
    url: '/registration'
  });

  const typeValidate = ({
    input,
    error,
    validateFunc
  }) => {
    let isValid = true;
    error.value = '';

    const { isError, errorText } = validateFunc(input.value);

    if (isError) {
      error.value = errorText;
      isValid = !isError;
    }

    return { isValid };
  }

  const validName = () => typeValidate({
    input: name,
    error: nameError,
    validateFunc: validateName
  });

  const validLastName = () => typeValidate({
    input: lastName,
    error: lastNameError,
    validateFunc: validateLastName
  });

  const validLogin = () => typeValidate({
    input: login,
    error: loginError,
    validateFunc: validateLogin
  });

  const validEmail = () => typeValidate({
    input: email,
    error: emailError,
    validateFunc: validateEmail
  });

  const validPassword = () => typeValidate({
    input: password,
    error: passwordError,
    validateFunc: validatePassword
  });

  const validConfirmPas= () => {
    let isValid = true;
    confirmPasError.value = '';

    const { isError, errorText } = validateConfirmPas(password.value, confirmPas.value);

    if (isError) {
      confirmPasError.value = errorText;
      isValid = !isError;
    }

    return { isValid };
  };

  const submForm = async () => {
    isSendForm.value = false;
    isValidate.value = true;

    const { isValid: isValidName } = validName();
    const { isValid: isValidLastName } = validLastName();
    const { isValid: isValidLogin } = validLogin();
    const { isValid: isValidPassword } = validPassword();
    const { isValid: isValidConfirmPas } = validConfirmPas();
    const { isValid: isValidEmail } = validEmail();

    if (isValidLogin && isValidPassword && isValidName && isValidLastName && isValidConfirmPas && isValidEmail && confirmTermOfServ.value) {
      await request({
        name: name.value,
        lastName: lastName.value,
        login: login.value,
        email: email.value,
        password: password.value
      });

      if (!error.value) {
        const { cUserInfo } = useAuthStore();

        cUserInfo({
          cToken: response.value.token,
          cName: name.value,
          cLastName: lastName.value,
          cLogin: login.value,
          cEmail: email.valu,
          cPassword: password.value,
        });

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

  watch([password, confirmPas], () => {
    if (isValidate.value) {
      validPassword();
      validConfirmPas();
    }
  });

  watch(name, () => {
    if (isValidate.value) validName();
  });

  watch(lastName, () => {
    if (isValidate.value) validLastName();
  });

  watch(email, () => {
    if (isValidate.value) validEmail();
  });

  return {
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
    confirmPas,
    confirmPasError,
    submForm,
    confirmTermOfServ
  }
}

export default useAuth;