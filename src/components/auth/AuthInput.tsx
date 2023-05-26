import styled from 'styled-components';

interface InputDataProps {
  type: string;
  name: string;
  placeholder: string;
  requirements?: string;
  autoFocus?: boolean;
}

interface FormProps {
  email: string;
  password: string;
}

interface IProps {
  inputData: InputDataProps[];
  form: FormProps;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
}

const AuthInput = ({ inputData, form, handleChange }: IProps) => {
  return (
    <>
      {inputData?.map(
        (
          { type, name, placeholder, requirements, autoFocus }: InputDataProps,
          idx
        ) => {
          return (
            <AuthInputWrapper key={idx}>
              <UserInput
                type={type}
                name={name}
                value={form[name as keyof typeof form]}
                placeholder={placeholder}
                autoFocus={autoFocus}
                onChange={handleChange}
              />
              <RequirementText>{requirements}</RequirementText>
            </AuthInputWrapper>
          );
        }
      )}
    </>
  );
};

const AuthInputWrapper = styled.div`
  ${({ theme }) => theme.flexColumn};
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  gap: 2.5vh;
`;

const UserInput = styled.input`
  width: 100%;
  padding: 1vh 1vw;
  font-size: 20px;
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
