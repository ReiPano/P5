

function vehicle(x,y){
  if (x > window.innerWidth / 2) {
    var currx = random(window.innerWidth / 2 + 150 ,window.innerWidth / 2 + 250);
  }

  else {
    var currx = random(window.innerWidth / 2 - 350 ,window.innerWidth / 2 - 250);
  }
  
  var curry = random(100,200);
  this.pos = createVector(currx,curry);
  this.target = createVector(x,y);
  this.vel = p5.Vector.random2D();
  this.acc = createVector();
  this.r = 8;
  this.maxS = 5;
  this.maxF = 10;
}

vehicle.prototype.changeTarget = function(x,y){
  this.target = createVector(x,y);
}

vehicle.prototype.update = function(){
  this.pos.add(this.vel);
  this.vel.add(this.acc);
  this.acc.mult(0);
}

vehicle.prototype.show = function(){
  colorMode(HSB);
  stroke(this.pos.x%255, this.pos.y%255, 255);
  strokeWeight(this.r);
  point(this.pos.x , this.pos.y);
}

vehicle.prototype.behaviours = function() {
  var seek = this.arrive(this.target);
  this.applyForce(seek);

  var mouse = createVector(mouseX , mouseY);
  var flee = this.flee(mouse);
  flee.mult(5);
  this.applyForce(flee);
}

vehicle.prototype.applyForce = function(f) {
  this.acc.add(f);
}


vehicle.prototype.arrive = function(t) {
  var desired = p5.Vector.sub(t,this.pos);
  var d = desired.mag();
  var speed = this.maxS;
  if(d<100){
    speed = map(d,0,10,0,this.maxS);
  }
  desired.setMag(speed);
  var steer = p5.Vector.sub(desired,this.vel);
  steer.limit(this.maxF);
  return steer;
}


vehicle.prototype.flee = function(t) {
  var desired = p5.Vector.sub(t,this.pos);
  var d = desired.mag();
  if(d<50){
    desired.setMag(this.maxS);
    desired.mult(-1);
    var steer = p5.Vector.sub(desired,this.vel);
    steer.limit(this.maxF);
    return steer;
  }
  else {
    return createVector(0,0);
  }
}
