import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/common/Header';
import Auth from './pages/Auth';
import RequireAuth from './utils/ProtectedRoutes/RequireAuth';
import NotFound from './pages/NotFound.';

const Todo = lazy(() => import('./pages/Todo'));

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          element={
            <RequireAuth isAuthRequired={false} redirectUrl={ROUTES.TODO} />
          }
        >
          <Route path={ROUTES.AUTH} element={<Auth />} />
        </Route>
        <Route
          element={<RequireAuth isAuthRequired redirectUrl={ROUTES.AUTH} />}
        >
          <Route
            path={ROUTES.TODO}
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
  AUTH: '/',
  TODO: '/todo',
};
