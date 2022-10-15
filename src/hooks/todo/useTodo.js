import { useState, useEffect } from 'react';
import TodoApi from '../../api/todo';

const useTodo = () => {
  const [todos, setTodos] = useState([]);

  const FAILED_REQUEST = '문제가 발생했습니다. 다시 시도해 주세요';

  const handleGetTodos = async () => {
    try {
      const res = await TodoApi.getTodos();
      setTodos(res.data);
    } catch (err) {
      throw new Error(err);
    }
  };

  const handleCreateTodo = async todo => {
    try {
      await TodoApi.createTodo(todo);
    } catch (err) {
      alert(FAILED_REQUEST);
      throw new Error(err);
    }
  };

  const handleUpdateTodo = async (id, todo, isCompleted) => {
    try {
      await TodoApi.updateTodo(id, todo, isCompleted);
    } catch (err) {
      alert(FAILED_REQUEST);
      throw new Error(err);
    }
  };

  const handleUpdateIsCompleted = async (id, todo, isCompleted) => {
    try {
      await TodoApi.updateTodo(id, todo, !isCompleted);
    } catch (err) {
      alert(FAILED_REQUEST);
      throw new Error(err);
    }
  };

  const handleDeleteTodo = async id => {
    try {
      if (window.confirm('삭제하시겠습니까?')) {
        await TodoApi.deleteTodo(id);
        console.log('good')
        setTodos(prev => prev.filter(item => item.id !== id));
        console.log('nogood')
      } else return;
    } catch (err) {
      alert(FAILED_REQUEST);
      throw new Error(err);
    }
  };

  useEffect(() => {
    handleGetTodos();
  }, []);

  return {
    todos,
    handleCreateTodo,
    handleGetTodos,
    handleUpdateTodo,
    handleUpdateIsCompleted,
    handleDeleteTodo,
  };
};

export default useTodo;
