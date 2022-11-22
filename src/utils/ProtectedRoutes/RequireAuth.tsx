import { Outlet, Navigate } from 'react-router-dom';
import storage from '../Storage/storage';

interface requiredAuthProps {
  isAuthRequired: boolean;
  redirectUrl: string;
}

const RequireAuth = ({ isAuthRequired, redirectUrl }: requiredAuthProps) => {
  const token = storage.get('access_token');

  return isAuthRequired === (token !== null) ? (
    <Outlet />
  ) : (
    <Navigate to={redirectUrl} replace />
  );
};

export default RequireAuth;
