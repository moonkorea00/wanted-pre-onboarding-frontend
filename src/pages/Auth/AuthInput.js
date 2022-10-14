import styled from 'styled-components';

const AuthInput = ({ inputData, form, handleChange }) => {
  return (
    <>
      {inputData?.map(({ type, name, placeholder, autoFocus }, idx) => {
        return (
          <AuthInputWrapper key={idx}>
            <UserInput
              type={type}
              name={name}
              value={form[name]}
              placeholder={placeholder}
              autoFocus={autoFocus}
              onChange={handleChange}
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

export default AuthInput;
