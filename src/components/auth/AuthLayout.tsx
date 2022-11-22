import styled from 'styled-components';

interface Iprops {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: Iprops) => {
  return <AuthTemplate>{children}</AuthTemplate>;
};

const AuthTemplate = styled.main`
  margin: 13vh 35vw;
`;

export default AuthLayout;
