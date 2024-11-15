import { ref } from 'vue'
import API from '@/API/API.js';
import { useAuthStore } from '@/stores/useAuthStore.js';

const useAPI = ({
  method = 'get',
  url,
}) => {
  const load = ref(false);
  const error = ref(null);
  const isError = ref(false);
  const isRespOk= ref(false);
  const response = ref(null);
  const servResp = ref(null);
  const store = useAuthStore();

  let config = {
    method,
    url,
  }

  if (store.token) config = {
    ...config,
    headers: {
      "Authorization": `Bearer ${store.token}`
    }
  }

  const closeError = () => {
    isError.value = false;
  }

  const openError = () => {
    isError.value = true;
  }

  const closeIsRespOk = () => {
    isRespOk.value = false;
  }

  const openIsRespOk= () => {
    isRespOk.value = true;
  }

  const request = async (params = {}) => {
    if (method !== 'get' && Object.keys(params).length) {
      config = {
        ...config,
        data: params,
      }
    }

    if (method === 'get' && Object.keys(params).length) {
      config = {
        ...config,
        params,
      }
    }

    try {
      load.value = true;

      const resp = await API(config);
      const { data, ...servicesResp } = resp;

      response.value = data;
      servResp.value = servicesResp;
      error.value = null;

      openIsRespOk();
      closeError();
    } catch (er) {
      const { data, ...servicesResponse } = er.response;

      error.value = data.message;
      servResp.value = servicesResponse;

      openError();
      closeIsRespOk();
    } finally {
      load.value = false;
    }

    if (servResp.value.status === 401) store.logOut();
  }

  return {
    load,
    error,
    isError,
    request,
    isRespOk,
    closeIsRespOk,
    response,
    closeError,
    openError,
    servResp
  }
}

export default useAPI;