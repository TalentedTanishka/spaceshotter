function playing()
{
  ENEMY();
  ENEMY2();
  ENEMY3();
  Coins();

  
   //player.velocityY = -3;
    //camera.y = player.y;
    
   if(PinkMonstersGroup.isTouching(player))
   {
   gameState = 2;
   }

   if(PinkMonsters1Group.isTouching(player))
   {
   gameState = 2;
   }

   if(PinkMonsters2Group.isTouching(player))
   {
   gameState = 2;
   }


   if(shootGroup.isTouching(PinkMonstersGroup))
   {
    PinkMonstersGroup.destroyEach();
     score = score + 50
   }

   if(shootGroup.isTouching(PinkMonsters1Group))
   {
    PinkMonsters1Group.destroyEach();
     score = score + 50
   }

   if(shootGroup.isTouching(PinkMonsters2Group))
   {
    PinkMonsters2Group.destroyEach();
     score = score + 50
   }
if(score >= 3700)
{
  gameState = 3;
}

if(score >= 600)
{
PinkMonstersGroup.setVelocityYEach(10)
PinkMonsters1Group.setVelocityYEach(10)
PinkMonsters2Group.setVelocityYEach(10)
image(backgroundimg , -0.1,0 , windowWidth , windowHeight);

}

if(score >= 2500)
{
PinkMonstersGroup.setVelocityYEach(15)
PinkMonsters1Group.setVelocityYEach(15)
PinkMonsters2Group.setVelocityYEach(15)
image(backgroundimg1 , -0.1,0 , windowWidth , windowHeight);
}

if(score >= 1000)
{
PinkMonstersGroup.setVelocityYEach(20)
PinkMonsters1Group.setVelocityYEach(20)
PinkMonsters2Group.setVelocityYEach(20)

}

if(shootGroup.isTouching(coinsGroup))
{
  score = score +400  
    coinsGroup.destroyEach();
}


  if(keyDown("space"))
  {
    shoot();

  }
  
   if(shootGroup.y<10)
  {
  reset();
  }
     
}


function shoot()
  {
    var shoot1 = createSprite(70,windowHeight-150);
   shoot1.addImage(shoot1_image);
  shoot1.velocityY = -20;
  shoot1.lifetime = 200; 
  shoot1.x = player.x;
  shootGroup.add(shoot1);
  }
  
    function reset()
 {
  shoot1.x = 70;
  shoot1.y = windowHeight-80;
  shoot1.velocityX = 0;
  shoot1.velocityY = 0;
  shoot1.visible = false;
}

function Coins()
{
    
    if(frameCount % 250 == 0 )
    {
        
        var coins = createSprite(75 ,1);
        coins.addAnimation("moveing" ,coins_image);
        coins.visible = true;
        coins.scale = 0.2;
        coins.x = random(300,700);
        coins.velocityY = 4
        coinsGroup.add(coins);
        //coins.debug = true;

    }
    
    
}