var PLAY=1;
var END=0;
var gameState=1;
var World;
var sword,fruit,swordImage;
var f1,f2,f3,f4,fruit,fruitGroup;
var enemy,enemyGroup,monster,monsterImage;
var World;
var game_overImage,game_over;
var gameovermp3,knifemp3;

var score=0;


function preload(){
swordImage=loadImage("sword.png");
  
  f1=loadImage("fruit1.png");
  f2=loadImage("fruit2.png");
  f3=loadImage("fruit3.png");
  f4=loadImage("fruit4.png");
  
  monsterImage=loadAnimation("alien1.png","alien2.png");
  
  game_overImage=loadImage("gameover.png");
  
  gameovermp3=loadSound("gameover.mp3");
  
  swordmp3=loadSound("knifeSwooshSound.mp3");
  
  
 
}

function setup(){
  createCanvas(400,400);
  background("lightblue");
  
  sword=createSprite(200,350,15,15);
  sword.addImage(swordImage);
  sword.scale=0.5;
  
   
    
  
  score=0;
  fruitGroup=new Group();
  enemyGroup=new Group();
}


function draw(){
background("lightblue");
  
  sword.x=World.mouseX;
  sword.y=World.mouseY;
  
 if(gameState==1){
  if(fruitGroup.isTouching(sword)){
     fruitGroup.destroyEach();
    
    swordmp3.play();
    score=score+2;
  
  
  }
  
  if(sword.isTouching(enemyGroup)){
    gameovermp3.play();
    gameState=0;
  }
 }
  else
    if(gameState==0){
      fruitGroup.destroyEach();
  enemyGroup.destroyEach();
  sword.addImage(game_overImage);
  sword.scale=1.5;
  sword.velocity=0;
  fruitGroup.setVelocityXEach(0);
  enemyGroup.setVelocityXEach(0);
  sword.x=200;
  sword.y=200;
    }
  

  
  
  
  
  spawnFruits();
  enemy();
  drawSprites();
  text("Score: "+ score, 330,30);
}

function spawnFruits(){
  if(frameCount%100==0){
  fruit = createSprite(400,150,20,20);
  fruit.velocityX=-4;
 var position = Math.round(random(1,2));
  if(position==1){
    fruit.x=400;
    fruit.velocityX=-6+(score/10);
    fruit.velocityX=-7+(score/20);
    fruit.velocityX=-8+(score/30);
    fruit.velocityX=-9+(score/40);
  }
    else
      {
        if(position==2){
          fruit.x=0
          fruit.velocityX=4;
          fruit.velocityX=6+(score/10);
          fruit.velocityX=7+(score/20);
          fruit.velocityX=8+(score/30);
          fruit.velocityX=9+(score/40);
        }
      }
  var num=Math.round(random(1,4))
  console.log(num);
  switch(num){
    case 1:
    fruit.addImage(f1);
    break;
    case 2:
    fruit.addImage(f2)
    break;
    case 3:
    fruit.addImage(f3)
    break;
    case 4:
    fruit.addImage(f4);
    break;
    
    
    
  }
  fruit.y=Math.round(random(50,340));
  fruit.scale=0.2;
  fruit.lifetime=120;
  fruitGroup.add(fruit);
  }
}

function enemy(){
  if(frameCount%220==0){
    monster=createSprite(400,200,20,20);
    monster.addAnimation("alien", monsterImage);
    var position = Math.round(random(1,2));
  if(position==1){
    monster.x=400;
    monster.velocityX=-5;
    monster.velocityX=-6+(score/10);
    monster.velocityX=-7+(score/20);
    monster.velocityX=-8+(score/30);
    monster.velocityX=-9+(score/40);
  }
    else
      {
    if(position==2){
    monster.x=0
    monster.velocityX=+5;
    monster.velocityX=6+(score/10);
    monster.velocityX=7+(score/20);
    monster.velocityX=8+(score/30);
    monster.velocityX=9+(score/40);
     }
     }
    monster.y=Math.round(random(50,350));
    
    //monster.scale=0.2;
    monster.lifetime=100;
    enemyGroup.add(monster);
  }
}
