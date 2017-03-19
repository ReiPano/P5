function circles(){
  this.body = Matter.Bodies.circle(700 + random(-600,600), 1000, 5);
  Matter.World.add(world, this.body);
}

circles.prototype.show = function(){
  fill( 'rgba(255, 255, 255, 0.25)' );
  stroke(255);
  var pos = this.body.position;
  ellipse(pos.x,pos.y,10);
}

circles.prototype.getPos = function(){
  return this.body.position;
}





function Pengesa(x,y){

  this.pengesa = Matter.Bodies.circle(x, y, 3, {isStatic: true});
  Matter.World.add(world, this.pengesa);

}

Pengesa.prototype.show = function(){
  fill(255);
  stroke(255);
  var pos = this.pengesa.position;
  ellipse(pos.x,pos.y,6);
}
