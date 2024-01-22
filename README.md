# 넷플릭스
## 📌 프로젝트 소개
### TMDB API를 이용한 넷플릭스 모방 토이 프로젝트 
## 📌 배포

[https://ysbinn.github.io/Netflix-Clone/](https://ysbinn.github.io/Netflix-Clone/)

## 📌 프로젝트 설치 및 시작

#### 프로젝트 클론

```shell
$ git clone https://github.com/YSBINN/Netflix-Clone.git
```

#### 패키지 설치

```shell
$ yarn or yarn install
```

#### 서버 실행

```shell
$ yarn start
```


## 📌 프로젝트 구조

<details>
<summary>open</summary>

📦src  
 ┣ 📂api  
 ┃ ┣ 📜baseApi.ts  
 ┃ ┗ 📜requests.ts  
 ┣ 📂hooks  
 ┃ ┣ 📜useDebounce.ts  
 ┃ ┣ 📜useFetch.ts  
 ┃ ┗ 📜useOnClickOutside.ts  
 ┣ 📂pages  
 ┃ ┣ 📂DetailPage  
 ┃ ┃ ┗ 📜index.tsx  
 ┃ ┣ 📂Layout  
 ┃ ┃ ┣ 📂components  
 ┃ ┃ ┃ ┣ 📜Footer.tsx  
 ┃ ┃ ┃ ┗ 📜Nav.tsx  
 ┃ ┃ ┗ 📜index.tsx  
 ┃ ┣ 📂MainPage  
 ┃ ┃ ┣ 📂components  
 ┃ ┃ ┃ ┣ 📜Banner.tsx  
 ┃ ┃ ┃ ┣ 📜MovieRow.tsx  
 ┃ ┃ ┃ ┗ 📜RowModal.tsx  
 ┃ ┃ ┗ 📜index.tsx  
 ┃ ┗ 📂SearchPage  
 ┃ ┃ ┣ 📂components  
 ┃ ┃ ┃ ┣ 📜EmptyResults.tsx  
 ┃ ┃ ┃ ┗ 📜Results.tsx  
 ┃ ┃ ┗ 📜index.tsx  
 ┣ 📂styles  
 ┃ ┗ 📜GlobalStyles.tsx  
 ┣ 📜App.tsx  
 ┗ 📜index.tsx

</details>

<br/>

## 📌기술 스택 및 사용이유

#### React 
- 컴포넌트화를 통해 추후 유지보수와 재사용성을 고려했습니다.
-   유저 배너, 상단과 하단 배너 등 중복되어 사용되는 부분이 많아 컴포넌트화를 통해 리소스 절약이 가능했습니다.

####  Typescript 
- 안정성 ( 컴파일 과정에서 에러를 예방 할 수 있을뿐 아니라, 손시운 디버깅이 가능하다. )
- 표현력 ( 타입을 명시함으로써 코드를 더 이해하기 쉽게 만들어 준다. 또한 코드 자동 완성 기능을 지원하여 생산성을 높여준다. )
- 확장성 (ES6 모듈 및 네임스페이스를 지원하므로 확장성이 높은 애플리케이션을 개발할 수 있다. )

#### twin.macro ( Styled-component + Tailwind-CSS )  : https://github.com/ben-rogerson/twin.macro
-   TailwindCSS를 단독으로 사용 할 경우 태그 내에 작성되는 className이 많아져 가독성 저해   
-   유지보수 시 해당 태그를 코드 내에서 식별하여 className을 수정해주어야하는 번거로움 발생
-   동일 컴포넌트를 중복하여 사용 할 경우에 대한 편의성 도모
-   Styled Components의 in-JS 문법을 활용하여 동적인 스타일 적용 가능
-   코드의 가독성 및 유지보수성 향상

## 📌 구현기능 
✔️ 메인 페이지
   1. Layout (Nav Footer 및 검색 바 구현)
- 로고 클릭 시 메인 페이지로 이동 및 검색 바 검색 시 검색 페이지 이동
    
2. Banner (메인배너 기능 구현)
 - TMDB API를 사용해서 데이터를 받아 영화 포스터 및 관련 정보 UI구현
- Play 버튼 클릭 시 예고편 재생 변환
          
3. Movie Row (영화 목록을 보여줄 수 있는 UI 기능 구현)
 - TMDB API를 사용해서  여러 영화 목록을 보여주는 UI구현
- 포스터 클릭시 관련 정보를 볼수 있는 모달 기능 구현
 - 영화 목록 슬라이더 기능 구현
		   
✔️ 검색 페이지 (검색 된 영화 목록을 보여줄 수 있는 UI 기능 구현)
- TMDB API를 사용해서  검색된 영화 목록을 보여주는 UI구현
- 검색된 영화 목록 클릭 시 상세 페이지로 이동

✔️ 상세 페이지 (검색 된 영화 목록의 상세 정보를 볼 수 있는 UI 기능 구현)
- 페이지 이동되는 기능만을 구현하여 다른 UI는 구현하지 않았습니다.
