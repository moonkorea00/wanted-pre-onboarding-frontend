import styled from 'styled-components';

const TodoLayout = ({ children }) => {
  return <TodoTemplate>{children}</TodoTemplate>;
};

const TodoTemplate = styled.main`
  ${({ theme }) => theme.flexCustom(null, null, null)}
  width: 50vw;
  height: 77vh;
  margin: 6vh auto;
  border: 1px solid black;
  background-color: #fafafa;
  overflow: hidden;
`;

export default TodoLayout;
