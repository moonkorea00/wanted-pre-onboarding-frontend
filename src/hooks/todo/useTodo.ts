import React from 'react';
import TodoApi from '../../api/todo';

interface TodoProps {
  id: number;
  todo: string;
  isCompleted: boolean;
}

const useTodo = () => {
  const FAILED_REQUEST = '문제가 발생했습니다. 다시 시도해 주세요';

  const handleGetTodos = async (
    setTodos: React.Dispatch<React.SetStateAction<TodoProps[]>>
  ) => {
    try {
      const res = await TodoApi.getTodos();
      setTodos(res.data);
    } catch (err) {
      throw new Error(err);
    }
  };

  const handleCreateTodo = async (
    { todo }: { todo: string },
    setTodos: React.Dispatch<React.SetStateAction<TodoProps[]>>
  ) => {
    try {
      const res = await TodoApi.createTodo({ todo });
      setTodos(prev => [...prev, res.data]);
    } catch (err) {
      alert(FAILED_REQUEST);
      throw new Error(err);
    }
  };

  const handleUpdateTodo = async (
    { id, todo, isCompleted }: TodoProps,
    setTodos: React.Dispatch<React.SetStateAction<TodoProps[]>>
  ) => {
    try {
      const res = await TodoApi.updateTodo({ id, todo, isCompleted });
      setTodos(prev => prev.map(todo => (todo.id === id ? res.data : todo)));
    } catch (err) {
      alert(FAILED_REQUEST);
      throw new Error(err);
    }
  };

  const handleUpdateIsTodoCompleted = async (
    { id, todo, isCompleted }: TodoProps,
    setTodos: React.Dispatch<React.SetStateAction<TodoProps[]>>
  ) => {
    try {
      const res = await TodoApi.updateTodo({ id, todo, isCompleted });
      setTodos(prev => prev.map(todo => (todo.id === id ? res.data : todo)));
    } catch (err) {
      alert(FAILED_REQUEST);
      throw new Error(err);
    }
  };

  const handleDeleteTodo = async (
    id: number,
    setTodos: React.Dispatch<React.SetStateAction<TodoProps[]>>
  ) => {
    try {
      if (window.confirm('삭제하시겠습니까?')) {
        await TodoApi.deleteTodo(id);
        setTodos(prev => prev.filter(todo => todo.id !== id));
      } else return;
    } catch (err) {
      alert(FAILED_REQUEST);
      throw new Error(err);
    }
  };

  return {
    handleCreateTodo,
    handleGetTodos,
    handleUpdateTodo,
    handleUpdateIsTodoCompleted,
    handleDeleteTodo,
  };
};

export default useTodo;
