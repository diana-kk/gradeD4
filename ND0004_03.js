var SVG = Snap('#my-svg');

// 최상위 그룹
var Paper = SVG.g();

//이미지
var home = Paper.image('img/home.png', 0, 0, 26, 24).toDefs();
var migi = Paper.image('img/migi.png', 0, 0, 21, 23).toDefs();
var con09 = Paper.image('img/con09.png', 0, 0, 40, 40).toDefs();
var con10 = Paper.image('img/con10.png', 0, 0, 40, 40).toDefs();
var con11 = Paper.image('img/con11.png', 0, 0, 40, 40).toDefs();
var con12 = Paper.image('img/con12.png', 0, 0, 40, 40).toDefs();
var play = Paper.image('img/play.png', 0, 0, 27, 30).toDefs();
var pause = Paper.image('img/pause.png', 0, 0, 27, 27).toDefs();
var stop = Paper.image('img/stop.png', 0, 0, 24, 24).toDefs();

//오디오
var aud01 = new Audio('aud/aud03.wav');

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

migi.use().transform('t325, 9').appendTo(topBox).click(handlerHome).attr({
  'cursor': 'pointer'
});

// 상단
var topArea = Paper.g();

topArea.text(20, 85, '[D03] 계획에 대해 묻고 답하기').attr({
  'font-size': 22,
});

// 하단
var bottomArea = Paper.g();

con09.use().transform('t10, 120').appendTo(bottomArea);

var t1 = topArea.text(60, 150, ['もしもし？ みほ？', '今日、何 する？', '여보세요? 미호? 오늘 뭐 해?']).attr({
  'font-size': 25
});
t1.selectAll('tspan')[1].attr({
  x: 60,
  y: 190
});
t1.selectAll('tspan')[2].attr({
  x: 60,
  y: 225,
  'font-size': 17,
  'fill': 'gray'
});

con10.use().transform('t10, 247').appendTo(bottomArea);

var t2 = topArea.text(60, 275, ['あ、たくみ？', '部屋の 掃除 する。', '아, 타쿠미? 방 청소해.']).attr({
  'font-size': 25
});
t2.selectAll('tspan')[1].attr({
  x: 60,
  y: 315
});
t2.selectAll('tspan')[2].attr({
  x: 60,
  y: 350,
  'font-size': 17,
  'fill': 'gray'
});

con11.use().transform('t10, 370').appendTo(bottomArea);

var t3 = topArea.text(60, 400, ['何で？ 家に 誰か 来る？', '왜? 집에 누가 와?']).attr({
  'font-size': 25
});
t3.selectAll('tspan')[1].attr({
  x: 60,
  y: 435,
  'font-size': 17,
  'fill': 'gray'
});

con12.use().transform('t10, 458').appendTo(bottomArea);

var t4 = topArea.text(57, 485, ['うん、友達が 来る。', '응, 친구가 와.']).attr({
  'font-size': 25
});
t4.selectAll('tspan')[1].attr({
  x: 60,
  y: 520,
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
