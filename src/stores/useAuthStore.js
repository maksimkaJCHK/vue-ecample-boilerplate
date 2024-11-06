import { ref, onBeforeMount } from 'vue'
import { defineStore } from 'pinia'

import { useRouter, useRoute } from 'vue-router';
import { bUrlToAddr } from '@/helpers/helpers.js';

export const useAuthStore = defineStore('auth', () => {
  const isAuth = ref(false);
  const token = ref(null);
  const name = ref(null);
  const lastName = ref(null);
  const login = ref(null);
  const email = ref(null);
  const password = ref(null);

  const router = useRouter();
  const route = useRoute();

  const getLSUserInfo = () => {
    const params = JSON.parse(localStorage.getItem('userInfo'));

    if (params) {
      const {
        lsToken,
        lsName,
        lsLastName,
        lsLogin,
        lsEmail,
        lsPassword
      } = params;

      isAuth.value = true;
      token.value = lsToken;
      name.value = lsName;
      lastName.value = lsLastName;
      login.value = lsLogin;
      email.value = lsEmail;
      password.value = lsPassword;
    }
  };

  const setLSUserInfo = ({
    token,
    name,
    lastName,
    login,
    email,
    password,
  }) => {
    localStorage.setItem('userInfo', JSON.stringify({
      lsToken: token,
      lsName: name,
      lsLastName: lastName,
      lsLogin: login,
      lsEmail: email,
      lsPassword: password
    }));
  };

  const cUserInfo = ({
    cToken,
    cName,
    cLastName,
    cLogin,
    cEmail,
    cPassword,
  }) => {
    isAuth.value = true;
    token.value = cToken;
    name.value = cName;
    lastName.value = cLastName;
    login.value = cLogin;
    email.value = cEmail;
    password.value = cPassword;

    setLSUserInfo({
      token: cToken,
      name: cName,
      lastName: cLastName,
      login: cLogin,
      email: cEmail,
      password: cPassword,
    })
  };

  const logOut = () => {
    isAuth.value = false;
    token.value = null;
    name.value = null;
    lastName.value = null;
    login.value = null;
    email.value = null;
    password.value = null;

    localStorage.clear();

    router.push({
      name: 'auth',
      query: {
        from: bUrlToAddr(route.path)
      }
    });
  };

  onBeforeMount(getLSUserInfo);

  return {
    isAuth,
    token,
    name,
    lastName,
    login,
    email,
    password,
    cUserInfo,
    logOut
  }
})
