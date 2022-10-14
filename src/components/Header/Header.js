import logo from '../../assets/logo.svg';
import styled from 'styled-components';
import { useNavigate } from 'react-router';

const Header = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('user_token');

  const Logout = () => {
    localStorage.clear();
    navigate('/');
  };
  
  return (
    <HeaderContainer>
      <Title
        onClick={() => {
          navigate('/');
        }}
      >
        wanted: 프리온보딩
      </Title>
      <Logo src={logo} alt="react-logo" />
      {isLoggedIn && <LogoutButton onClick={Logout}>로그아웃</LogoutButton>}
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

const LogoutButton = styled.button`
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
