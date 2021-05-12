const rColor = '#ff0000';
const gColor = '#21f01a';
let btnState = false;

function pushData() {
  document.getElementById('name').innerHTML = '늦깍이 코린이';
  document.getElementById('phoneNum').innerHTML = '010.1234.5678';
}
function deleteData() {
  document.getElementById('name').innerHTML = '통화 시간';
  document.getElementById('phoneNum').innerHTML = '13:--';
}
function onClickBtn() {
  btnState = !btnState;
  console.log(btnState);
  if (btnState === true) {
    btn = document.getElementById('callBtn');
    btn.innerText = '전화거는중';
    btn.style.backgroundColor = redColor;
    btn.style.borderColor = redColor;
    setTimeout(pushData, 2000);
  } else {
    btn.innerText = '전화종료';
    deleteData();
  }
}

document.getElementById('callBtn').addEventListener('click', onClickBtn);
