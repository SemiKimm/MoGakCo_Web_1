const M = document.getElementsByClassName('M');
const G = document.getElementsByClassName('G');
const C = document.getElementsByClassName('C');

function onClickM() {
  M[0].innerText = '모처럼이니';
  console.log("'M[0].innerText = '모처럼이니';' 실행");
}
function onClickG() {
  G[0].innerText = '각잡고 열심히 하면';
  console.log("'G[0].innerText = '각잡고 열심히 하면';' 실행");
}
function onClickC() {
  C[0].innerText = '코린이 탈출이다';
  console.log("'C[0].innerText = '코린이 탈출이다';' 실행");
}
