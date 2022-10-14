import { useNavigate } from 'react-router';
import AuthApi from '../../../api/Auth';
import storage from '../../../utils/storage';

const useAuth = props => {
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      await AuthApi.signUp(props);
      navigate('/todo');
    } catch (err) {
      alert(err.response.data.message);
      throw new Error(err);
    }
  };

  const handleSignIn = async () => {
    try {
      await AuthApi.signIn(props);
      navigate('/todo');
    } catch (err) {
      alert(err.response.data.message);
      throw new Error(err);
    }
  };

  const handleLogOut = () => {
    storage.remove('access_token');
    navigate('/');
  };

  return { handleSignUp, handleSignIn, handleLogOut };
};

export default useAuth;
