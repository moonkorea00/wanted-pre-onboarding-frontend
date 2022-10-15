import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/common/Header';
import Auth from './pages/Auth';
import Todo from './pages/Todo';
import AuthenticatedRoute from './utils/ProtectedRoutes/AuthenticatedRoute';
import UnauthenticatedRoute from './utils/ProtectedRoutes/UnauthenticatedRoute';
import NotFound from './pages/NotFound';

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route element={<UnauthenticatedRoute />}>
          <Route path={ROUTES.auth} element={<Auth />} />
        </Route>
        <Route element={<AuthenticatedRoute />}>
          <Route path={ROUTES.todo} element={<Todo />} />
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
