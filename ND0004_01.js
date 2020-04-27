var SVG = Snap('#my-svg');

// 최상위 그룹
var Paper = SVG.g();

//이미지
var home = Paper.image('img/home.png', 0, 0, 26, 24).toDefs();
var migi = Paper.image('img/migi.png', 0, 0, 21, 23).toDefs();
var con01 = Paper.image('img/con01.png', 0, 0, 40, 40).toDefs();
var con02 = Paper.image('img/con02.png', 0, 0, 40, 40).toDefs();
var con03 = Paper.image('img/con03.png', 0, 0, 40, 40).toDefs();
var con04 = Paper.image('img/con04.png', 0, 0, 40, 40).toDefs();
var play = Paper.image('img/play.png', 0, 0, 27, 30).toDefs();
var pause = Paper.image('img/pause.png', 0, 0, 27, 27).toDefs();
var stop = Paper.image('img/stop.png', 0, 0, 24, 24).toDefs();

//오디오
var aud01 = new Audio('aud/aud01.wav');

// SVG 외곽선
Paper.rect(0, 0, 360, 640, 6).attr({
  'stroke': 'gray',
  'fill': 'none'
});

// 상단 바 부분
var topBox = Paper.g();

topBox.path('M1 40 L359 40 L359 0 Q358 1 358 1 L1 1').attr({
  'fill': '#FDE8E5'
});

home.use().transform('t14, 8').appendTo(topBox).click(handlerHome).attr({
  'cursor': 'pointer'
});

function handlerHome() {
  location.replace('ND0004.html');
}

topBox.text(180, 30, 'D04').attr({
  'font-size': 22,
  'text-anchor': 'middle'
});

migi.use().transform('t325, 9').appendTo(topBox).click(handlerNext).attr({
  'cursor': 'pointer'
});

function handlerNext() {
  location.replace('ND0004_02.html');
}

// 상단
var topArea = Paper.g();

topArea.text(20, 85, '[D01] 사실에 대해 묻고 답하기').attr({
  'font-size': 22,
});

// 하단
var bottomArea = Paper.g();

con01.use().transform('t10, 120').appendTo(bottomArea);

var t1 = topArea.text(60, 150, ['あれ、今日も 待つ？', '어? 오늘도 기다려?']).attr({
  'font-size': 25
});
t1.selectAll('tspan')[1].attr({
  x: 60,
  y: 185,
  'font-size': 17,
  'fill': 'gray'
});

con02.use().transform('t10, 200').appendTo(bottomArea);

var t2 = topArea.text(57, 230, ['うん、待つ。', '응, 기다려.']).attr({
  'font-size': 25
});
t2.selectAll('tspan')[1].attr({
  x: 60,
  y: 265,
  'font-size': 17,
  'fill': 'gray'
});

con03.use().transform('t10, 285').appendTo(bottomArea);

var t3 = topArea.text(60, 315, ['すごい。', '彼女と よく 会う？', '대단하다. 여자친구랑 자주 만나?']).attr({
  'font-size': 25
});
t3.selectAll('tspan')[1].attr({
  x: 60,
  y: 355
});
t3.selectAll('tspan')[2].attr({
  x: 60,
  y: 390,
  'font-size': 17,
  'fill': 'gray'
});

con04.use().transform('t10, 410').appendTo(bottomArea);

var t4 = topArea.text(57, 440, ['うん、毎日 会う。', '응, 매일 만나.']).attr({
  'font-size': 25
});
t4.selectAll('tspan')[1].attr({
  x: 60,
  y: 475,
  'font-size': 17,
  'fill': 'gray'
});

// 음원
bottomArea.rect(30, 575, 300, 40, 6).attr({
  'stroke': 'gray',
  'fill': 'white'
});

play.use().transform('t70, 580').appendTo(bottomArea).click(playAudio01).attr({
  'cursor': 'pointer',
});

function playAudio01() {
  aud01.play();
}

pause.use().transform('t170, 581').appendTo(bottomArea).click(pauseAudio01).attr({
  'cursor': 'pointer',
});

function pauseAudio01() {
  aud01.pause();
}

stop.use().transform('t270, 584').appendTo(bottomArea).click(stopAudio01).attr({
  'cursor': 'pointer',
});

function stopAudio01() {
  aud01.pause();
  aud01.currentTime = 0;
}
