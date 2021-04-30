# MoGakCo_Web_1

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
