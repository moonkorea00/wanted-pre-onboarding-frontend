import styled from 'styled-components';
import useTodo from '../../hooks/todo/useTodo';
import useInputs from '../../hooks/common/useInputs';

interface TodoProps {
  id: number;
  todo: string;
  isCompleted: boolean;
}

interface IProps {
  setTodos: React.Dispatch<React.SetStateAction<TodoProps[]>>;
}

type UseInputProps = [
  { todo: string },
  React.ChangeEventHandler<HTMLInputElement>,
  () => void
];

const AddTodoForm = ({ setTodos }: IProps) => {
  const [{ todo }, handleChange, reset] = useInputs({
    todo: '',
  }) as UseInputProps;
  const { handleCreateTodo } = useTodo();

  const onCreateTodoAndResetInput = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    handleCreateTodo({ todo }, setTodos);
    reset();
  };

  return (
    <Form onSubmit={onCreateTodoAndResetInput}>
      <TodoInput
        type="text"
        placeholder="Todo 추가하기 ..."
        name="todo"
        value={todo}
        onChange={handleChange}
        autoFocus
      />
      <AddTodoButton disabled={!todo} todo={todo}>
        추가
      </AddTodoButton>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  justify-content: space-between;
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
  cursor: ${({ todo }: { todo: string }) => todo && 'pointer'};

  &:hover {
    opacity: 1;
  }
`;

export default AddTodoForm;
