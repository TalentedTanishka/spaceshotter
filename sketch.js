
var player , player_image , playbutton ,   play_image;
var gameState = 0 ;
var shoot1_image;
var PinkMonsters_image , PinkMonsters1_image , PinkMonsters2_image , PinkMonsters3_image;
var shootGroup;
var score = 0;
var sound;
var resart , restart_image;
var gameOver;
var  coins_image;
var coinsGroup;
var gameWon;
var home , home_image;
var backgroundimg , backgroundimg1;

function preload()
{


  play_image = loadImage("images/PLAY BUTTON.png");

player_image = loadImage("images/player.png");

shoot1_image = loadImage("images/shoot.png");

PinkMonsters_image = loadImage("images/enemy1.png");

PinkMonsters1_image = loadImage("images/enemy2.png");

PinkMonsters2_image = loadImage("images/enemy3.png");

PinkMonsters3_image = loadImage("images/enemy4.png")

coins_image = loadAnimation("images/coin1.png" , "images/coin2.png" , "images/coin3.png" , "images/coin4.png" , "images/coin5.png" , "images/coin6.png")

bg_image = loadImage("images/space.jpg")

bgc_image = loadImage("images/bg.png")

coins_image = loadAnimation("images/coin1.png" , "images/coin2.png" , "images/coin3.png" , "images/coin4.png" , "images/coin5.png" , "images/coin6.png")

gameOver = loadImage("images/gameOver.jpg");

restart_image = loadImage("images/reset.jpg");

sound = loadSound("sf_laser_explosion.mp3");

gameWon = loadImage("images/you win.jpg");

home_image = loadImage("images/home.png");

backgroundimg = loadImage("images/space1.png");

backgroundimg1 = loadImage("images/space2.jpg");
}

function setup()
{
  createCanvas(windowWidth , windowHeight);

 

  player = createSprite(windowWidth/1500,windowHeight-70);
  player.addImage(player_image);
  player.visible = false;

   playbutton = createSprite(windowWidth/2,windowHeight-100,60,60);
  playbutton.addImage(play_image)
  playbutton.scale = 0.6;
 

  resart = createSprite(windowWidth/3,windowHeight-100,60,60);
 resart.addImage(restart_image)
  resart.scale = 0.6;
  resart.visible = false;

 home = createSprite(windowWidth/2,windowHeight-100,60,60);
  home.addImage(home_image)
  home.scale = 0.6;
   home.visible = false;
 
   
  shootGroup = createGroup();

  PinkMonstersGroup = createGroup();
  PinkMonsters1Group = createGroup();
  PinkMonsters2Group = createGroup();
  PinkMonsters3Group = createGroup();
  coinsGroup = createGroup();
  
  
  
}

function draw() {

  
  
 
  background("yellow")

  if(gameState == 0)
  {
   
   
    image(bgc_image , -0.1,0 , windowWidth , windowHeight);

 if(mousePressedOver(playbutton))
 {
   gameState = 4;
 }


  fill("yellow");
  stroke("black");
 strokeWeight(5);
textFont("Comic Sans MS")
textSize(80);

 text("WELCOME TO THE SPACE SHOOTER",windowWidth - 1600,windowHeight-400 );
 text("_____________________________",windowWidth - 1600,windowHeight-400 ); 
 
 

  
  }

  else if(gameState==4)
  {
    playbutton.visible = false;
    resart.visible = false;
    home.visible = false;

    fill("BLACK");
  stroke("WHITE");
 strokeWeight(5);
textFont("Comic Sans MS")
    textSize(40);
    text("*NOTE : YOU SHOULD SHOOT THE ENEMIES TO REACH NEXT LEVEL",windowWidth - 1600,windowHeight-600 );
    text("*MOVE YOUR CURSOR ON THE SCREEN TO MOVE THE SPACE-SHIP",windowWidth - 1600,windowHeight-500 );
    text("*TO SHOOT PRESS THE SPACE BUTTON",windowWidth - 1600,windowHeight-400 );
    text("*TO PLAY , PRESS 'P' BUTTON IN YOUR KEYBORD ",windowWidth - 1600,windowHeight-300 );
    text("*YOU SHOULD GET 3700 POINTS TO WIN",windowWidth - 1600,windowHeight-200 );
    text("*IF U WILL SHOOT THE COIN YOU WILL GET THE BONOUS POINT",windowWidth - 1600,windowHeight-100 );
textSize(80);
    text("INSTRUCTION",windowWidth - 1200,windowHeight-700 );
    text("ENJOY!",windowWidth - 1000,windowHeight-10 );
    if(keyDown("P"))
    {
      gameState = 1;
    }
  }

  else if(gameState == 1)
  {

    image(bg_image , -0.1,0 , windowWidth , windowHeight);
resart.visible = false;
home.visible = false;
    playbutton.visible = false;
    player.visible = true;

    if(keyDown("space"))
    {
      shoot();
      sound.play();
    }

  player.x = World.mouseX;

  

    playing();

    textSize(30);
    fill("yellow");
    stroke("black");
    strokeWeight(5);
    textFont("Comic Sans MS");
    textSize(20);
    text("SCORE : " + score,windowWidth - 1500,windowHeight-600);
    
  }

  else if(gameState==2)
  {
    image(gameOver , -0.1,0 , windowWidth , windowHeight);

    if(mousePressedOver(resart))
 {
   gameState = 1;
 }

 
 if(mousePressedOver(home))
 {
   gameState = 0;
 }

    PinkMonsters1Group.setVisibleEach(false);
    PinkMonsters2Group.setVisibleEach(false);
    PinkMonstersGroup.setVisibleEach(false);
    coinsGroup.setVisibleEach(false);
    player.visible = false;
    resart.visible = true;
    home.visible = true;

      
      
  }

  else if(gameState==3)
  {
    image(gameWon , -0.1,0 , windowWidth , windowHeight);

    PinkMonsters1Group.setVisibleEach(false);
    PinkMonsters2Group.setVisibleEach(false);
    PinkMonstersGroup.setVisibleEach(false);
    coinsGroup.setVisibleEach(false);
    player.visible = false;
    resart.visible = false;

  }
  drawSprites();
}












/*const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;

var player , player_image ;
var bg , bg_image , orange_image , pink_image ;
var bagheera , bagheera_image;
var ground, monstersGroup , pinkmonstersGroup,bricksGroup;
var attack , attack_image;
var stone , stone_image;
var bricks1 , bricks2 , bricks3 , bricks1_image , bricks2_image , bricks3_image;
var  coins_image , bgc_image , bgc ;
var engine,world;

var gameState = 0;

var score = 0;
var coinsGroup;
var playbutton , play_image , toolbutton , tool_image
var level1 , level2 , level3 , level1_img , level2_img , level3_img;

var life , life_image , life2 , life2_image , life3 , life3_image , life4 , life4_image , life5 , life5_image;
function preload()
{
  bgc_image = loadImage("images/1IMAGE.png")

//loadAnimation for player
//player_image = loadAnimation("images/Mowgli1.png" , "images/Mowgli2.png" , "images/Mowgli3.png" , "images/Mowgli4.png" , "images/Mowgli5.png" );
player_image = loadAnimation("images/m1.png" , "images/m2.png" , "images/m3.png");
//background image
      bg_image = loadImage("images/L1.jpg");

//loadAnimation for bagheera
bagheera_image = loadAnimation("images/bagheera1.gif" , "images/bagheera2.png" , "images/bagheera3.gif");

      //loadAnimation for enemy
      orange_image = loadAnimation("images/orange1.png" , "images/orange2.png");

//loadAnimation for player
pink_image = loadAnimation("images/pink1.png" , "images/pink2.png");

//attack image
      attack_image = loadImage("images/attack_button.png" );

      //stone image
      stone_image = loadImage("images/stone.png" );

      //brick load images
bricks1_image =  loadImage("images/ground1.png" ) 
bricks2_image = loadImage("images/ground2.png" )
bricks3_image = loadImage( "images/ground3.png") ; 

coins_image = loadAnimation("images/coin1.png" , "images/coin2.png" , "images/coin3.png" , "images/coin4.png" , "images/coin5.png" , "images/coin6.png")

play_image = loadImage("images/PLAY BUTTON.png");

level1_img = loadImage("images/L1.jpg");
level2_img =  loadImage("images/level 2 .png");
level3_img = loadImage("images/level 3.png");

life_image = loadImage("images/life_image.png")

tool_image = loadImage("images/TOOLS.png");

life2_image = loadImage("images/life_image.png")
life3_image = loadImage("images/life_image.png")
life4_image = loadImage("images/life_image.png")
life5_image = loadImage("images/life_image.png")
}

function setup()
{
  engine = Engine.create();
  world = engine.world;

  createCanvas(windowWidth , windowHeight);

// player
player = createSprite(70,windowHeight-70,60,60);
  player.addAnimation("run" , player_image);
  player.debug = true;
  player.setCollider("rectangle", -100, 30, 50,80);
  player.scale = 1;
player.visible = false;
 

  //bagheera
  bagheera = createSprite(-100 , windowHeight-70);
  bagheera.addAnimation("running" , bagheera_image);
  bagheera.visible = false;
  bagheera.scale = 0.7;
  bagheera.visible = false;
  //ground
ground = createSprite(windowWidth/2 ,windowHeight-20 , 100000000, 30 );
ground.visible = false;
//create monstersGroup
  monstersGroup = new Group ();

  //create pinkmonstersGroup
  pinkmonstersGroup = new Group ();
  bricksGroup = new Group();

  coinsGroup = new Group();

  //attack button
  attack = createSprite(5, 90)
attack.addImage(attack_image)
attack.scale = 0.2
attack.visible = false;
//stone
stone = createSprite(100, 350)
stone.addImage(stone_image)
stone.scale = 0.2
stone.visible = false
  

  playbutton = createSprite(70,windowHeight-70,60,60);
  playbutton.addImage(play_image)
  playbutton.scale = 0.6;

  toolbutton = createSprite(-70,windowHeight-70,60,60);
  toolbutton.addImage(tool_image)
  toolbutton.scale = 0.6;

  level1 = createSprite(70,200,60,60);
  level1.addImage(level1_img)
  level1.scale = 0.6;
  level1.visible = false;

  level2 = createSprite(70,250,60,60);
  level2.addImage(level2_img)
  level2.scale = 0.6;
level2.visible = false;

  level3 = createSprite(70,300,60,60);
  level3.addImage(level3_img)
  level3.scale = 0.6;
  level3.visible = false;

  life = createSprite(-70, 90)
life.addImage(life_image)
life.scale = 0.2
life.visible = false;

life2 = createSprite(-70, 90)
life2.addImage(life2_image)
life2.scale = 0.2
life2.visible = false;

life3 = createSprite(-70, 90)
life3.addImage(life3_image)
life3.scale = 0.2
life3.visible = false;

life4 = createSprite(-70, 90)
life4.addImage(life_image)
life4.scale = 0.2
life4.visible = false;

life5 = createSprite(-70, 90)
life5.addImage(life_image)
life5.scale = 0.2
life5.visible = false;


}
  
function draw()
{
//background
  background("green");

 

  if(gameState == 0)
  {

   image(bgc_image , -700, 0 , windowWidth , windowHeight);
if(mousePressedOver(playbutton))
{
  gameState = 1;
}
//if(mousePressedOver(toolbutton)) 
//{
//}      
            

  }
  else if(gameState == 1)
  {
    playbutton.visible = false;
    toolbutton.visible = false;
    level1.visible = true
    if(mousePressedOver(level1))
    {
      gameState = 2;
    }
  }
 else if (gameState == 2)
 {
playbutton.visible = false;
level1.visible = false
 textSize(20);
      fill("blue");
      stroke("black");
     strokeWeight(5);
    textFont("Comic Sans MS")
    textSize(20);
    
     text("PRESS SPACE TO BEGIN",-40,200 );

         
  if(keyDown("space"))
  {
    player.velocityX = 10;
    player.visible = true;
    ground.visible = false;
    attack.visible = true;
    life.visible = true;
    life2.visible = true;
    life3.visible = true;
    life4.visible = true;
    life5.visible = true;
   bagheera.velocityX = 4;
   bagheera.visible = true;
  gameState = 3;
    
  }
   



 }
 else if (gameState == 3)
 {
       play();
}

 
    
  
  

  //gravity
  player.velocityY = player.velocityY + 1;

  //player colliding with ground
  player.collide(ground);

  

  //player colliding with monstersGroup
  player.collide(monstersGroup);
  //player colliding with pinkmonstersGroup
  player.collide(pinkmonstersGroup);

  player.collide(bricksGroup);
  

 
//moving the camera with the player
  camera.position.x = player.x;

  //moving the attack button with the player
  attack.position.x = player.x;

  life.position.x = player.x - 700;
  life2.position.x = player.x - 600;
  life3.position.x = player.x - 500;
  life4.position.x = player.x - 400;
  life5.position.x = player.x - 300;
  
    // updating the engine
  Engine.update(engine);
  //drawSprites
  drawSprites();


}


function play()
{
  
  
  if(player.isTouching(coinsGroup))
  {
    coinsGroup.destroyEach() ;
    score++;
  }
  //keyDown right arrow
  if(keyDown(RIGHT_ARROW))
  {
    player.velocityX = 10;
  }

  if(stone.isTouching(pinkmonstersGroup))
  {
    pinkmonstersGroup.destroyEach();
    life.visible = true;
  }
  if(stone.isTouching(monstersGroup))
  {
    monstersGroup.destroyEach();
    life.visible = true;
  }
  
  if(player.isTouching(pinkmonstersGroup))
  {
    life.visible = false;
    bagheera.velocityX = 50;
  }
  if(player.isTouching(monstersGroup))
  {
    life.visible = false;
    bagheera.velocityX = 50;
  }
      
  //create background image always
  for(var i = -1500  ; i<100000 ; i = i + 1060)
  {
    image(bg_image , i , 0 , windowWidth , windowHeight);
 
  }


         //mousePressedOver
    if(mousePressedOver(attack))
    {
      stone.velocityX = 10
      stone.x = player.x;
      stone.y = player.y;
      stone.visible = true
      
    }
   
//keyDown up arrow
  if(keyDown(UP_ARROW))
  {
    player.velocityY = -8;
  }

  //vanishing the bagheera after some time
  if(frameCount % 150 === 0)
  {
    bagheera.velocityX = 2;
  }
  
  //functions
   spawnMonsters();
   PinkMonsters();
   Bricks();
   Coins();

   //making text more attractive
textSize(20);
fill("blue");
stroke("black");
strokeWeight(5);
textFont("Comic Sans MS")
textSize(20);
text("SCORE : " + score , player.x ,200 );



}
function Coins()
{
    
    if(frameCount % 350 == 00 )
    {
        
        var coins = createSprite(350, 690,20 ,20);
        coins.addAnimation("moveing" ,coins_image);
        coins.visible = true;
        coins.scale = 0.2;
        coins.x = random(350,700);
        coins.y = random(200,500); 
        coins.x = player.x + 1000 ;
        coinsGroup.add(coins);
        //coins.debug = true;

    }
    
    
}*/