var fixedRectangle;
var movingRectangle;



function setup() {
  createCanvas(800,400);
  fixedRectangle=createSprite(400, 200, 50, 50);
  fixedRectangle.shapeColor=("green");
movingRectangle=createSprite(100,100,30,60)
movingRectangle.shapeColor=("green");
movingRectangle.debug=true;
fixedRectangle.debug=true;
}

function draw() {
  background(0);  
movingRectangle.x=World.mouseX;
movingRectangle.y=World.mouseY;

if (movingRectangle.width/2+fixedRectangle.width/2 > movingRectangle.x-fixedRectangle.x&&
  movingRectangle.width/2+fixedRectangle.width/2>fixedRectangle.x-movingRectangle.x&&
  movingRectangle.height/2+fixedRectangle.height/2 > movingRectangle.y-fixedRectangle.y&&
  movingRectangle.height/2+fixedRectangle.height/2>fixedRectangle.y-movingRectangle.y
  ){
  movingRectangle.shapeColor=("red");
  fixedRectangle.shapeColor="red";
}else {
  movingRectangle.shapeColor=("green");
  fixedRectangle.shapeColor="green";
}


  drawSprites();
}