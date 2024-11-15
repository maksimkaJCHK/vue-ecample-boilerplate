import { ref, watch } from 'vue';

import { useAuthStore } from '@/stores/useAuthStore.js';
import useAPI from '@/hooks/useAPI.js';

import {
  validateLogin,
  validatePassword,
  validateName,
  validateLastName,
  validateConfirmPas,
  validateEmail,
  validateNewPas
} from '@/views/servicesForms/typeValidate.js';

import { typeValidate } from '@/views/servicesForms/helpers.js';

const useSettings = () => {
  const {
    name: nameLS,
    lastName: lastNameLS,
    login: loginLS,
    email: emailLS,
  } = useAuthStore();

  const name = ref(nameLS);
  const nameError = ref('');
  const lastName = ref(lastNameLS);
  const lastNameError = ref('');
  const login = ref(loginLS);
  const loginError = ref('');
  const email = ref(emailLS);
  const emailError = ref('');
  const password = ref('');
  const passwordError = ref('');
  const newPas = ref('');
  const newPasError = ref('');
  const confirmPas = ref('');
  const confirmPasError = ref('');
  const confirmTermOfServ = ref(false);

  const isValidate = ref(false);
  const isSendForm = ref(false);

  const {
    load,
    error,
    response,
    request,
    isError,
    closeError,
    isRespOk,
    closeIsRespOk,
  } = useAPI({
    method: 'put',
    url: '/settings'
  });

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

  const validNewPas = () => typeValidate({
    input: newPas,
    error: newPasError,
    validateFunc: validateNewPas
  });

  const validConfirmPas= () => {
    let isValid = true;
    confirmPasError.value = '';

    const { isError, errorText } = validateConfirmPas(newPas.value, confirmPas.value);

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
    const { isValid: isValidNewPas} = validNewPas();
    const { isValid: isValidConfirmPas } = validConfirmPas();
    const { isValid: isValidEmail } = validEmail();

    if (isValidLogin && isValidPassword && isValidName && isValidLastName && isValidConfirmPas && isValidEmail && isValidNewPas && confirmTermOfServ.value) {
      await request({
        name: name.value,
        lastName: lastName.value,
        login: login.value,
        email: email.value,
        password: newPas.value,
        oldPassword: password.value,
      });

      if (!error.value) {
        const { cUserInfo } = useAuthStore();

        cUserInfo({
          cToken: response.value.token,
          cName: name.value,
          cLastName: lastName.value,
          cLogin: login.value,
          cEmail: email.value,
          cPassword: newPas.value,
        });
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

  watch([newPas, confirmPas], () => {
    if (isValidate.value) {
      validNewPas();
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
    error,
    isError,
    closeError,
    response,
    isRespOk,
    closeIsRespOk,
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
    confirmPas,
    confirmPasError,
    submForm,
    confirmTermOfServ
  }
}

export default useSettings;