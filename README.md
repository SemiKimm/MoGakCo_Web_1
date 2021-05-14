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

모각코 Web 스터디 챗봇만들기- 10일차

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

모각코 Web 스터디 챗봇만들기- 11일차

1. 1일차때 만든 챗봇을 가지고 사용자의 입력을 받아 특정 텍스트가 들어왔을 때, 자신이 출력하거나 바꾸고 싶은 요소들을 console.log()로 출력

chatBotDay11.js

- 변수 및 함수 설명

const orderSet : 챗봇의 질문 데이터베이스 역할을 수행합니다.
const answerSet : 챗봇의 답변 데이터베이스 역할을 수행합니다.
(orderSet과 answerSet에 겹치는 부분 존재 -> orderSet 불필요 -> 코드 수정 필요)
initInputBox() : 지시어를 입력한 후 '시키기' 버튼을 눌렀을 때 input 박스 안의 내용이 초기화 되도록 합니다.
filterAnswer(data) : 입력한 지시어에 해당하는 답변을 답변 데이터베이스에서 filter() 메서드를 사용하여 구합니다.
getInputData() : input 박스에 입력한 내용을 .value를 사용하여 가져옵니다.
pushAnswer() : 위의 함수들을 포함하여 최종적으로 '시키기' 버튼을 눌렀을 때 동작이 진행되는 함수입니다. 버튼을 눌렀을 때 답변이 고양이 사진위의 박스 안에 출력되도록 하는 부분도 이 함수에서 제어합니다.

- consol에 출력되는 내용 구성
  과제 이해 : input에 text를 입력했을때 발생하는 변경사항들을 consol에 출력한다.
  (지시어를 입력하고 '시키기' 버튼을 눌렀을 때 콘솔에 내용이 출력됩니다.)

1.  챗봇이 질문을 제대로 이해하고 답변을 하는 경우

    - input에 입력한 내용 출력 (.value를 사용해서 데이터를 가져왔습니다.)
    - 질문리스트에 존재하는 지시어 객체 내용 출력 (객체 배열?을 사용하여 일종의 가상 데이터베이스?를 임의로 설정한 후, 입력한 input 내용을 filter() 메서드를 사용하여 가상 데이터베이스?에 지시어가 존재하는지 찾습니다.)
    - 지시어가 챗봇의 질문리스트에 존재한다는 내용 출력
    - 챗봇 답변리스트에 존재하는 답변 객체 내용 출력 (질문리스트와 동일한 방법으로 filter를 사용하여 지시어에 해당하는 답변을 찾아서 출력합니다.)

2.  챗봇이 질문을 제대로 이해하지 못한 경우
    - input에 입력한 내용 출력 (.value를 사용해서 데이터를 가져왔습니다.)
    - 챗봇의 질문리스트에 입력한 지시어가 없다는 내용 출력
    - 챗봇의 대답 '뭐라는지 모르겠다냥' 이라는 내용 출력

모각코 Web 스터디 챗봇만들기- 12일차

1. 특정경우에 따라 바뀌는 style 적용하기

- '불꺼주라'와 '119불러줘!'라는 지시어가 입력되었을 때, 배경색이 불꺼주라는 검정색으로 119불러줘!는 붉은색으로 바뀌고 답변 박스의 글자색은 흰색으로 변경되도록 코드를 추가하였습니다.
- 배경색이 흰색외의 색상으로 변경된뒤에 또 다른 지시어가 입력되면 질문리스트에 있는 지시어이든 없는 지시어이든 배경색이 기본 색인 흰색으로 변경되고 답변 박스의 글자색은 검정색으로 변경되도록 구현하였습니다.
