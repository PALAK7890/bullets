var thickness,wall;
var speed,weight,bullet;

function setup() {
  createCanvas(1600,400);
  
speed=random(223,321);

thickness=random(22,83);

weight=random(32,50);

car =createSprite(50,200,50,50);
car.velocityX=speed;

wall=createSprite(1500,200,thickness,height/2);
wall.shapeColor(80,80,80);

}

function draw() {
  background(255,255,255); 
  
bulletRightEdge= bullet.x = + bullet.width;
wallLeftEdge=wall.x;
if(bulletRightEdge>=wallLeftEdge){
return true
}

return false;

if( hascollided(bullet,wall) ) {
bullet.velocityX=0;
var damage = 0.5* weigth*speed*speed/(thickness*thickness*thickness)

if(damage>10){
wall.shapeColor=color(255,0,0);
}


if(damage<10){
  wall.shapeColor=color(0,255,0);
  }
}
  
  drawSprites();
}