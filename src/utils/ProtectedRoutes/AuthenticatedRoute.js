import { Navigate, Outlet } from 'react-router-dom';
import storage from '../Storage/storage';
import { ROUTES } from '../../Router';

// 로그인 여부에 따른 리다이렉트 처리
const AuthenticatedRoute = () => {
  return storage.get('access_token') ? <Outlet /> : <Navigate to={ROUTES.auth} replace />;
};

export default AuthenticatedRoute;
