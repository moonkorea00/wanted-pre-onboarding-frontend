import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Auth from './pages/Auth';

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
