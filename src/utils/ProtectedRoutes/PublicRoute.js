import { Navigate, Outlet } from 'react-router-dom';
import storage from '../Storage/storage';
import { ROUTES } from '../../Router';

const PublicRoute = () => {
  return storage.get('access_token') ? (
    <Navigate to={ROUTES.todo} replace />
  ) : (
    <Outlet />
  );
};

export default PublicRoute;
