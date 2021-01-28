var fixedRect,movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(600, 400, 50, 80);
  fixedRect.shapeColor=color("green");
  movingRect=createSprite(400, 200, 80, 50);
  movingRect.shapeColor=color("green");
}

function draw() {
  background(255,255,255);
  
  movingRect.x = World.mouseX; 
  movingRect.y = World.mouseY;


  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2 && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2 && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2)  
  { movingRect.shapeColor = "red"; fixedRect.shapeColor=color ("red"); }
   else 
   { movingRect.shapeColor = "green"; fixedRect.shapeColor=color("green"); }
  drawSprites();
}