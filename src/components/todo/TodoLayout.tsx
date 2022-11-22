import styled from 'styled-components';

interface IProps {
  children: React.ReactNode;
}

const TodoLayout = ({ children }: IProps) => {
  return <TodoTemplate>{children}</TodoTemplate>;
};

const TodoTemplate = styled.main`
  display: flex;
  width: 50vw;
  min-width: 800px;
  height: 77vh;
  margin: 6vh auto;
  border: 1px solid black;
  background-color: #fafafa;
  overflow: hidden;
`;

export default TodoLayout;
