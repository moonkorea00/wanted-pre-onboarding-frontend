import clientApi from './customAxios';
import { END_POINT } from '../config';

const AuthApi = {
  signUp: ({ email, password }) => {
    return clientApi.post(END_POINT.signUp, { email, password });
  },
  signIn: ({ email, password }) => {
    return clientApi.post(END_POINT.signIn, { email, password });
  },
};

export default AuthApi;
