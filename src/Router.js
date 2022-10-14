import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Auth from './pages/Auth/Auth';
import Todo from './pages/Todo/Todo';

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/todo" element={<Todo />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
