import styled from 'styled-components';
import { css } from 'styled-components';
import { SetStateAction, useEffect } from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import useToggle from '../../hooks/common/useToggle';
import useTodo from '../../hooks/todo/useTodo';
import useInputs from '../../hooks/common/useInputs';

interface Iprops {
  id: number;
  todo: string;
  isCompleted: boolean;
}

interface TodoItemProps {
  todoProps: {
    id: number;
    todo: string;
    isCompleted: boolean;
  };
  setTodos: React.Dispatch<SetStateAction<Iprops[]>>;
}

type UpdateTodoProps = [
  { upDatedTodo: string },
  React.ChangeEventHandler<HTMLInputElement>,
  () => void
];

const TodoItem = ({
  todoProps: { id, todo, isCompleted },
  setTodos,
}: TodoItemProps) => {
  const { handleUpdateTodo, handleUpdateIsCompleted, handleDeleteTodo } =
    useTodo();

  const [{ upDatedTodo }, handleChange, reset] = useInputs({
    upDatedTodo: '',
  }) as UpdateTodoProps;
  
  const [isEditMode, toggleMode] = useToggle();
  const [isChecked, toggleChecked] = useToggle(isCompleted);

  const onUpdateTodo = () => {
    if (upDatedTodo)
      handleUpdateTodo({ id, todo: upDatedTodo, isCompleted }, setTodos);
    else return;
    toggleMode();
  };

  useEffect(() => {
    if (isEditMode) return reset();
  }, [isEditMode]);

  return (
    <TodoItemWrapper>
      <Checkbox
        type="checkbox"
        checked={isChecked}
        onChange={toggleChecked}
        onClick={() =>
          handleUpdateIsCompleted(
            { id, todo, isCompleted: !isChecked },
            setTodos
          )
        }
      />
      <TodoWrapper>
        {isEditMode ? (
          <EditTodoInput
            type="text"
            name="upDatedTodo"
            defaultValue={todo}
            onChange={handleChange}
            autoFocus
          />
        ) : (
          <TodoText isChecked={isChecked}>{todo}</TodoText>
        )}
        <Flexbox>
          {isEditMode ? (
            <>
              <SaveEditButton onClick={onUpdateTodo}>변경</SaveEditButton>
              <DiscardEditButton onClick={toggleMode}>취소</DiscardEditButton>
            </>
          ) : (
            <AiFillEdit onClick={toggleMode} />
          )}
          <AiFillDelete onClick={() => handleDeleteTodo(id, setTodos)} />
        </Flexbox>
      </TodoWrapper>
    </TodoItemWrapper>
  );
};

const TodoItemWrapper = styled.div`
  ${({ theme }) => theme.flexDefault}
  border-bottom: 1px solid black;

  ${({ isChecked }: { isChecked: boolean }) =>
    isChecked &&
    css`
      background-color: rgb(233, 233, 233);
    `}
`;

const TodoWrapper = styled.div`
  ${({ theme }) => theme.flexDefault};
  justify-content: space-between;
  width: 100%;
  height: 4vh;
  padding: 2.5vh 0;
  list-style: none;
  white-space: nowrap;
  overflow: hidden;
`;

const TodoText = styled.div`
  width: 90%;
  overflow: hidden;
  font-size: 16px;

  ${({ isChecked }: { isChecked: boolean }) =>
    isChecked &&
    css`
      text-decoration: line-through;
    `}
`;

const EditTodoInput = styled.input`
  width: 100%;
  font-size: 16px;
  background-color: inherit;
  border: none;
  outline: none;
`;

const Checkbox = styled.input`
  height: 15px;
  margin-right: 0.6vw;
  cursor: pointer;
`;

const Flexbox = styled.div`
  display: flex;
  font-size: 18px;
  cursor: pointer;
`;

const SaveEditButton = styled.div`
  margin-right: 8px;
  font-size: 14px;
  color: rgb(114, 114, 114);

  &:hover {
    color: black;
    font-weight: 600;
  }
`;

const DiscardEditButton = styled(SaveEditButton)``;

export default TodoItem;
