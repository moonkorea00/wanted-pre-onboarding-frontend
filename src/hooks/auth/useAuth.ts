import { useNavigate } from 'react-router';
import AuthApi from '../../api/auth';
import storage from '../../utils/Storage/storage';
import { ROUTES } from '../../Router';

interface authInputProps {
  email: string;
  password: string;
}
const useAuth = (authInputs: authInputProps) => {
  // const useAuth = ({ email, password }: authInputProps) => {
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      const res = await AuthApi.signUp(authInputs);
      // const res = await AuthApi.signUp({ email, password });
      storage.set('access_token', res.data.access_token);
      navigate(ROUTES.todo);
    } catch (err) {
      alert(err.response.data.message);
      throw new Error(err);
    }
  };

  const handleSignIn = async () => {
    try {
      const res = await AuthApi.signIn(authInputs);
      // const res = await AuthApi.signIn({ email, password });
      storage.set('access_token', res.data.access_token);
      navigate(ROUTES.todo);
    } catch (err) {
      alert(err.response.data.message);
      throw new Error(err);
    }
  };

  const handleLogOut = () => {
    storage.remove('access_token');
    navigate(ROUTES.auth);
  };

  return { handleSignUp, handleSignIn, handleLogOut };
};

export default useAuth;
