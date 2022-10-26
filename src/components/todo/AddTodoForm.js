import styled from 'styled-components';
import { css } from 'styled-components';
import useTodo from '../../hooks/todo/useTodo';
import useInputs from '../../hooks/common/useInputs';

const AddTodoForm = ({ todos, setTodos }) => {
  const [{ todo }, handleChange] = useInputs({ todo: '' });
  const { handleCreateTodo } = useTodo();

  return (
    <Form>
      <TodoInput
        type="text"
        placeholder="Todo 추가하기 ..."
        name="todo"
        value={todo}
        onChange={handleChange}
        todos={todos}
        autoFocus
      />
      <AddTodoButton
        onClick={e => {
          e.preventDefault();
          handleCreateTodo({ todo }, setTodos);
        }}
        disabled={!todo}
        todo={todo}
      >
        추가
      </AddTodoButton>
    </Form>
  );
};

const Form = styled.form`
  ${({ theme }) => theme.flexCustom(null, 'space-between', null)}
  margin-left: 3vw;
  border-bottom: 1px solid black;
`;

const TodoInput = styled.input`
  width: 100%;
  height: 4vh;
  font-size: 15px;
  border: none;
  background-color: inherit;
  outline: none;
`;

const AddTodoButton = styled.button`
  min-width: 40px;
  width: 60px;
  font-size: 15px;
  font-weight: 900;
  color: black;
  background-color: rgb(235, 235, 235);
  border: none;
  letter-spacing: 2px;
  opacity: 0.7;
  cursor: ${({ todo }) => todo && 'pointer'};

  &:hover {
    opacity: 1;
  }
`;

export default AddTodoForm;
