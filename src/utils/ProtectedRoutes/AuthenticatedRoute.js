import { Navigate, Outlet } from 'react-router-dom';
import storage from '../Storage/storage';

const AuthenticatedRoute = () => {
  return storage.get('access_token') ? <Outlet /> : <Navigate to="/" replace />;
};

export default AuthenticatedRoute;
