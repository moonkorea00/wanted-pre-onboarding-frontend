import { useNavigate } from 'react-router';
import styled from 'styled-components';
import useTitle from '../hooks/common/useTitle';
import ReactLogo from '../assets/ReactLogo.svg';

const NotFound = () => {
  const navigate = useNavigate();
  useTitle('404 페이지를 찾을 수 없습니다');

  return (
    <NotFoundTemplate>
      <Logo src={ReactLogo} />
      <h1>페이지를 찾을 수 없습니다.</h1>
      <RedirectButton
        onClick={() => {
          navigate('/', { replace: true });
        }}
      >
        메인으로 돌아가기
      </RedirectButton>
    </NotFoundTemplate>
  );
};
const NotFoundTemplate = styled.main`
  ${({ theme }) => theme.flexCustom('column', 'center', 'center')};
  width: 100vw;
  height: 90vh;
`;

const Logo = styled.img`
  height: 30vh;
  width: 18vw;
  margin-bottom: 5vh;
`;

const RedirectButton = styled.button`
  padding: 0.8vh 1vw;
  margin-top: 1vh;
  font-weight: 600;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  
  &:hover {
    background-color: rgb(235, 235, 235);
  }
`;

export default NotFound;
