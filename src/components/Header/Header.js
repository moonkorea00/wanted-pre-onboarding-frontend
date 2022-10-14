import logo from '../../assets/logo.svg';
import styled from 'styled-components';
import storage from '../../utils/storage';

const Header = () => {

  return (
    <HeaderContainer>
      <Title>wanted: 프리온보딩</Title>
      <Logo src={logo} alt="react-logo" />
      {storage.get('access_token') && (
        <SignOutButton onClick={storage.remove('access_token')}>
          로그아웃
        </SignOutButton>
      )}
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  ${({ theme }) => theme.flexCustom(null, 'center', 'center')}
  width:100vw;
  background-color: black;
  border-bottom: 1px solid black;
`;

const Title = styled.h1`
  font-size: 44px;
  color: white;
  letter-spacing: 3px;
  cursor: pointer;
`;

const Logo = styled.img`
  height: 10vh;
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    animation: App-logo-spin infinite 23s linear;
  }
  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const SignOutButton = styled.button`
  position: absolute;
  right: 0;
  margin-right: 3vw;
  padding: 0.6vh 0.6vw;
  font-size: 20px;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 7px;
  background-color: rgb(50, 150, 127);
  cursor: pointer;

  &:hover {
    background-color: rgb(40, 140, 117);
  }
`;
export default Header;
