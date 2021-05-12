# MoGakCo_Web_JS

코딩 커뮤니티 '코뮤니티'에서 진행하는 모각코 웹 스터디(JS)

모각코 Web 스터디 챗봇만들기-1일차
챗봇의 html과 css 구현
주요 기능

- 사용자가 내린 명령에 따라서 응답하는 부분
- 챗봇에게 명령을 내리는 input
- 명령을 적은 후 실행시키는 button

모각코 Web 스터디 챗봇만들기-2일차
index.html 코드의 DOM 구조 그리기

모각코 Web 스터디 챗봇만들기-3일차

1. 모각코 삼행시 버튼 만들기
2. '모' 버튼, '각' 버튼, '코' 버튼을 누르면 각 운에 맞는 텍스트로 변경되도록 구현하기

index.html

- h3 태그를 사용해서 '모', '각', '코' 삼행시가 나타날 부분을 구현
- '모', '각', '코' 버튼에 각각 class 이름을 지정하고 각각 onclick 함수 생성하여 click 이벤트 처리

main.js

- getElementsByClassName 사용하여 js파일에서 HTML파일의 h3 태그 사용
- 버튼의 click 이벤트를 처리할 함수 생성 (onClickM,onClickG, onClickC)
- 각각의 onclick 함수에서 innerText 통해 버튼에 click 이벤트가 발생했을때 h3 내용 변경

모각코 Web 스터디 챗봇만들기-9일차

1. 좋아하는 영화제목을 가진 버튼 만들기
2. 각각의 버튼을 눌렀을 때 해당 영화의 정보가 나열되도록 구현하기

main.js

- 객체 : key와 value로 구성된 프로퍼티의 정렬되지 않은 집합
- ex) const movie={name : "", genre : ""}
- 객체의 프로퍼티 참조하는 방법 2가지
- 1. 객체이름.프로퍼티 이름 ex) movie.name
- 2. 객체이름["프로퍼티이름"] ex) movie["genre"]
- 프로퍼티 추가
- : 객체이름.추가할프로퍼티이름=value; ex) movie.date="12/3";
- 프로퍼티 삭제
- : delete 객체이름.삭제할프로퍼티이름; ex) delete movie.name;

모각코 Web 스터디 챗봇만들기-10일차

1. '전화걸기' 라는 이름의 버튼 생성
2. 버튼을 누르면 2초 뒤에 이름과 전화번호 출력

오늘의 개념
이벤트란?
웹을 살아 숨쉬게 만드는 요소
이벤트 생성이란?
예를 들어, 버튼을 클릭했을 때 특정 결과가 나오게끔 설정하는 것
이벤트 설정 방법

- <button onclick=click_event()>click me</button>
  위 방법처럼 함수를 직접 연결하는 방식은 유지보수를 어렵게 하기 때문에 별로 좋지 않다.
- function onClick(){}
- document.getElementById('clickMe').addEventListener('click',onClick);
  addEventListner와 callback 콜백함수 사용

콜백함수란?
다른 함수가 실행을 끝낸 뒤 실행되는 함수
특정 시점 이전까지는 실행되지 않는 함수

- callback 함수를 사용하는 방법 1
  setTimeout(함수, 시간) 을 사용하면 매개변수로 넣은 시간이 지날 때까지 해당 함수는 실행 안됨

버튼이벤트 이외에도 텍스트에 따른 이벤트, 스크롤 이벤트, 타이핑 이벤트 등의 다양한 이벤트 존재
