

var font;

var hoursV = [];
var minutesV = [];
var secV = [];
var colon1 = [];
var colon2 = [];
var timeChange = -1;
var done = false;
var factor = 36;
var sizeFont = 10;
var prevSec = 0;

function preload() {
  font = loadFont('./js/AvenirNextLTPro-Demi.otf');
}
function setup() {

  createCanvas(window.innerWidth, window.innerHeight);
  background('rgba(255,255,255,0.1)');
  var date = new Date();
  var sec = date.getSeconds().toString();
  var min = date.getMinutes().toString();
  var hour = date.getHours().toString();

  prevSec = sec;

  if (sec < 10) {
    sec = "0" + sec;
  }

  if (min < 10) {
    min = "0" + min;
  }

  if (hour < 10) {
    hour = "0" + hour;
  }

  const col = ':';

  var points = font.textToPoints(sec, window.innerWidth / 2 - (sec.length * window.innerWidth / factor), window.innerHeight / 2, window.innerWidth / 4 - (sec.length * sizeFont));
  addSec(points);

  var points = font.textToPoints(min, window.innerWidth / 2 - (min.length * window.innerWidth / factor), window.innerHeight / 2, window.innerWidth / 4 - (min.length * sizeFont));
  addMins(points);

  var points = font.textToPoints(hour, window.innerWidth / 2 - (hour.length * window.innerWidth / factor), window.innerHeight / 2, window.innerWidth / 4 - (hour.length * sizeFont));
  addHours(points);

  var points = font.textToPoints(col, window.innerWidth / 2 - (col.length * window.innerWidth / factor), window.innerHeight / 2, window.innerWidth / 4 - (col.length * sizeFont));
  addCol1(points);
  addCol2(points);
}

function draw() {
  clear();
  timeChange += 1;
  background('rgba(255,255,255,0.01)');

  const currSec = new Date().getSeconds();

  if (currSec > prevSec || currSec == "0") {

    if (!done || currSec == 1) {
      changeSeconds();
    }

    if (currSec == 0) {
      done = true;
    }
    else {
      done = false;
    }

    prevSec = currSec;

  }

  show();

  // if(timeChange == 60) {
  //   this.changeSeconds();
  //   done = false;
  //   timeChange = 0;
  // }


}

function show() {
  for (var i = 0; i < hoursV.length; i++) {
    hoursV[i].behaviours();
    hoursV[i].update();
    hoursV[i].show();
  }

  for (var i = 0; i < colon1.length; i++) {
    colon1[i].behaviours();
    colon1[i].update();
    colon1[i].show();
  }

  for (var i = 0; i < minutesV.length; i++) {
    minutesV[i].behaviours();
    minutesV[i].update();
    minutesV[i].show();
  }

  for (var i = 0; i < colon2.length; i++) {
    colon2[i].behaviours();
    colon2[i].update();
    colon2[i].show();
  }

  for (var i = 0; i < secV.length; i++) {
    secV[i].behaviours();
    secV[i].update();
    secV[i].show();
  }

}


function changeHour() {
  var date = new Date();
  var time = date.getHours().toString();
  if (time < 10) {
    time = "0" + time;
  }
  var points = font.textToPoints(time, window.innerWidth / 2 - (time.length * window.innerWidth / factor), window.innerHeight / 2, window.innerWidth / 4 - (time.length * sizeFont));
  addHours(points);
}

function changeMinutes() {
  var date = new Date();
  var time = date.getMinutes().toString();
  if (time < 10) {
    time = "0" + time;
  }

  if (time == '00') {
    changeHour();
  }

  var points = font.textToPoints(time, window.innerWidth / 2 - (time.length * window.innerWidth / factor), window.innerHeight / 2, window.innerWidth / 4 - (time.length * sizeFont));
  addMins(points);
}

function changeSeconds() {
  var date = new Date();
  var time = date.getSeconds().toString();
  if (time < 10) {
    time = "0" + time;
  }
  if (time == '00') {
    changeMinutes();
  }
  var points = font.textToPoints(time, window.innerWidth / 2 - (time.length * window.innerWidth / factor), window.innerHeight / 2, window.innerWidth / 4 - (time.length * sizeFont));
  addSec(points);
}


function addHours(points) {
  hoursV = [];
  for (var i = 0; i < points.length; i++) {
    var temp = points[i];
    var v = new vehicle(temp.x - 170, temp.y - window.innerHeight / 4, "hour");
    hoursV.push(v);
  }
}

function addMins(points) {
  minutesV = [];
  for (var i = 0; i < points.length; i++) {
    var temp = points[i];
    var v = new vehicle(temp.x - 25, temp.y - window.innerHeight / 4, "min");
    minutesV.push(v);
  }
}

function addSec(points) {
  secV = [];
  for (var i = 0; i < points.length; i++) {
    var temp = points[i];
    var v = new vehicle(temp.x + 115, temp.y - window.innerHeight / 4, "sec");
    secV.push(v);
  }
}

function addCol1(points) {
  for (var i = 0; i < points.length; i++) {
    var temp = points[i];
    var v = new vehicle(temp.x - 75, temp.y - window.innerHeight / 4, "colon");
    colon1.push(v);
  }
}

function addCol2(points) {
  for (var i = 0; i < points.length; i++) {
    var temp = points[i];
    var v = new vehicle(temp.x + 70, temp.y - window.innerHeight / 4, "colon");
    colon2.push(v);
  }
}

