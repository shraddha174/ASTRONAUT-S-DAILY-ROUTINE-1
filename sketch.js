var bg, sleep, gym, brush, eat, bath, move, drink;
var astronaut;

function preload(){
bg = loadImage("iss.png");
sleep = loadAnimation("sleep.png");
gym = loadAnimation("gym1.png", "gym2.png","gym11.png","gym12.png");
brush = loadAnimation("brush.png");
eat= loadAnimation("eat1.png","eat2.png");
bath = loadAnimation("bath1.png","bath2.png");
move = loadAnimation("move.png","move1.png");
drink = loadAnimation("drink1.png", "drink2.png");
}


function setup() {
  createCanvas(600,400);
  astronaut= createSprite(300,200);
  astronaut.addAnimation("sleeping", sleep);
  astronaut.scale = 0.1
}


function draw() {
  background(bg);  

textSize(20);
fill("white");
text("Instructins:",20,28);
text("Up Arrow = Brushing",20, 55);
text("Down Arrow = Gymming",20, 75);
  text("Left Arrow = Eating",20,85 );
    text("Right Arrow = Bathing",20, 119);
  text("m key = Moving",20, 130);
  

  edges=createEdgeSprites();
  astronaut.bounceOff(edges);
  
  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  
  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming", gym);
    astronaut.changeAnimation("gymming");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  
  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating", eat);
    astronaut.changeAnimation("eating");
    astronaut.x = 150;
    astronaut.y = 350;
    astronaut.velocityX = 0.5;
    astronaut.velocityY = 0.5;
  }
  
  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("bathing", bath);
    astronaut.changeAnimation("bathing");
    astronaut.x = 300;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if(keyDown("m")){
    astronaut.addAnimation("moving", move);
    astronaut.changeAnimation("moving");
    astronaut.velocityX = 1;
    astronaut.velocityY = 1;
  }

  






  drawSprites();
}