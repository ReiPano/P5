
var font ;
var vehicles = [];
var time = 0;
var done = false;
var emrat = ['rei', 'niki', 'alqi', 'xhuli' , 'coding_train'];
var aktuali = 3;

function preload(){
  font = loadFont('../js/AvenirNextLTPro-Demi.otf')
}

function setup(){

  createCanvas(window.innerWidth,window.innerHeight);
  background(51);
  var points = font.textToPoints(emrat[0],  window.innerWidth/2 - (emrat[aktuali].length * window.innerWidth/26), window.innerHeight/2, window.innerWidth/4-(emrat[aktuali].length * 10));
  aktuali++;

  for(var i = 0; i<points.length; i++){
    var temp = points[i];
    var v = new vehicle(temp.x, temp.y);
    vehicles.push(v);
  }
}

function draw(){
  time += 1;
  background(51 ,0, 10);
  for(var i = 0; i<vehicles.length;i++){
    vehicles[i].behaviours();
    vehicles[i].update();
    vehicles[i].show();
  }
  if(time == 600){
    this.changeText();
    time = 0;
    done = false;
  }
}



function changeText(){
  var length = emrat[aktuali].length;
  var points = font.textToPoints(emrat[aktuali],  window.innerWidth/2 - (emrat[aktuali].length * window.innerWidth/25), window.innerHeight/2, window.innerWidth/4-(emrat[aktuali].length * 10));
  aktuali++;
  if(aktuali>4){
    aktuali=0;
  }
  console.log(points.length);
  console.log(vehicles.length);


  if(points.length > vehicles.length && done == false){
    done=true;
    var j;
    console.log("a");
    for(var i = 0; i < vehicles.length; i++){
      vehicles[i].changeTarget(points[i].x, points[i].y);
      j=i;
    }
    for(var k = j; k<points.length; k++){
      var temp = points[k];
      var v = new vehicle(temp.x, temp.y);
      vehicles.push(v);
    }
  }


  if(points.length < vehicles.length && done == false){
    done=true;
    vehicles = vehicles.slice(0,points.length);
    console.log("b");
    for(var i = 0; i < points.length; i++){
      vehicles[i].changeTarget(points[i].x, points[i].y);
    }
  }



  if(points.length == vehicles.length && done == false){
    console.log("c");
    done=true;
    for(var i = 0; i < vehicles.length; i++){
      vehicles[i].changeTarget(points[i].x, points[i].y);
    }
  }


}
