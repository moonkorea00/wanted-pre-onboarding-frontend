import styled, { css } from 'styled-components';
import useInputs from '../../hooks/common/useInputs';
import AuthInput from './AuthInput';
import useAuth from '../../hooks/auth/useAuth';

interface InputConstants {
  type: string;
  name: string;
  placeholder: string;
  requirements?: string;
  autoFocus?: boolean;
}

interface IProps {
  formType: string;
  setFormType: (formType: string) => void;
  inputData: InputConstants[];
}

interface Props {
  email: string;
  password: string;
}
const AuthForm = ({ formType, setFormType, inputData }: IProps) => {
  // const [{ email, password }, handleChange]: [{email:string, password: string}, Function] = useInputs({
  const [{ email, password }, handleChange] = useInputs({
    email: '',
    password: '',
  });
  const { handleSignUp, handleSignIn } = useAuth({ email, password });

  const form = { email, password };
  const isValidEmail = email.includes('@');
  const isValidPassword = password.length > 7;

  const handleSubmitAuthForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    formType === '로그인' ? handleSignIn() : handleSignUp();
  };
  console.log(typeof handleChange);
  return (
    <Form onSubmit={handleSubmitAuthForm}>
      <AuthTitle>{formType}</AuthTitle>
      <AuthInput
        inputData={inputData}
        form={form}
        handleChange={handleChange}
      />
      <SubmitButton disabled={!isValidEmail || !isValidPassword}>
        {formType}
      </SubmitButton>
      {formType === '로그인' ? (
        <p>
          계정이 없으신가요?{' '}
          <SwitchFormType onClick={() => setFormType('회원가입')}>
            회원가입
          </SwitchFormType>
        </p>
      ) : (
        <p>
          이미 가입하셨나요?{' '}
          <SwitchFormType onClick={() => setFormType('로그인')}>
            로그인
          </SwitchFormType>
        </p>
      )}
    </Form>
  );
};

const Form = styled.form`
  ${({ theme }) => theme.flexCenter};
  flex-direction: column;
  min-width: 400px;
  height: 60vh;
  gap: 2.5vh;
  padding: 5vh;
  border: 1px solid lightgrey;
  border-radius: 7px;
  background-color: white;
`;

const AuthTitle = styled.h1`
  margin-bottom: 1.5vh;
  font-size: 36px;
  letter-spacing: 4px;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 1vh 1vw;
  margin-bottom: 2vh;
  font-size: 24px;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 7px;
  background-color: rgb(50, 150, 127);
  ${({ disabled }) => css`
    opacity: ${disabled && '0.5'};
    cursor: ${disabled ? 'auto' : 'pointer'};

    &:hover {
      background-color: ${disabled ? 'rgb(50, 150, 127)' : 'rgb(40, 140, 117)'};
    }
  `};
`;

const SwitchFormType = styled.span`
  margin-left: 0.3vw;
  color: rgb(50, 150, 127);
  font-weight: bold;
  cursor: pointer;
`;

export default AuthForm;
