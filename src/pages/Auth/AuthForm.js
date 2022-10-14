import { useState } from 'react';
import styled, { css } from 'styled-components';
import useInputs from '../../hooks/useInputs';
import AuthInput from './AuthInput';

const AuthForm = ({ formType, setFormType, inputData }) => {
  const { form, handleChange } = useInputs({ name: '', email: '', password: '' });
  const [error, setError] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const req = await fetch(
        'https://pre-onboarding-selection-task.shop/auth/signup',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(form),
        }
      );
      const res = await req.json();
      console.log(res);
    } catch (e) {
      console.log('error', e);
    }

    // formType === '로그인' ? login(data) : signUp(data);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <AuthTitle>{formType}</AuthTitle>
      <AuthInput inputData={inputData} form={form} handleChange={handleChange} />
      {error && formType === '로그인' ? (
        <ErrorText>이메일 또는 비밀번호를 확인해 주세요.</ErrorText>
      ) : (
        <ErrorText>{error}</ErrorText>
      )}
      <SubmitButton disabled={false}>{formType}</SubmitButton>
      {formType === '로그인' ? (
        <p>
          계정이 없으신가요?{' '}
          <SwitchFormType
            onClick={() => {
              setError('');
              setFormType('회원가입');
            }}
          >
            회원가입
          </SwitchFormType>
        </p>
      ) : (
        <p>
          이미 가입하셨나요?{' '}
          <SwitchFormType
            onClick={() => {
              setError('');
              setFormType('로그인');
            }}
          >
            로그인
          </SwitchFormType>
        </p>
      )}
    </Form>
  );
};

const Form = styled.form`
  ${({ theme }) => theme.flexCustom('column', 'center', 'center')};
  height: 60vh;
  gap: 2.5vh;
  padding: 5vh;
  margin: 13vh 35vw;
  border: 1px solid lightgrey;
  border-radius: 7px;
  background-color: white;
`;

const AuthTitle = styled.h1`
  margin-bottom: 1.5vh;
  font-size: 36px;
  letter-spacing: 4px;
`;

const ErrorText = styled.p`
  color: red;
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
    opacity: ${disabled && '0.7'};
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
