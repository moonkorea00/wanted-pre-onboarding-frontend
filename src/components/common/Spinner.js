import styled from 'styled-components';

const Spinner = () => {
  return (
    <SpinnerContainer>
      <Circle />
    </SpinnerContainer>
  );
};

const SpinnerContainer = styled.div`
  ${({ theme }) => theme.flexCustom(null, 'center', 'center')}
  width: 100%;
  height: 80%;
`;

const Circle = styled.div`
  border: 10px solid #32967f;
  border-top: 10px solid #fafafa;
  border-radius: 50%;
  width: 70px;
  height: 70px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Spinner;
