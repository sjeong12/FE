# Sutube : Youtube Clone Coding
[:eyes:이슈트래킹](https://github.com/sjeong12/Sutube-youtube-clone-coding/issues) [:pencil2:학습일지](https://sewcode.tistory.com/category/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/%EC%88%98%ED%8A%9C%EB%B8%8C%20%3A%20%EC%9C%A0%ED%8A%9C%EB%B8%8C%20%ED%81%B4%EB%A1%A0%EC%BD%94%EB%94%A9)
<br/><br/>

## 소개

### | 화면 구성
모바일 유튜브를 다음과 같이 반응형으로 구현하였습니다.
<br/><br/>

- 작은 화면(기본화면 / 더보기 / 댓글) - 확장 화면

<img src="https://user-images.githubusercontent.com/45448572/125165491-1cf2fb80-e1d2-11eb-9021-e3f51d27f53d.png" height="300px"> <img src="https://user-images.githubusercontent.com/45448572/125165511-3bf18d80-e1d2-11eb-93e1-a24ada7960e8.png" height="300px"> <img src="https://user-images.githubusercontent.com/45448572/125165520-457af580-e1d2-11eb-8958-0ca3c8a1db79.png" height="300px"> &nbsp;&nbsp;&nbsp;&nbsp;  <img src="https://user-images.githubusercontent.com/45448572/125165426-c8e81700-e1d1-11eb-9a31-6d52eee52df0.png" height="300px">
<br/><br/>

- 넓은 화면(기본화면 / 댓글+더보기)

<img src="https://user-images.githubusercontent.com/45448572/125165072-4e6ac780-e1d0-11eb-9541-8832fde03867.png" height="355px"> &nbsp;&nbsp; <img src="https://user-images.githubusercontent.com/45448572/125165116-896cfb00-e1d0-11eb-8415-a1886a8f64a2.png" height="355px">
<br/><br/>


### | 커스텀 컨트롤러
`<video>`태그를 활용하여 Custom controls, Progress bar, Story board를 구현하였습니다.
<br/><br/>

<img src="https://user-images.githubusercontent.com/45448572/125165655-d6ea6780-e1d2-11eb-982f-2fbbc11d5149.png" height="230px"> &nbsp;&nbsp; <img src="https://user-images.githubusercontent.com/45448572/125165679-f4b7cc80-e1d2-11eb-995e-da0dce916b3b.png" height="230px">
<br/><br/>


### | 광고
영상 재생중 광고는 1~5번 순서대로 Progress bar에 표시된 시점(○,△)에 등장합니다.  
중간 광고는 txt파일로 부터 읽어온 광고 목록에 따라 차례로 등장하며, `localStorage`에 시청 정보를 기록하여 중복 재생을 방지합니다. (AdBlock 등 광고차단 확장앱에 영향을 받을 수 있습니다)
<br/><br/>

- 영상 재생 중(img 광고) - 중간 광고(text 광고)

<img src="https://user-images.githubusercontent.com/45448572/125193026-67818000-e285-11eb-8e02-a27b70b2b3d2.png" height="370px"> &nbsp;&nbsp; <img src="https://user-images.githubusercontent.com/45448572/125165997-78be8400-e1d4-11eb-852e-0107775016fe.png" height="370px">
<br/><br/><br/><br/>


### | 로깅
Cookie를 활용하여 비로그인 유저에게 uuid를 부여하고 식별합니다.
`/log` 경로에 YYYY-MM-DD.txt 파일을 생성하고, 다음과 같이 로그를 쌓습니다.

이제 로그가 남는 것을 확인 했으니, 로깅이 필요한 이벤트를 선별하고, 적절한 로그 형태를 설계해보겠습니다.
추후에는 로그를 쉽게 확인할 수 있도록, 분석 툴을 도입할 계획입니다.
<br/><br/>

```
{"timestamp":"2024-05-11 13:25:16.0843","action":"클릭","target":"다음 영상 시청","msg":"video4.mp4","uuid":"2c606d8a-613f-43c6-9499-6afb9708e7a4"}
{"timestamp":"2024-05-11 13:25:24.0771","action":"클릭","target":"다음 영상 시청","msg":"video1.mp4","uuid":"2c606d8a-613f-43c6-9499-6afb9708e7a4"}
{"timestamp":"2024-05-11 13:29:34.0677","action":"클릭","target":"다음 영상 시청","msg":"video2.mp4","uuid":"2c606d8a-613f-43c6-9499-6afb9708e7a4"}
{"timestamp":"2024-05-11 13:29:37.0052","action":"클릭","target":"다음 영상 시청","msg":"video3.mp4","uuid":"2c606d8a-613f-43c6-9499-6afb9708e7a4"}
{"timestamp":"2024-05-11 13:32:01.0677","action":"클릭","target":"다음 영상 시청","msg":"video4.mp4","uuid":"2c606d8a-613f-43c6-9499-6afb9708e7a4"}
```
<br/><br/>


## 실행
express.js 패키지 설치
```bash
cd server
npm install
```
서버 실행
```bash
nodemon ./server/server.js
```
이후 localhost:8080에 접속하여 확인
<br/><br/><br/><br/>


## 기술
- HTML
- JS
- CSS
- Node.js
- Express.js
<br/><br/><br/><br/>


## 개발 예정
- 다음 영상 목록에 실제 다음 영상의 썸네일 제공
- 광고 시청 로그(유저 정보, 광고 정보, 시청 시간 등) 설계
- 로그 분석 툴 도입
