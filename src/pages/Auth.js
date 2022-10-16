import { useState } from 'react';
import useTitle from '../hooks/common/useTitle';
import AuthForm from '../components/auth/AuthForm';
import AuthLayout from '../components/auth/AuthLayout';
import { SIGNIN_DATA, SIGNUP_DATA } from '../constants/auth/AuthFormConstants';

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
