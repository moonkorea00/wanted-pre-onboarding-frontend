import styled from 'styled-components';

const AuthInput = ({ inputData, form, onChange }) => {
  
  return (
    <>
      {inputData?.map(({ type, name, placeholder }, idx) => {
        return (
          <AuthInputWrapper key={idx}>
            <UserInput
              type={type}
              name={name}
              value={form[name]}
              placeholder={placeholder}
              onChange={onChange}
            />
          </AuthInputWrapper>
        );
      })}
    </>
  );
};

const AuthInputWrapper = styled.div`
  ${({ theme }) => theme.flexCustom('column', 'center', 'flex-start')};
  width: 100%;
  gap: 2.5vh;
`;

const UserInput = styled.input`
  width: 100%;
  padding: 1vh 1vw;
  font-size: 20px;
  border: none;
  border-radius: 10px;
  background-color: rgb(241, 241, 241);

  &:focus {
    outline: none;
  }
`;

const ErrorText = styled.p`
  color: red;
`;

export default AuthInput;
