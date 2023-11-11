# 전남대 12조 - 픽업셔틀

<div align='center'>
	
![image](https://github.com/rktdnjs/pick_up_shuttle/assets/67001905/fb603ed5-cf9e-435a-8a09-07d61d47f1be)

</div>

<br><br>

## 목차

[1. 최종 과제 제출](#최종-과제-제출)

[2. 시작 가이드](#시작-가이드)

[3. 프로젝트 정보](#프로젝트-정보)

[4. 기술 스택](#기술-스택)

[5. 페이지별 화면구성과 주요 기능](#페이지별-화면구성과-주요-기능)

[6. 아키텍쳐](#아키텍쳐)


## 최종 과제 제출

### 1️⃣ 팀 내 배포 링크 모음

프론트, 백 데이터 등 배포 중인 인스턴스 주소

```
FE : https://k0d01653e1a11a.user-app.krampoline.com/
```

```
BE : https://k0d01653e1a11a.user-app.krampoline.com/api
```

### 2️⃣ 최신 ERD 이미지 파일 (링크X)

![image](https://github.com/rktdnjs/pick_up_shuttle/assets/67001905/ea6a157e-604d-4a3d-abe2-f3aec681754d)


### 3️⃣ 각 트랙별 코딩에 대한 간략한 설명

```
3. 프로젝트 정보 | 4. 기술 스택 | 5. 페이지별 화면 구성과 주요 기능 파트에 서술해 놓았습니다😀
```

## 시작 가이드

### Installation

```
$ git clone https://github.com/Step3-kakao-tech-campus/Team12_FE.git
$ cd Team12_FE
$ npm install
$ npm start
```

## 프로젝트 정보

### 프로젝트 간단 소개

```
픽업셔틀은 대학생들을 위한 음료 대리 픽업 서비스로, 배달을 시키기에는 부담스럽고 직접 포장을 하기는 힘든 대학생들이
'피커(대리픽업자)'에게 조금의 픽업팁을 주고 대리 픽업을 해다 줄 수 있도록 연결해주는 서비스입니다.
```

### FE 개발팀 소개

|                                      신효원                                      |                                      조배경                                       |                                                              김단빈                                                              |
| :------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------: |
| <img width="160px" src="https://avatars.githubusercontent.com/u/67001905?v=4" /> | <img width="160px" src="https://avatars.githubusercontent.com/u/102566546?v=4" /> | <img width="160px" src="https://avatars.githubusercontent.com/u/97265303?s=400&u=d956702284666a11164c6ea6453839b139b05105&v=4"/> |
|                        전남대학교 소프트웨어공학과 3학년                         |                       전남대학교 컴퓨터정보통신공학과 3학년                       |                                                전남대학교 소프트웨어공학과 3학년                                                 |

<br><br>

### 서비스 기획 의도

```
- 학교를 다니는 대학생들에게 커피는 일상에서 떼어놓을 수 없는 존재! ☕
- 하지만, 학교 내에서 커피를 사러 주변 카페까지 갔다오기엔 귀찮음.. 🏪
- 또한 시간적 여유가 없어 바쁜 몇몇 대학생들에게 커피를 사러 나간다는 것은 쉽지 않은 일.. ⏱
- 그렇다고 카페 음료를 배달 시키자니 높은 최소 주문금액과 배달료가 발목을 붙잡는다! 💲
- 아! 학교로 오는 누군가에게 편하게 음료를 대신 사와달라고 할 순 없을까? ⇒ ✨ 픽업셔틀의 탄생 ✨
- 오더(주문자)🙋‍♀️ : 부담스러운 최소주문금액 & 배달료 대신 적은 금액의 픽업팁을 내고 음료를 받을 수 있게!
- 피커(대리픽업자)🚶‍♂️ : 학교 가는김에 내 음료 살겸 픽업 셔틀 보고 추가로 픽업도 해다 주고, 돈도 벌고!
```

### 주안점을 두고 개발한 기능

#### ⭐️ 카카오 로그인으로 간편한 로그인

- 카카오 로그인 API를 활용하여 대학생들이 많이들 사용하는 카카오톡으로 간편하게 로그인 하여 귀찮은 회원가입 없이 간편하게 서비스 이용 가능!

#### ⭐️ 빠른 공고 정보 확인과 손 쉬운 매칭

- 한 공고를 클릭하면 픽업할 카페, 픽업해줄 장소, 메뉴, 픽업팁 등을 한눈에 확인 가능!
- 해당 공고에서 픽업하기를 클릭하고 픽업 후 전달까지의 예상 도착 시간을 작성하면 오더-피커 간에 바로 매칭 완료

#### ⭐️ 학교 학생들을 이용해 정확하고 신속하게!

- 우리 학교 내부 위치는 학교 학생들이 더욱 잘 아는법!!
- 학생증 인증을 통해 우리 학교 학생들만이 픽업 셔틀을 이용할 수 있도록 개발
- 피커가 학교 학생이므로 길을 잃지 않고 정확하고 신속하게 전달해줄 수 있다!


#### ⭐️ 내가 원하는 카페만 쏙쏙 골라 픽업!

- 내가 자주 가는 카페만 필터링 하여 공고 확인 & 카페에 가는 김에 픽업까지!
- 음료 사러 가는김에 돈도 벌고 일석이조 🤩

## 기술 스택

### Environment

![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white)
![Github](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white)

### Development

![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![React](https://img.shields.io/badge/createreactapp-09D3AC?style=for-the-badge&logo=createreactapp&logoColor=white)
![ReactQuery](https://img.shields.io/badge/reactquery-FF4154?style=for-the-badge&logo=reactquery&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![ESLint](https://img.shields.io/badge/ESlint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white)

### Communication

![Slack](https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=Slack&logoColor=white)
![Notion](https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=Notion&logoColor=white)

## 페이지별 화면구성과 주요 기능

## 아키텍쳐
