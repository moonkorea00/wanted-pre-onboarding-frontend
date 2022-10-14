import storage from '../utils/storage';
import clientApi from './axios';
import { END_POINT } from '../config';

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
