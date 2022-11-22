import { useState, useEffect, Suspense, lazy } from 'react';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import Spinner from '../common/Spinner';
import useTodo from '../../hooks/todo/useTodo';

const TodoItem = lazy(() => import('./TodoItem'));
const AddTodoForm = lazy(() => import('./AddTodoForm'));

interface TodoProps {
  id: number;
  todo: string;
  isCompleted: boolean;
}

const TodoList = () => {
  const [todos, setTodos] = useState<TodoProps[]>([]);
  const { handleGetTodos } = useTodo();

  useEffect(() => {
    handleGetTodos(setTodos);
  }, []);

  return (
    <IconContext.Provider
      value={{ style: { marginRight: 15, cursor: 'pointer' } }}
    >
      <TodoListContainer>
        <Heading>Todo List</Heading>
        <Suspense fallback={<Spinner />}>
          <TodoGrid>
            {todos?.map(todo => (
              <TodoItem
                key={todo.id}
                todoProps={todo}
                setTodos={setTodos}
              />
            ))}
          </TodoGrid>
          <AddTodoForm setTodos={setTodos} />
        </Suspense>
      </TodoListContainer>
    </IconContext.Provider>
  );
};

const TodoListContainer = styled.section`
  width: 70%;
  height: 100%;
  border-right: 1px solid black;
`;

const Heading = styled.h1`
  padding: 3vh 2vw 1.5vh 2vw;
  background-color: #32967f;
  color: white;
  font-size: 40px;
  border-bottom: 1px solid black;
  letter-spacing: 1px;
  white-space: nowrap;
`;

const TodoGrid = styled.ul`
  height: 60vh;
  padding-left: 3vw;
  overflow-y: auto;
`;

export default TodoList;
