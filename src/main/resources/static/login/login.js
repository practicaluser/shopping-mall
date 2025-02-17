import * as Api from "../api.js";
import {
  blockIfLogin,
  getUrlParams,
  validateEmail,
  createNavbar,
} from "../useful-functions.js";

// 요소(element), input 혹은 상수
const usernameInput = document.querySelector("#usernameInput");
const passwordInput = document.querySelector("#passwordInput");
const submitButton = document.querySelector("#submitButton");
const registerButton = document.querySelector("#regiButton");

blockIfLogin();
addAllElements();
addAllEvents();

// html에 요소를 추가하는 함수들을 묶어주어서 코드를 깔끔하게 하는 역할임.
async function addAllElements() {
  createNavbar();
}

// 여러 개의 addEventListener들을 묶어주어서 코드를 깔끔하게 하는 역할임.
function addAllEvents() {
  submitButton.addEventListener("click", handleSubmit);
  registerButton.addEventListener("click", registerFunction);
}

// 로그인
async function handleSubmit(e) {
  e.preventDefault();

  //로그인 아이디, 비번 -> json으로 전달
  //로그인 성공 -> access 토큰을 세션에 추가

  const username = usernameInput.value;
  const password = passwordInput.value;

  const LoginData = {
    username : username,
    password : password
  };

  const response = await fetch("/login", {
    method : "POST",
    headers : {
      "Content-Type" : "application/json",
    },
    body : JSON.stringify(LoginData),});


  if(response.ok){
    const token = response.headers.get("access"); //헤더에서 access token 꺼내오기

    sessionStorage.setItem("Authorization", token); //session storage에 access 토큰 저장
   // console.log(token);

    alert("로그인에 성공하셨습니다.");
    window.location.href=" /" //메인 페이지로 이동
  }
  else {
    alert("로그인에 실패하셨습니다. 다시 로그인해주세요.");
  }
}

async function registerFunction(e) {
  e.preventDefault();

  window.location.href="/register/register.html";
}

  /* 기존 코드
    // 로그인 api 요청
    try {
      const result = await Api.post("/login", data);
      const { token, isAdmin } = result;

      // 로그인 성공, 토큰을 세션 스토리지에 저장
      sessionStorage.setItem("token", token); //access token 저장?

      alert(`정상적으로 로그인되었습니다.`);

      // 로그인 성공

      // admin(관리자) 일 경우, sessionStorage에 기록함??
      if (isAdmin) {
        sessionStorage.setItem("admin", "admin");
      }

      // 기존 다른 페이지에서 이 로그인 페이지로 온 경우, 다시 돌아가도록 해 줌.
      const { previouspage } = getUrlParams();

      if (previouspage) {
        window.location.href = previouspage;

        return;
      }

      // 기존 다른 페이지가 없었던 경우, 그냥 기본 페이지로 이동
      window.location.href = "/";
    } catch (err) {
      console.error(err.stack);
      alert(`문제가 발생하였습니다. 확인 후 다시 시도해 주세요: ${err.message}`);
    }
   */


  // try {
  //   const data = { email, password };
  //
  //   const result = await Api.post("/login", data);
  //   console.log(result)
  //   console.log("!!!!!!!")
  //   const { isAdmin } = result;
  //
  //   alert(`정상적으로 로그인되었습니다.`);import * as Api from "../api.js";
  // import {
  //   blockIfLogin,
  //   getUrlParams,
  //   validateEmail,
  //   createNavbar,
  // } from "../useful-functions.js";
  //
  // // 요소(element), input 혹은 상수
  // const emailInput = document.querySelector("#emailInput");
  // const passwordInput = document.querySelector("#passwordInput");
  // const submitButton = document.querySelector("#submitButton");
  //
  // blockIfLogin();
  // addAllElements();
  // addAllEvents();
  //
  // // html에 요소를 추가하는 함수들을 묶어주어서 코드를 깔끔하게 하는 역할임.
  // async function addAllElements() {
  //   createNavbar();
  // }
  //
  // // 여러 개의 addEventListener들을 묶어주어서 코드를 깔끔하게 하는 역할임.
  // function addAllEvents() {
  //   submitButton.addEventListener("click", handleSubmit);
  // }
  //
  // // 로그인 진행
  // async function handleSubmit(e) {
  //   e.preventDefault();
  //
  //   const email = emailInput.value;
  //   const password = passwordInput.value;
  //
  //   // 잘 입력했는지 확인
  //   const isEmailValid = validateEmail(email);
  //   const isPasswordValid = password.length >= 4;
  //
  //   if (!isEmailValid || !isPasswordValid) {
  //     return alert(
  //       "비밀번호가 4글자 이상인지, 이메일 형태가 맞는지 확인해 주세요."
  //     );
  //   }
  //
  //   // 로그인 api 요청
  //   try {
  //     const data = { email, password };
  //
  //     const result = await Api.post("/login", data);
  //     const { token, isAdmin } = result;
  //
  //     // 로그인 성공, 토큰을 세션 스토리지에 저장
  //     sessionStorage.setItem("token", token);
  //
  //     alert(`정상적으로 로그인되었습니다.`);
  //
  //     // 로그인 성공
  //
  //     // admin(관리자) 일 경우, sessionStorage에 기록함
  //     if (isAdmin) {
  //       sessionStorage.setItem("admin", "admin");
  //     }
  //
  //     // 기존 다른 페이지에서 이 로그인 페이지로 온 경우, 다시 돌아가도록 해 줌.
  //     const { previouspage } = getUrlParams();
  //
  //     if (previouspage) {
  //       window.location.href = previouspage;
  //
  //       return;
  //     }
  //
  //     // 기존 다른 페이지가 없었던 경우, 그냥 기본 페이지로 이동
  //     window.location.href = "/";
  //   } catch (err) {
  //     console.error(err.stack);
  //     alert(`문제가 발생하였습니다. 확인 후 다시 시도해 주세요: ${err.message}`);
  //   }
  //
  //   // try {
  //   //   const data = { email, password };
  //   //
  //   //   const result = await Api.post("/login", data);
  //   //   console.log(result)
  //   //   console.log("!!!!!!!")
  //   //   const { isAdmin } = result;
  //   //
  //   //   alert(`정상적으로 로그인되었습니다.`);
  //   //
  //   //   // admin(관리자) 일 경우, sessionStorage에 기록함
  //   //   if (isAdmin) {
  //   //     sessionStorage.setItem("admin", "admin");
  //   //   }
  //   //
  //   //   // 기존 다른 페이지에서 이 로그인 페이지로 온 경우, 다시 돌아가도록 해 줌.
  //   //   const { previouspage } = getUrlParams();
  //   //
  //   //   if (previouspage) {
  //   //     window.location.href = previouspage;
  //   //     return;
  //   //   }
  //   //
  //   //   // 기존 다른 페이지가 없었던 경우, 그냥 기본 페이지로 이동
  //   //   window.location.href = "/";
  //   // } catch (err) {
  //   //   console.error(err.stack);
  //   //   alert(`문제가 발생하였습니다. 확인 후 다시 시도해 주세요: ${err.message}`);
  //   // }
  //
  // }
  //
  //   // admin(관리자) 일 경우, sessionStorage에 기록함
  //   if (isAdmin) {
  //     sessionStorage.setItem("admin", "admin");
  //   }
  //
  //   // 기존 다른 페이지에서 이 로그인 페이지로 온 경우, 다시 돌아가도록 해 줌.
  //   const { previouspage } = getUrlParams();
  //
  //   if (previouspage) {
  //     window.location.href = previouspage;
  //     return;
  //   }
  //
  //   // 기존 다른 페이지가 없었던 경우, 그냥 기본 페이지로 이동
  //   window.location.href = "/";
  // } catch (err) {
  //   console.error(err.stack);
  //   alert(`문제가 발생하였습니다. 확인 후 다시 시도해 주세요: ${err.message}`);
  // }


