![쇼핑몰 프로젝트](https://capsule-render.vercel.app/api?type=shark&height=300&color=gradient&text=쇼핑몰%20프로젝트)


# webshopping

## 프로젝트 소개
웹 쇼핑몰 프로젝트입니다. <br>
팀 프로젝트로 시작했지만 제 스스로 팀에서 만든 모든 코드를 이해하고 만들 수 있습니다 <br>
유저 권한과 어드민 권한을 나누어 본 웹 쇼핑몰을 활용할 수 있습니다. <br>

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

## 프로젝트 도메인
http://elice5-webshopping.duckdns.org/


## 테스트 아이디
유저 <br>
    - id: testuser <br>
    - pwd: testuser <br>
<br>
어드민 <br>
    - admin: admin <br>
    - pwd: 12345678 <br>
<br>
