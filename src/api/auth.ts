import clientApi from './customAxios';
import { END_POINT } from '../config';

interface Props {
  email?: string;
  password?: string;
}

const AuthApi = {
  signUp: ({ email, password }: Props) => {
    return clientApi.post(END_POINT.SIGN_UP, { email, password });
  },
  signIn: ({ email, password }: Props) => {
    return clientApi.post(END_POINT.SIGN_IN, { email, password });
  },
};

export default AuthApi;
