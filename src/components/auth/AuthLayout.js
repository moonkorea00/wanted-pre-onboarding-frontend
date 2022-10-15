import styled from 'styled-components';

const AuthLayout = ({ children }) => {
  return <AuthTemplate>{children}</AuthTemplate>;
};

const AuthTemplate = styled.main`
  margin: 13vh 35vw;
`;

export default AuthLayout;
