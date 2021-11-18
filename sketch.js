var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  //creating tower
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  
  //creating ghost
  ghost=createSprite(200,200,50,50)
  ghost.addImage=("ghost",ghostImg)
  console.log("hello")
}

function draw() {
  background(200);
  
  if(tower.y > 400){
      tower.y = 300
    
    }
    SpawnDoors();
    drawSprites()
  }
  function SpawnDoors(){
 if(frameCount%240===0){

var door=createSprite(200,50)
door.addImage(doorImg)
door.velocityY=1;
door.x=Math.round(random(120,400))
door.lifetime=600,1
doorsGroup.add(door)
 }
  }
