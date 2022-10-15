import { useState } from 'react';
import useTitle from '../hooks/common/useTitle';
import AuthForm from '../components/auth/AuthForm';
import AuthLayout from '../components/auth/AuthLayout';

const Auth = () => {
  const [formType, setFormType] = useState('로그인');
  useTitle(formType);

  return (
    <AuthLayout>
      {formType === '로그인' ? (
        <AuthForm
          formType={formType}
          setFormType={setFormType}
          inputData={SIGNIN_DATA}
        />
      ) : (
        <AuthForm
          formType={formType}
          setFormType={setFormType}
          inputData={SIGNUP_DATA}
        />
      )}
    </AuthLayout>
  );
};

export default Auth;

const SIGNIN_DATA = [
  {
    type: 'text',
    name: 'email',
    placeholder: '이메일',
    autoFocus: 'autoFocus',
  },
  {
    type: 'password',
    name: 'password',
    placeholder: '비밀번호',
  },
];

const SIGNUP_DATA = [
  {
    type: 'name',
    name: 'name',
    placeholder: '이름',
  },
  {
    type: 'text',
    name: 'email',
    placeholder: '이메일 (@ 포함)',
    autoFocus: 'autoFocus',
  },
  {
    type: 'password',
    name: 'password',
    placeholder: '비밀번호 (8글자 이상 입력)',
  },
];
