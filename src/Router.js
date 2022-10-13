import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Auth from './pages/Auth';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
