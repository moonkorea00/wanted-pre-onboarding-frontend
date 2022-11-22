import clientApi from './customAxios';
import { END_POINT } from '../config';
interface Props {
  email?: string;
  password?: string;
}
const AuthApi = {
  signUp: ({ email, password }: Props) => {
    return clientApi.post(END_POINT.signUp, { email, password });
  },
  signIn: ({ email, password }: Props) => {
    return clientApi.post(END_POINT.signIn, { email, password });
  },
};

export default AuthApi;
