export const SIGNIN_DATA = [
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

export const SIGNUP_DATA = [
  {
    type: 'name',
    name: 'name',
    placeholder: '이름',
  },
  {
    type: 'text',
    name: 'email',
    placeholder: '이메일',
    requirements: '이메일에 "@"를 포함해주세요.',
    autoFocus: 'autoFocus',
  },
  {
    type: 'password',
    name: 'password',
    placeholder: '비밀번호',
    requirements: '8글자 이상 입력해주세요.',
  },
];
