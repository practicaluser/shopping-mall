![쇼핑몰 프로젝트](https://capsule-render.vercel.app/api?type=shark&height=300&color=gradient&text=쇼핑몰%20프로젝트)


# webshopping

## 프로젝트 소개
웹 쇼핑몰 프로젝트입니다. <br>
팀 프로젝트로 시작했고, <br>
백엔드에서는 주소 테이블을 맡아 컨트롤러와 서비스와 리파지터리의 역할을 이해하고 만들수 있고, 특히 개발에서 데이터베이스와 자바라는 프로그래밍언어가 어떻게 서로 주고받을 수 있는지 배웠습니다. <br>
프론트에서는 try 캐치문 안에 fetch 함수를 넣어 헤더와 바디를 설정해서 백엔드와 소통하는 방법에 대해 알게되었습니다.<br>

## 기술 스택

### 백엔드

<img src="https://img.shields.io/badge/SpringBoot-6DB33F?style=for-the-badge&logo=spring&logoColor=white"> <img src="https://img.shields.io/badge/springsecurity-6DB33F?style=for-the-badge&logo=spring&logoColor=white">
<img src="https://img.shields.io/badge/Spring%20Data%20JPA-6DB33F?style=for-the-badge&logo=spring&logoColor=white">
<img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white">
<img src="https://img.shields.io/badge/JWT-003545?style=for-the-badge&logo=googleauthenticator&logoColor=white">

### 프론트엔드

<img src="https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white">
<img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">
<img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white">

### Tools
<img src="https://img.shields.io/badge/intellij IDE-000000?style=flat&logo=intellijidea&logoColor=white" /> <img src="https://img.shields.io/badge/Nginx-009639?style=flat&logo=nginx&logoColor=white" />
<img src="https://img.shields.io/badge/GitLab-FC6D26?style=flat&logo=gitlab&logoColor=white" />
<img src="https://img.shields.io/badge/Discord-5865F2?style=flat&logo=discord&logoColor=white" />


<br>


## 프로젝트 구성
[WIREFRAME](https://www.figma.com/design/AoYtSyJMtbzgCgHb7GJrmt/3%ED%8C%80-%EC%82%BC%EC%82%BC%EC%98%A4%EC%98%A4?m=auto&t=0AaQxttZES8KxvNj-6) <br>
[ERD](https://dbdiagram.io/d/%EC%82%BC%EC%82%BC%EC%98%A4%EC%98%A4-67594ef1e9daa85aca5a7ab5)<br>


## 프로젝트 기능
### **1. 회원**
- **회원가입**
    - 이름, 아이디, 이메일, 비밀번호, 휴대폰 번호 모두 입력해야지 회원가입 가능

- **마이 페이지**
    - 주문 조회
    - 내 정보 수정
        - 비밀번호
        - 전화번호
        - 닉네임
        - 주소
    - 회원 탈퇴
- **권한**
    - 일반 회원
    - 관리자
        - 모든 회원의 주문 내역, 회원 정보 조회 가능
        - 주문 상태 변경 가능
        - 상품 및 카테고리 추가 가능
        - 회원 삭제 가능

- **로그인**
    - 로그인시 쿠키에 JWT토큰 발급

### **2. 카테고리**
- **카테고리 전체 조회**
    - 카테고리명
- **카테고리 추가**
    - 메인 카테고리 추가 - 메인 카테고리명 중복 불가
    - 서브 카테고리 추가 - 메인 카테고리와 같은 이름을 서브 카테고리 명으로 중복 불가
- **카테고리 수정**
- **카테고리 삭제**
    - 부모 카테고리가 삭제되면 자식 카테고리도 같이 삭제되게 설정
      
### **3. 상품**
- **상품 등록**
    - 제품 이름, 카테고리, 가격, 재고, 상세 설명, 이미지가 모두 입력되어야지 등록 가능
- **상품 리스트**
    - 카테고리 별로 분류해서 조회 가능
    - 최신순, 판매순, 조회순에 맞게 정렬 가능 및 상품 이름으로 검색 가능, 그에 따른 페이지네이션
- **상품 상세**
    - 색상 및 사이즈를 선택하면 사용자가 확인할 수 있게 화면에 렌더링
- **상품 관리**
    - 관리자에 따라 자신의 등록한 상품만 수정 및 삭제 가능
    - 상품 명으로 검색 가능 및 페이지네이션

### **4. 장바구니**
- 비회원어어도 장바구니 기능은 사용할 수 있고, 비회원일 때 장바구니에 상품을 넣어도 로그인시 장바구니의 정보를 그대로 계승 가능
- 주문은 장바구니를 통해서만 가능
- 수량 조정, 일부 삭제, 전체 삭제 가능

### **5. 결제**
- 주문과 결제는 별도의 도메인으로 구분
- 주문 데이터 생성 이후 결제 요청, 결제 실패시 결제 데이터는 생성되지 않음
- 토스 API를 활용해 실제 결제 로직을 구현

### **6. 주문**
- **결제수단**
    - 토스 API를 활용한 결제
- **배송**
    - 주소는 우편번호, 도로명 주소, 상세주소로 구성
    - 요청사항은 선택사항으로 입력
- **주문 조회**
    - 주문 상태가 목록에서 표시
<br>

# 🛡️ 스프링 시큐리티 기반 인증/인가 아키텍처
<br>

## 🚀 XSS 및 CSRF 방어를 위한 이중 토큰(Access/Refresh) 보안 아키텍처 설계

**주제:** Spring Security JWT 토큰 관리 및 프론트엔드-백엔드 협력 보안 설계

**핵심 성과:** Access Token과 Refresh Token의 역할과 보관 위치를 철저히 분리하여, XSS(크로스 사이트 스크립팅) 공격을 통한 토큰 탈취와 CSRF(크로스 사이트 요청 위조)를 통한 강제 권한 실행을 동시에 무력화하는 최적의 보안 파이프라인 구축.

---

## 🎯 핵심 기술 과제 및 해결 전략

1. **XSS (크로스 사이트 스크립팅) 방어 (Token 탈취 방지)**
    - **문제:** Access Token을 LocalStorage에 저장할 경우, 브라우저 입장에서는 단순 텍스트에 불과하므로 게시판 등에 심어진 악성 자바스크립트(XSS)가 0.1초 만에 토큰을 복사해 해커의 서버로 탈취할 위험이 존재함.
    - **해결:** 수명이 긴 **Refresh Token**은 반드시 `HttpOnly`, `Secure`, `SameSite=Strict` 속성을 적용한 쿠키에 저장. 이로써 브라우저 단에서 락(Lock)이 걸려 자바스크립트를 통한 접근 자체가 원천 차단됨.
2. **CSRF (크로스 사이트 요청 위조) 방어 (자동 포함의 취약점 해결)**
    - **문제:** 브라우저는 요청을 보낼 때 쿠키를 자동으로 묶어 보내는 특성이 있어, 인증 토큰을 쿠키에만 두면 악성 링크 클릭 시 원치 않는 API(예: 비밀번호 변경)가 강제 호출될 위험이 있음.
    - **해결:** 수명이 짧은 **Access Token**은 프론트엔드 메모리(JS 전역 변수 또는 React State)에만 임시 보관. API 통신 시 프론트엔드의 비동기 통신 라이브러리(Axios 등)가 가로채어 HTTP Header(`Authorization: Bearer`)에 명시적으로 주입. 악성 스크립트가 강제 요청을 보내더라도 헤더가 비어있어 서버(`JWTFilter`)에서 즉각 차단(401)됨.
3. **동일 출처 정책(SOP)을 활용한 토큰 재발급(Reissue) 보호**
    - **문제:** Refresh Token이 쿠키에 있으므로 재발급 API(`/reissue`)는 CSRF 공격에 노출되어 강제로 호출될 수 있음.
    - **해결:** 재발급 API의 목적은 서버 상태를 변경하는 것이 아니라 '새로운 Access Token 반환'임. 해커의 도메인과 서비스 도메인이 다르기 때문에 브라우저의 SOP(Same-Origin Policy)가 작동하여 해커는 해당 응답값을 절대 읽을 수 없음. 결국 공격은 무의미해지며 재발급 API는 안전하게 보호됨.
4. **탈취된 토큰의 제어권 회수 (Refresh Token DB 저장)**
    - **문제:** JWT는 그 자체로 상태를 가지지 않아(Stateless), 한 번 발급된 토큰이 탈취되면 만료 전까지 서버에서 능동적으로 막을 방법이 없음.
    - **해결:** Refresh Token을 서버 DB에 저장. 토큰 탈취 의심 상황이나 로그아웃 요청 시, 서버 DB에서 해당 Refresh Token을 강제 삭제하여 더 이상의 Access Token 재발급을 원천 차단(피해 확산 방지).

## 🌊 전체 파이프라인 흐름 (Swimlane Diagram)

기존 마크다운 표가 특정 뷰어에서 줄바꿈이 깨지며 섞이는 현상을 방지하기 위해, **HTML Table 구조와 리스트 형태**를 활용하여 어느 마크다운 뷰어에서나 깔끔하게 보이도록 수정했습니다.

<table>
  <thead>
    <tr style="background-color: #f8f9fa; text-align: left;">
      <th style="padding: 12px; width: 15%;">단계</th>
      <th style="padding: 12px; width: 30%;">Frontend (Client/Browser)</th>
      <th style="padding: 12px; width: 35%;">Server Action (Spring Security)</th>
      <th style="padding: 12px; width: 20%;">Database</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 12px;"><b>① 최초 로그인</b></td>
      <td style="padding: 12px;">• ID/PW 입력 및 로그인 요청</td>
      <td style="padding: 12px;">• DB 조회 및 비밀번호 검증<br>• <b>Access / Refresh Token 동시 발급</b></td>
      <td style="padding: 12px;">• Refresh Token 저장</td>
    </tr>
    <tr style="background-color: #fdfdfd;">
      <td style="padding: 12px;"><b>② 토큰 수령 및 저장</b></td>
      <td style="padding: 12px;">• <b>Access Token:</b> 메모리(JS 변수/State) 보관<br>• <b>Refresh Token:</b> <code>HttpOnly</code> 쿠키 자동 보관</td>
      <td style="padding: 12px;">• 응답 본문(JSON)으로 Access Token 반환<br>• <code>Set-Cookie</code> 헤더로 Refresh Token 반환</td>
      <td style="padding: 12px;"></td>
    </tr>
    <tr>
      <td style="padding: 12px;"><b>③ 일반 API 요청</b></td>
      <td style="padding: 12px;">• 메모리에서 Access Token 추출<br>• <code>Authorization: Bearer</code> 헤더 수동 세팅 및 요청</td>
      <td style="padding: 12px;">• <code>JWTFilter</code> 작동: 헤더 도장(Token) 검증<br>• 유효 시 ➜ 비즈니스 로직 처리 및 응답</td>
      <td style="padding: 12px;">• 데이터 조회/수정</td>
    </tr>
    <tr style="background-color: #fdfdfd;">
      <td style="padding: 12px;"><b>④ Access Token 만료</b></td>
      <td style="padding: 12px;">• 401 에러 수신<br>• 쿠키를 포함하여 <code>/reissue</code> 조용히(Silent) 요청</td>
      <td style="padding: 12px;">• 쿠키의 Refresh Token과 DB 값 비교 검증<br>• 일치 시 ➜ <b>새 Access Token 발급</b></td>
      <td style="padding: 12px;">• Refresh Token 일치 검증</td>
    </tr>
    <tr>
      <td style="padding: 12px;"><b>⑤ 로그아웃 (무효화)</b></td>
      <td style="padding: 12px;">• 로그아웃 버튼 클릭 및 요청 발송</td>
      <td style="padding: 12px;">• 브라우저 쿠키 만료 명령 전달</td>
      <td style="padding: 12px;">• <b>해당 Refresh Token 삭제</b><br><em>(이후 재발급 영구 차단)</em></td>
    </tr>
  </tbody>
</table>

<br>

### 💡 주요 보안 포인트 요약
* **XSS 방어:** Refresh Token을 `HttpOnly` 쿠키에 저장하여 JS 접근 원천 차단
* **CSRF 방어:** Access Token을 메모리에 두고 수동으로 헤더에 주입하여 브라우저의 쿠키 자동 전송 취약점 방어
* **SOP(동일 출처 정책):** 해커가 `/reissue` API를 강제 호출하더라도 응답값(새 Access Token)을 읽을 수 없어 토큰 탈취 불가능
* **토큰 탈취 대비:** Refresh Token을 DB에 저장하여, 로그아웃 또는 비정상 접근 시 DB에서 삭제해 추가 피해 방지

