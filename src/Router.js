import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/common/Header';
import Auth from './pages/Auth';
import PrivateRoute from './utils/ProtectedRoutes/PrivateRoute';
import PublicRoute from './utils/ProtectedRoutes/PublicRoute';
import NotFound from './pages/NotFound';

const Todo = lazy(() => import('./pages/Todo'));

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path={ROUTES.auth} element={<Auth />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route
            path={ROUTES.todo}
            element={
              <Suspense fallback={<></>}>
                <Todo />
              </Suspense>
            }
          />
        </Route>
        <Route path="/page-not-found" element={<NotFound />} />
        <Route path="*" element={<Navigate to="page-not-found" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

export const ROUTES = {
  auth: '/',
  todo: '/todo',
};
