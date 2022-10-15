import { Navigate, Outlet } from 'react-router-dom';
import storage from '../Storage/storage';
import { ROUTES } from '../../Router';

const AuthenticatedRoute = () => {
  return storage.get('access_token') ? <Outlet /> : <Navigate to={ROUTES.auth} replace />;
};

export default AuthenticatedRoute;
