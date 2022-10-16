# 원티드 프리온보딩 프론트엔드 - 선발 과제

원티드 프리온보딩 프론트엔드 코스 선발 과제인 `Todo App`입니다.

[선발 과제 관련 레포](https://github.com/walking-sunset/selection-task)

## **배포 주소**

[http://wanted-pre-onboarding-frontend.s3-website.ap-northeast-2.amazonaws.com/](http://wanted-pre-onboarding-frontend.s3-website.ap-northeast-2.amazonaws.com/)

`테스트 계정 :`

##### 아이디 : test1000@test.com

##### 비밀번호 : password!@

## 목차

- [설치 및 실행](#설치및실행)
- [구현 목록 및 과제 요구사항](#구현목록및과제요구사항)
- [기술 스택](##기술스택)
- [폴더 구조](##폴더구조)

## **설치 및 실행**

```
$ git clone https://github.com/moonkorea00/wanted-pre-onboarding-frontend
$ npm install
$ npm start
```

## 구현 목록 및 과제 요구사항
  
|                                                        로그인                                                         |                                                     회원가입                                                     |                                                   투두 리스트                                                    |
| :-------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------: |
|    ![로그인](https://user-images.githubusercontent.com/78708082/196017717-c4f2d18f-54f1-4976-97c6-a55b660ed985.png)    | ![회원가입](https://user-images.githubusercontent.com/78708082/196017726-fd78dfaa-ee3e-431b-ac08-9e0a94b4bc5a.png) | ![투두 리스트](https://user-images.githubusercontent.com/78708082/196017727-3b8eaa75-014c-41b6-9f42-6b00741b2c58.png) |

### 로그인 / 회원가입
  
- [ ] 경로에 로그인 / 회원가입 기능을 개발해주세요
  
  - [ ] 페이지 안에 이메일 입력창, 비밀번호 입력창, 제출 버튼이 포함된 형태로 구성해주세요
  - [ ] 로그인, 회원가입을 별도의 경로로 분리해도 무방합니다.
  
 ` - 로그인 / 회원가입은 하나의 form 컴포넌트로 전달하는 props에 따라 구성요소를 간소화했고 상수 데이터를 활용해서 하나의 input 컴포넌트로 다른 데이터를 출력하게 했습니다.`
 
> 참고 폴더: (https://github.com/moonkorea00/wanted-pre-onboarding-frontend/blob/master/src/pages/Auth.js)]

#### 1. 이메일과 비밀번호의 유효성 검사기능을 구현해주세요
  
  - [ ] 이메일 조건 : @ 포함
  - [ ]  비밀번호 조건 : 8자 이상 입력
  - [ ]  입력된 이메일과 비밀번호가 위 조건을 만족할 때만 버튼이 활성화 되도록 해주세요

#### 2. 로그인 API를 호출하고, 올바른 응답을 받았을 때 루트 경로로 이동시켜주세요
  
  - [ ]  로그인 API는 로그인이 성공했을 시 Response Body에 JWT를 포함해서 응답합니다.
  - [ ]  응답받은 JWT는 로컬 스토리지에 저장해주세요
  
  ` - 로그인 / 회원가입 API 호출 후 응답으로 받은 JWT는 여러 컴포넌트에서 재사용한다는 점을 고려해 컴포넌트단에서 구현하지 않고 스토리지 객체를 만들어 컴포넌트 간 유연하게 사용할 수 있도록 하였습니다.`
  
  > 참고 파일: [[src/utils/Storage/storage.js](https://github.com/moonkorea00/wanted-pre-onboarding-frontend/blob/master/src/utils/Storage/storage.js)]

#### 3. 로그인 여부에 따른 리다이렉트 처리를 구현해주세요
  
  - [ ] 로컬 스토리지에 토큰이 있는 상태로 / 페이지에 접속한다면 /todo 경로로 리다이렉트 시켜주세요
  - [ ] 로컬 스토리지에 토큰이 없는 상태로 /todo페이지에 접속한다면 / 경로로 리다이렉트 시켜주세요

  ` - 로그인 유무에 따른 페이지 접근 권한은 컴포넌트에 도달해서 판단하면 비효율적이라고 생각해서 토큰 유무를 권한 유틸리티 함수로 관리했습니다.`

  > 참고 파일: [[src/utils/ProtectedRoutes/AuthenticatedRoute.js](https://github.com/moonkorea00/wanted-pre-onboarding-frontend/blob/master/src/utils/ProtectedRoutes/AuthenticatedRoute.js)]
  
  > 참고 파일: [[  src/utils/ProtectedRoutes/UnauthenticatedRoute.js](https://github.com/moonkorea00/wanted-pre-onboarding-frontend/blob/master/src/utils/ProtectedRoutes/UnauthenticatedRoute.js)]
  
### 투두 리스트

#### 4. /todo경로에 접속하면 투두 리스트의 목록을 볼 수 있도록 해주세요

  - [ ] 리스트 페이지에는 투두 리스트의 내용과 완료 여부가 표시되어야 합니다.
  - [ ] 리스트 페이지에는 입력창과 추가 버튼이 있고, 추가 버튼을 누르면 입력창의 내용이 새로운 투두 리스트로 추가되도록 해주세요
  
#### 5. 투두 리스트의 수정, 삭제 기능을 구현해주세요

  - [ ] 투두 리스트의 개별 아이템 우측에 수정버튼이 존재하고 해당 버튼을 누르면 수정모드가 활성화되고 투두 리스트의 내용을 수정할 수 있도록 해주세요
  - [ ] 수정모드에서는 개별 아이템의 우측에 제출버튼과 취소버튼이 표시되며 해당 버튼을 통해서 수정 내용을 제출하거나 수정을 취소할 수 있도록 해주세요
  - [ ] 투두 리스트의 개별 아이템 우측에 삭제버튼이 존재하고 해당 버튼을 누르면 투두 리스트가 삭제되도록 해주세요
  
  ` - 비동기 통신은 추상화된 함수를 공통으로 사용하고자 axios 인스턴스를 기반으로 관리했습니다.`

> 참고 파일: [[src/api/customAxios.js](https://github.com/moonkorea00/wanted-pre-onboarding-frontend/blob/master/src/api/customAxios.js)]

  ` - Authentication과 Todo 관련 비동기 통신 로직은 API 디렉토리에서 관리하게 하여 최대한 직관적이게 비동기 통신 함수를 구현하고자 했습니다.`
  
> 참고 파일: [[src/api/Todo.js](https://github.com/moonkorea00/wanted-pre-onboarding-frontend/blob/master/src/api/Todo.js)]

> 참고 파일: [[src/api/Auth.js](https://github.com/moonkorea00/wanted-pre-onboarding-frontend/blob/master/src/api/Auth.js)]

  ` - 낮은 결합도와 높은 재사용성을 고려해서 각각 다른 관심사의 커스텀훅으로 코드를 구현했습니다.`

> 참고 폴더: (https://github.com/moonkorea00/wanted-pre-onboarding-frontend/tree/master/src/hooks)]

  ` - 폴더 구조는 관심사에 따라 접근하기 용이하고 직관적이게 구성하고자 노력했습니다.`

<br />

## **폴더 구조**

```
public
│  ├─ favicon.ico
│  └─ index.html
└─ src
   ├─ Router.js
   ├─ api
   │  ├─ Auth.js
   │  ├─ Todo.js
   │  └─ customAxios.js
   ├─ assets
   │  └─ ReactLogo.svg
   ├─ components
   │  ├─ auth
   │  │  ├─ AuthForm.js
   │  │  ├─ AuthInput.js
   │  │  └─ AuthLayout.js
   │  ├─ common
   │  │  └─ Header.js
   │  └─ todo
   │     ├─ AddTodoForm.js
   │     ├─ TodoItem.js
   │     ├─ TodoLayout.js
   │     └─ TodoList.js
   ├─ config.js
   ├─ constants
   │  └─ auth
   │     └─ AuthFormConstants.js
   ├─ hooks
   │  ├─ auth
   │  │  └─ useAuth.js
   │  ├─ common
   │  │  ├─ useInputs.js
   │  │  ├─ useTitle.js
   │  │  └─ useToggle.js
   │  └─ todo
   │     └─ useTodo.js
   ├─ index.js
   ├─ pages
   │  ├─ Auth.js
   │  ├─ NotFound.js
   │  └─ Todo.js
   ├─ styles
   │  ├─ GlobalStyle.js
   │  └─ theme.js
   └─ utils
      ├─ ProtectedRoutes
      │  ├─ AuthenticatedRoute.js
      │  └─ UnauthenticatedRoute.js
      └─ Storage
         └─ storage.js
```

## **기술 스택**

<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"><img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"><img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"/>

### 선정 이유

  - [ ] 컴포넌트 관리에 최적화된 리액트와 CRA로 초기 개발환경을 빠르게 구축할 수 있어서 접근성이 좋습니다.
  - [ ] css-in-js 라이버러리의 이점으로 컴포넌트에 props를 전달하여 UI를 그리기 유용합니다.
  - [ ] 리액트스럽게 컴포넌트 단위로 스타일을 지정해줄 수 있어서 재사용성이 높습니다.
  - [ ] 가독성 좋고 직관적이게 컴포넌트 이름을 구성할 수 있어서 명료합니다.
  - [ ] 인라인 스타일링의 단점도 극복하고 css-in-css보다 자유롭게 커스텀 컴포넌트를 만들 수 있습니다.

## **설치 및 실행**

```
$ git clone https://github.com/moonkorea00/wanted-pre-onboarding-frontend
$ npm install
$ npm start
```
