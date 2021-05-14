const orderInput = document.querySelector('.orderInput');
const orderBtn = document.querySelector('.btn');
const answerBox = document.querySelector('.answer');

const orderSet = ['안녕', '공부대신해줄래?', '나랑놀자', '오늘날씨어때?'];
const answerSet = [
  { order: '안녕', answer: '반갑다냥' },
  { order: '공부대신해줄래?', answer: '네 공부는 네가 해야지냥' },
  { order: '나랑놀자', answer: '좋아냥! 뭐하고 놀까냥??' },
  { order: '오늘날씨어때?', answer: '잘모르겠다냥..날씨정보를 보고오겠다냥' },
];

function initInputBox() {
  orderInput.value = '';
}

function filterAnswer(data) {
  const answerFilter = answerSet.filter((obj) => obj.order === data);
  return answerFilter;
}

function getInputData() {
  const inputData = orderInput.value;
  console.log(`입력한 내용 : ${inputData}`);
  initInputBox();
  return inputData;
}

function pushAnswer() {
  const orderData = getInputData();
  const orderFilter = orderSet.filter((obj) => obj === orderData);
  console.log(orderFilter);
  if (orderFilter[0] === orderData) {
    console.log(
      `챗봇의 질문리스트에 입력한 지시어 '${orderData}' 가 존재합니다.`
    );
    const answerF = filterAnswer(orderData);
    console.log(answerF);
    answerBox.innerHTML = answerF[0].answer;
    console.log('챗봇이 대답합니다.');
    console.log(
      `입력한 지시어에 해당하는 챗봇의 대답은 '${answerBox.innerHTML}' 입니다.`
    );
  } else {
    console.log(
      `챗봇의 질문리스트에 입력한 지시어 '${orderData}'가 존재하지 않습니다.`
    );
    answerBox.innerHTML = '뭐라는지 모르겠다냥';
    console.log(
      `입력한 지시어에 해당하는 챗봇의 대답은 '${answerBox.innerHTML}' 입니다.`
    );
  }
}

orderBtn.addEventListener('click', pushAnswer);
