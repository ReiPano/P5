

function circles(){
  this.body = Matter.Bodies.circle(window.innerWidth / 2 + random(-600,600), window.innerHeight + 30 , 5);
  Matter.World.add(world, this.body);

  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  this.color = 'rgba(' + red + ', ' + green + ', ' + blue + ', 0.75)'
}

circles.prototype.show = function(){
  // console.log(color);
  fill(this.color);
  noStroke();
  var pos = this.body.position;
  ellipse(pos.x,pos.y,15);
}

circles.prototype.getPos = function(){
  return this.body.position;
}


function Pengesa(x,y){

  this.pengesa = Matter.Bodies.circle(x, y, 3, {isStatic: true});
  Matter.World.add(world, this.pengesa);

}

Pengesa.prototype.show = function(){
  noFill();
  noStroke();
  var pos = this.pengesa.position;
  ellipse(pos.x,pos.y,10);
}
