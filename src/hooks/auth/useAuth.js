import { useNavigate } from 'react-router';
import AuthApi from '../../api/auth';
import storage from '../../utils/Storage/storage';
import { ROUTES } from '../../Router';

const useAuth = authInputs => {
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      const res = await AuthApi.signUp(authInputs);
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
