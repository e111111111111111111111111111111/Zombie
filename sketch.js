var back;
var player;
var playerImage1;
var playerImage2;
var zombie;
var zombieImage;
var zombieGroup;


function preload(){
playerImage1 = loadImage("assets/shooter_2.png");
playerImage2 = loadImage("assets/shooter_3.png");
back = loadImage("assets/bg.jpeg"); 
 zombieImage = loadImage("assets/zombie.png");
 

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

 player = createSprite(windowWidth-1150, windowHeight -200);
 player.addImage(playerImage1);
 player.scale=0.45

}

function draw() {
  background(back); 
  if(keyDown("UP")){
    player.y -= 5
  }
if(keyDown("DOWN")){
  player.y += 5
}
if(keyDown("SPACE")){
  player.addImage(playerImage2);
}
if(keyWentUp("SPACE")){
  player.addImage(playerImage1);
}
DeadHeads();
drawSprites();

}
function DeadHeads(){
  zombie = createSprite (random(500,1100),random(100,500));
  zombie.addImage(zombieImage);
}