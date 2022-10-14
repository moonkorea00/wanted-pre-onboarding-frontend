import axios from 'axios';
import storage from '../utils/storage';
import { BASE_URL, END_POINT } from '../config';

const clientApi = axios.create({
  baseURL: BASE_URL,
});

clientApi.interceptors.response.use(
  res => {
    const { access_token } = res.data;
    storage.set('access_token', access_token);
    return res;
  },
  err => {
    console.log(`ERR:`, err);
    return Promise.reject(err);
  }
);

const AuthApi = {
  signUp: async ({ email, password }) => {
    return clientApi.post(END_POINT.signUp, { email, password });
  },

  signIn: async ({ email, password }) => {
    return clientApi.post(END_POINT.signIn, { email, password });
  },
};

export default AuthApi;
