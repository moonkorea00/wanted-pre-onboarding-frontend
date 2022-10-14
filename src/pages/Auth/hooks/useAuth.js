import { useNavigate } from 'react-router';
import AuthApi from '../../../api/auth';
import storage from '../../../utils/Storage/storage';

const useAuth = props => {
  const navigate = useNavigate();

  // 로그인
  const handleSignUp = async () => {
    try {
      await AuthApi.signUp(props);
      navigate('/todo');
    } catch (err) {
      alert(err.response.data.message);
      throw new Error(err);
    }
  };

  // 회원가입
  const handleSignIn = async () => {
    try {
      await AuthApi.signIn(props);
      navigate('/todo');
    } catch (err) {
      alert(err.response.data.message);
      throw new Error(err);
    }
  };

  // 로그아웃
  const handleLogOut = () => {
    storage.remove('access_token');
    navigate('/');
  };

  return { handleSignUp, handleSignIn, handleLogOut };
};

export default useAuth;
