import styled from 'styled-components';
import { useEffect } from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import useToggle from '../../hooks/common/useToggle';
import useTodo from '../../hooks/todo/useTodo';
import useInputs from '../../hooks/common/useInputs';

const TodoItem = props => {
  const { id, todo, isCompleted } = props.todo;
  const { handleUpdateTodo, handleUpdateIsCompleted, handleDeleteTodo } =
    useTodo();
  const [{ upDatedTodo }, handleChange, reset] = useInputs({ upDatedTodo: '' });
  const [isEditMode, toggleMode] = useToggle();
  const [isChecked, toggleChecked] = useToggle(isCompleted);

  const onUpdateTodo = () => {
    if (upDatedTodo) handleUpdateTodo({ id, todo: upDatedTodo, isCompleted });
    return toggleMode();
  };

  useEffect(() => {
    isEditMode && reset();
  }, [isEditMode]);

  return (
    <TodoItemWrapper>
      <Checkbox
        type="checkbox"
        checked={isChecked}
        onChange={toggleChecked}
        onClick={() =>
          handleUpdateIsCompleted({ id, todo, isCompleted: !isChecked })
        }
      />
      <TodoWrapper>
        {isEditMode ? (
          <EditTodoInput
            type="text"
            name="upDatedTodo"
            value={upDatedTodo || todo}
            onChange={handleChange}
            autoFocus
          />
        ) : (
          <TodoText>{todo}</TodoText>
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
          <AiFillDelete onClick={() => handleDeleteTodo(id)} />
        </Flexbox>
      </TodoWrapper>
    </TodoItemWrapper>
  );
};

const TodoItemWrapper = styled.div`
  ${({ theme }) => theme.flexCustom(null, null, 'center')}
  border-bottom: 1px solid black;
`;

const TodoWrapper = styled.div`
  ${({ theme }) => theme.flexCustom(null, 'space-between', 'center')};
  width: 100%;
  height: 4vh;
  padding: 2.5vh 0;
  list-style: none;
  white-space: nowrap;
  overflow: hidden;
`;

const TodoText = styled.div`
  width: 80%;
  overflow: hidden;
  font-size: 16px;
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
