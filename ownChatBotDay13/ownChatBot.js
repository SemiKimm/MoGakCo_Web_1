const orderInput = document.querySelector('.orderInput');
const orderBtn = document.querySelector('.btn');
const answerBox = document.querySelector('.answer');
let count = 0;
const orderSet = [
  '안녕',
  '공부대신해줄래?',
  '나랑놀자',
  '불꺼주라',
  '오늘날씨어때?',
  '119불러줘!',
];
const answerSet = [
  {
    order: '안녕',
    answer: '반갑다냥',
    colorBack: '#ffffff',
    colorAsBox: '#000000',
  },
  {
    order: '공부대신해줄래?',
    answer: '네 공부는 네가 해야지냥',
    colorBack: '#ffffff',
    colorAsBox: '#000000',
  },
  {
    order: '나랑놀자',
    answer: '좋아냥! 뭐하고 놀까냥??',
    colorBack: '#ffffff',
    colorAsBox: '#000000',
  },
  {
    order: '불꺼주라',
    answer: '알겠다냥',
    colorBack: '#000000',
    colorAsBox: '#ffffff',
  },
  {
    order: '오늘날씨어때?',
    answer: '잘모르겠다냥..날씨정보를 보고오겠다냥',
    colorBack: '#ffffff',
    colorAsBox: '#000000',
  },
  {
    order: '119불러줘!',
    answer: '사건발생했다냥!긴급!!',
    colorBack: '#ff0000',
    colorAsBox: '#ffffff',
  },
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
  initInputBox();
  return inputData;
}
function changeBackground(answerD) {
  document.querySelector('.body').style.backgroundColor = answerD[0].colorBack;
  answerBox.style.color = answerD[0].colorAsBox;
}
function defaultBack() {
  document.querySelector('.body').style.backgroundColor = '#ffffff';
  answerBox.style.color = '#000000';
}

function countOrder1(orderD) {
  if (orderD === '안녕') {
    if (count == 0) {
      count++;
      answerBox.innerHTML = '반갑다냥';
    } else if (count == 1) {
      count++;
      answerBox.innerHTML = '아까 인사했다냥';
      document.querySelector('.body').style.backgroundColor = '#ffff00';
    } else {
      answerBox.innerHTML = '계속 인사했는데 왜그러냥!';
      document.querySelector('.body').style.backgroundColor = '#ff0000';
    }
  }
  console.log(count);
}

function pushAnswer() {
  const orderData = getInputData();
  const orderFilter = orderSet.filter((obj) => obj === orderData);
  console.log(orderFilter);
  if (orderFilter[0] === orderData) {
    const answerF = filterAnswer(orderData);
    console.log(answerF);
    answerBox.innerHTML = answerF[0].answer;
    changeBackground(answerF);
    countOrder1(orderData);
  } else {
    defaultBack();

    answerBox.innerHTML = '뭐라는지 모르겠다냥';
  }
}

orderBtn.addEventListener('click', pushAnswer);
