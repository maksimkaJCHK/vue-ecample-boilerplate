import axios from 'axios';

const baseUrl = import.meta.env.VITE_BASE_URL;

const API = axios.create({
  baseURL: baseUrl,
});

export default API;