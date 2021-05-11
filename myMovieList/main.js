const title = document.querySelector('.title');
const ReleaseD = document.querySelector('.ReleaseD');
const gr = document.querySelector('.genre');
const act = document.querySelector('.actors');

function movieData(name, poster, ReleaseDate, genre, actors) {
  this.name = name;
  this.poster = poster;
  this.ReleaseDate = ReleaseDate;
  this.genre = genre;
  this.actors = actors;
}
const m1Img = new Image();
//m1Img.src = '이미지경로';
const m2Img = new Image();
const m3Img = new Image();

//body.appendChild(m1Img);
const m1 = new movieData(
  'About Time',
  m1Img,
  '2013.08.08',
  'Romance, Fantasy',
  'DomhnallGleeson & RachelMcAdams & BillNighy & TomHollander & MargotRobbie & LindsayDuncan'
);
const m2 = new movieData(
  'Avengers: Endgame',
  m2Img,
  '2019.04.22',
  'Action, Fantasy, Adventure',
  'RobertDowneyJr. & ChrisEvans & MarkRuffalo & ChrisHemsworth & ScarconsttJohansson'
);
const m3 = new movieData(
  'Little Forest(KR)',
  m3Img,
  '2018.02.28',
  'Comedy, Drama',
  'KimTaeri & MooSori & RyuJunyeol & JinKijoo'
);

function onClickM1() {
  title.innerHTML = m1.name;
  ReleaseD.innerHTML = m1.ReleaseDate;
  gr.innerHTML = m1.genre;
  act.innerHTML = m1.actors;
}

function onClickM2() {
  title.innerHTML = m2.name;
  ReleaseD.innerHTML = m2.ReleaseDate;
  gr.innerHTML = m2.genre;
  act.innerHTML = m2.actors;
}

function onClickM3() {
  title.innerHTML = m3.name;
  ReleaseD.innerHTML = m3.ReleaseDate;
  gr.innerHTML = m3.genre;
  act.innerHTML = m3.actors;
}
