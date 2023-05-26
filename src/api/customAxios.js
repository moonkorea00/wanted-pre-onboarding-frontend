import axios from 'axios';
import { BASE_URL } from '../config';
import storage from '../utils/Storage/storage';

const clientApi = axios.create({
  baseURL: BASE_URL,
});

clientApi.interceptors.request.use(
  config => {
    const access_token = storage.get('access_token');
    if (access_token) {
      config.headers.Authorization = 'Bearer ' + access_token;
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

clientApi.interceptors.response.use(
  res => res,
  err => {
    return Promise.reject(err);
  }
);

export default clientApi;
