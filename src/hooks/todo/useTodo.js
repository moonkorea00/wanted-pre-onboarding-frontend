import TodoApi from '../../api/todo';

const useTodo = () => {
  const FAILED_REQUEST = '문제가 발생했습니다. 다시 시도해 주세요';

  const handleGetTodos = async setTodos => {
    try {
      const res = await TodoApi.getTodos();
      setTodos(res.data);
    } catch (err) {
      throw new Error(err);
    }
  };

  const handleCreateTodo = async ({ todo }, setTodos) => {
    try {
      const res = await TodoApi.createTodo({ todo });
      setTodos(prev => [...prev, res.data]);
    } catch (err) {
      alert(FAILED_REQUEST);
      throw new Error(err);
    }
  };

  const handleUpdateTodo = async ({ id, todo, isCompleted }, setTodos) => {
    try {
      const res = await TodoApi.updateTodo({ id, todo, isCompleted });
      setTodos(prev => prev.map(todo => (todo.id === id ? res.data : todo)));
    } catch (err) {
      alert(FAILED_REQUEST);
      throw new Error(err);
    }
  };

  const handleUpdateIsCompleted = async (
    { id, todo, isCompleted },
    setTodos
  ) => {
    try {
      const res = await TodoApi.updateTodo({ id, todo, isCompleted });
      setTodos(prev => prev.map(todo => (todo.id === id ? res.data : todo)));
    } catch (err) {
      alert(FAILED_REQUEST);
      throw new Error(err);
    }
  };

  const handleDeleteTodo = async (id, setTodos) => {
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
    handleUpdateIsCompleted,
    handleDeleteTodo,
  };
};

export default useTodo;
