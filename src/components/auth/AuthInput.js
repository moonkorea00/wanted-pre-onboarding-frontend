import styled from 'styled-components';

const AuthInput = ({ inputData, form, handleChange }) => {
  return (
    <>
      {inputData?.map(({ type, name, placeholder, requirements, autoFocus }, idx) => {
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
            <RequirementText>{requirements}</RequirementText>
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

const RequirementText = styled.div`
  margin: -1vh 0 -0.5vh 0.5vw;
  font-size: 14px;
`;

export default AuthInput;
