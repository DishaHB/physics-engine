var Rect1, Rect2;

function setup() {
  createCanvas(1200,800);
  Rect1 = createSprite(400, 100, 50, 80);
  Rect1.shapeColor = "red";
  Rect1.debug = true;

  Rect2 = createSprite(400, 800,80,30);
  Rect2.shapeColor = "green";
  Rect2.debug = true;

  Rect1.velocityY = 5;
  Rect2.velocityY =-5;
}

function draw() {
  background(0,0,0);  

  bounceOff(Rect2,Rect1);
  drawSprites();
}

function bounceOff(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2) {
    object1.velocityX = object1.velocityX * (-1);
    object2.velocityX = object2.velocityX * (-1);
  }
  if (object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object2.y < object2.height/2 + object1.height/2) {
      object1.velocityY = object1.velocityY * (-1);
      object2.velocityY = object2.velocityY * (-1);
  } 
}