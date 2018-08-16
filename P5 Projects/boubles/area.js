
var engine = Matter.Engine.create();
var world = engine.world;
var f = 0;

engine.world.gravity.x = 0;
engine.world.gravity.y = -0.2;

var b = [];
var p = [];

function setup(){
  createCanvas(window.innerWidth,window.innerHeight);
  background('rgba(255,255,255,0.1)');
  for(var i = 0; i<1; i++){
    var c = new circles();
    b.push(c);
  }
  // for(var i = 0; i < window.innerWidth / 50; i++){
  //   var peng = new Pengesa(i*50 + 10 , 200);
  //   var peng1 = new Pengesa(i*50 + 35 , 300);
  //   var peng2 = new Pengesa(i*50 + 10 , 400);
  //   var peng3 = new Pengesa(i*50 + 35 , 100);
  //   p.push(peng);
  //   p.push(peng1);
  //   p.push(peng2);
  //   p.push(peng3);
  // }
}
function draw(){
  f+=0.5;
  clear();
  background('rgba(255,255,255,0.1)');
  Matter.Engine.update(engine);

  for(var i = 0; i < p.length; i++){
    p[i].show();
  }

  for(var i = 0; i < b.length; i++){
    b[i].show();
  }
  check();
  if(f%10 == 0){
    for(var i = 0 ; i < 3; i++){
      var c = new circles();
      b.push(c);
    }

  }
}

function check(){
  for(var i = b.length-1; i>=0; i--){
    var pos = b[i].getPos();
    if(pos.x > window.innerWidth || pos.x < 0 || pos.y < 0){
      Matter.World.remove(world, b[i].body);
      b.splice(i,1);
      i--;
    }
  }
}
