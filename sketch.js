var fixedRect, movingRect;
var gameObject1, gameObject2;
var speed,weight
var d;

function setup() {
  createCanvas(1200,400);
  fixedRect = createSprite(1000,190, 50, 80);
  fixedRect.shapeColor = "grey";
  //fixedRect.debug = true;
  movingRect = createSprite(35, 190,35,35);
  movingRect.shapeColor = "white";
  //movingRect.debug = false;
  speed  = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  movingRect.velocityX = speed;
 // console.log(movingRect.velocityX);

  
  
}

function draw() {
  background("white");  

  

 if( movingRect.isTouching(fixedRect)){
   fixedRect.thickness = random(22,83);
   movingRect.velocityX = 0;
 } 

 
 d = (0.5*speed*speed)/thickness*thickness*thickness

if(d <= 3.68){
  movingRect.shapeColor = "green";
  
}



if(d >= 12.43){
  movingRect.shapeColor = "red";
  

}





 
  drawSprites();
}


