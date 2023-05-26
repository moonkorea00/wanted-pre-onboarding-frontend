import { Outlet, Navigate } from 'react-router-dom';
import storage from '../Storage/storage';

const RequireAuth = ({ isAuthRequired, redirectUrl }) => {
  const token = storage.get('access_token');

  return isAuthRequired === (token !== null) ? (
    <Outlet />
  ) : (
    <Navigate to={redirectUrl} replace />
  );
};

export default RequireAuth;