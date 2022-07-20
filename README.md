# Travel Log

## 목차

[1. 프로젝트 소개](#1-프로젝트-소개)<br/>
[2. 프로젝트 실행 방법](#2-프로젝트-실행-방법)<br/>
[3. 프로젝트 주요 기능 설명](#3-프로젝트-주요-기능-설명)<br/>
[4. 프로젝트 구조](#4-프로젝트-구조)<br/>

## 1\. 프로젝트 소개

![travel-log](https://github.com/greencoffee1635/travel-log/blob/develop/docs/resource/result.gif)

- Travel Log는 여행자의 기록을 남기는 사이트이다.

- 언제 어디서든 기록할 수 있도록 모바일 뷰로 구현하였다.

## 2\. 프로젝트 실행 방법

### client (branch : main)

```bash
> git clone https://github.com/greencoffee1635/travel-log.git
> cd travel-log
> yarn install
> yarn start
```

### server (branch : server)

```bash
> git clone https://github.com/greencoffee1635/travel-log.git
> cd travel-log
> yarn install
> node app.js
```

## 3\. 프로젝트 주요 기능 설명

1. `Home` 상단 박스 등장 애니메이션

   - 애니메이션은 좌측부터 순서대로 표시된다.

2. `Home` 상단 숫자가 올라가는 애니메이션

   - 각 숫자는 0부터 시작하고, 세 숫자 모두 2초동안 증가하고 동시에 끝난다.
   - 증가 속도는 점차 감소한다.

3. Naver MAP API

   - `Home`의 지도는 마커로 여러 지역을 동시에 나타낼 수 있다.
   - `Detail`의 지도는 웹에서 이용할 때 발생할 수 있는 불편함을 줄이기 위해 scrollWheel 기능을 차단한다.

4. Swiper

   - Swiper를 이용하여 모바일 화면에서도 편히 이용할 수 있게 한다.

5. Node.js 서버

   - 간단하게 API 연동을 위한 서버를 구축한다.

## 4\. 프로젝트 구조

<details>
<summary><stronng>프로젝트 폴더 구조</strong></summary>

```
   src
┣ common
┃ ┣ assets
┃ ┃ ┣ fonts
┃ ┃ ┃ ┣ Montserrat-Regular.ttf
┃ ┃ ┃ ┗ Montserrat-SemiBold.ttf
┃ ┃ ┣ images
┃ ┃ ┃ ┣ arrow-left.svg
┃ ┃ ┃ ┣ arrow-right.svg
┃ ┃ ┃ ┣ back.svg
┃ ┃ ┃ ┣ home.svg
┃ ┃ ┃ ┣ location-dark.svg
┃ ┃ ┃ ┣ location-empty.svg
┃ ┃ ┃ ┣ location.svg
┃ ┃ ┃ ┣ phone.svg
┃ ┃ ┃ ┣ stamp.png
┃ ┃ ┃ ┣ star.svg
┃ ┃ ┃ ┣ time.svg
┃ ┃ ┃ ┗ traveler.svg
┃ ┃ ┗ index.js
┃ ┣ components
┃ ┃ ┣ elements
┃ ┃ ┃ ┣ Grid.js
┃ ┃ ┃ ┣ Image.js
┃ ┃ ┃ ┣ index.js
┃ ┃ ┃ ┗ Text.js
┃ ┃ ┣ Error.js
┃ ┃ ┣ index.js
┃ ┃ ┣ Line.js
┃ ┃ ┣ Loading.js
┃ ┃ ┣ RoundEdge.js
┃ ┃ ┗ Template.js
┃ ┣ styles
┃ ┃ ┗ GlobalStyle.js
┃ ┗ utils
┃ ┃ ┣ API.js
┃ ┃ ┣ ImageSwiper.js
┃ ┃ ┣ useCountUp.js
┃ ┃ ┗ useFadeIn.js
┣ pages
┃ ┣ detail
┃ ┃ ┣ Detail.js
┃ ┃ ┣ index.js
┃ ┃ ┣ PhotosList.js
┃ ┃ ┗ SpotMarkerMap.js
┃ ┗ home
┃ ┃ ┣ Background.js
┃ ┃ ┣ Home.js
┃ ┃ ┣ index.js
┃ ┃ ┣ Logo.js
┃ ┃ ┣ Metrics.js
┃ ┃ ┣ MultipleMarkerMap.js
┃ ┃ ┣ Navbar.js
┃ ┃ ┣ PlaceList.js
┃ ┃ ┣ TravelLog.js
┃ ┃ ┗ TravelPlan.js
┣ App.js
┗ index.js
```

</details>
<br/>
