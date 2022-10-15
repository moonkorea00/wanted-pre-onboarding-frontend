import TodoLayout from '../components/todo/TodoLayout';
import TodoList from '../components/todo/TodoList';
import useTitle from '../hooks/common/useTitle';

const Todo = () => {
  useTitle('Todo');

  return (
    <TodoLayout>
      <TodoList />
    </TodoLayout>
  );
};

export default Todo;
