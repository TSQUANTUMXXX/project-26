var Zenia;
var wall,wall2,wall3,wall4,wall5;
var speed,weight;

function setup() {
  createCanvas(1600,800);
  // parameters
  speed = random(55,90);
  weight = random(400,1500);
  // Zenia
  Zenia = createSprite(50,100,40,20);
  Zenia.velocityX = speed;
  Zenia.shapeColor = color(255);
  
 
 
  // walls
  wall = createSprite(1500,100,20,200);
  wall.shapeColor = color(80,80,80);
 
  
}

function draw() {
  background("black");  
  
 
  if(wall.x-Zenia.x < (Zenia.width+wall.width)/2)
    {
      Zenia.velocityX = 0;
    var deformation = 0.5*weight*speed*speed/22509;
    if(deformation>180){
  
      Zenia.shapeColor = color(255,0,0);
    }
    if(deformation<180 && deformation>100){
      Zenia.shapeColor = color(230,230,0);
    }
    if(deformation<100){
      Zenia.shapeColor = color(0,255,0);
    }
  }
 
 
 drawSprites();
 
}