import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
//pinia
import { useUserStore } from '@/store/user'


const service = axios.create();

// Request interceptors
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // do something
    const userStore = useUserStore();
    let token: string = userStore.token;
    if (token) {
      if (config && config.headers) { config.headers['Authorization'] = token; }
    }

    return config;
  },
  (error: any) => {
    Promise.reject(error);
  }
);

// Response interceptors
service.interceptors.response.use(
  async (response: AxiosResponse) => {
    // do something
  },
  (error: any) => {
    // do something
    return Promise.reject(error);
  }
);

export default service;
