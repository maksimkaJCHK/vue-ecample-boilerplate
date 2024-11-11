import { computed } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { bUrlToAddr } from '@/helpers/helpers.js';

import HomeView from '../views/HomeView.vue';
import NewsCardView from '../views/NewsCardView.vue';
import PaleteView from '../views/PaleteView.vue';

// Служебные формы
import Auth from '@/views/servicesForms/auth/Auth.vue';
import RestorePassword from '@/views/servicesForms/restore-password/RestorePassword.vue';
import Registration from '@/views/servicesForms/registration/Registration.vue';
// Служебные страницы
import NotFound from '@/views/services/NotFound.vue';
import TermsServices from '@/views/services/TermsServices.vue';

import { useAuthStore } from '@/stores/useAuthStore.js';
import { storeToRefs } from 'pinia';
import { useRouter, useRoute } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: "Главная страница",
        template: 'base',
        isAuth: true
      },
    },
    // Формы регистрации и прочее
    {
      path: '/auth',
      name: 'auth',
      component: Auth,
      meta: {
        title: "Войти",
        template: 'auth',
        isAuth: false,
        isRegForm: true
      },
    },
    {
      path: '/restore-password',
      name: 'restorePassword',
      component: RestorePassword,
      meta: {
        title: "Восстановить пароль",
        template: 'auth',
        isAuth: false,
        isRegForm: true
      },
    },
    {
      path: '/registration',
      name: 'registration',
      component: Registration,
      meta: {
        title: "Регистрация",
        template: 'auth',
        isAuth: false,
        isRegForm: true
      },
    },
    {
      path: '/terms-services',
      name: 'termsServices',
      component: TermsServices,
      meta: {
        title: "Условия обслуживания",
        template: 'auth',
        isAuth: false
      },
    },
    // Остальные стрнаицы
    {
      path: '/about',
      name: 'about',
      meta: {
        title: "Страница описания",
        template: 'base',
        isAuth: false
      },
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/news/:id',
      name: 'newsCard',
      component: NewsCardView,
      meta: {
        title: "Страница описания",
        template: 'base',
        isAuth: false
      },
    },
    {
      path: '/palete',
      name: 'palete',
      component: PaleteView,
      meta: {
        title: "Цветовая тема",
        template: 'base',
        isAuth: false
      },
    },
    { 
      path: '/404',
      name: '404',
      meta: {
        title: "Страница не найдена",
        template: 'base',
        isAuth: false
      },
      component: NotFound,
    },
    {
      path: "/:catchAll(.*)",
      name: "NotFound",
      redirect: '/404'
    }
  ]
});

router.beforeEach((to, from, next) => {
  const siteName = import.meta.env.VITE_NAME_SITE || 'Site title';

  document.title = to.meta.title
    ? `${siteName} | ${to.meta.title}`
    : siteName;

  window.scrollTo(0, 0);

  next();
});

router.afterEach((to, from) => {
  const storeAuth = useAuthStore();
  const { isAuth } = storeToRefs(storeAuth);
  const router = useRouter();
  const route = useRoute();
  const isTempAuth = computed(() => route.meta.isAuth);
  const isRegForm = computed(() => route.meta.isRegForm);

  if (!isAuth.value && isTempAuth.value) router.push({
    name: 'auth',
    query: {
      from: bUrlToAddr(to.fullPath)
    }
  });

  if (isAuth.value && isRegForm.value) router.push(from.fullPath);
});

export default router
