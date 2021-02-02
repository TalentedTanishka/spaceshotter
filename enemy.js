function ENEMY()
{
    
    if(frameCount % 200 == 0 )
    {

        var PinkMonsters= createSprite(75 ,1 );
        PinkMonsters.velocityY = 3;
        PinkMonsters.addImage(PinkMonsters_image);
        //PinkMonsters.scale = 0.3;
        PinkMonsters.x = random(10,600); 
        PinkMonsters.y = random(1,200);
        //PinkMonsters.lifetime = 150;
        PinkMonstersGroup.add(PinkMonsters);
       // PinkMonsters.debug = true;
        //PinkMonsters.setCollider("rectangle", -5, 10, 60,60);
        
    }
}


function ENEMY2()
{
    
    if(frameCount % 200 == 0 )
    {

        var PinkMonsters= createSprite(75 ,1 );
        PinkMonsters.velocityY = 3;
        PinkMonsters.addImage(PinkMonsters1_image);
        //PinkMonsters.scale = 0.3;
        PinkMonsters.x = random(900,1000); 
        PinkMonsters.y = random(1,200);
        //PinkMonsters.lifetime = 150;
        PinkMonsters1Group.add(PinkMonsters);
       // PinkMonsters.debug = true;
        //PinkMonsters.setCollider("rectangle", -5, 10, 60,60);
        
    }
}

function ENEMY3()
{
    
    if(frameCount % 200 == 00 )
    {

        var PinkMonsters= createSprite(75 ,1 );
        PinkMonsters.velocityY = 3;
        PinkMonsters.addImage(PinkMonsters2_image);
        //PinkMonsters.scale = 0.3;
        PinkMonsters.x = random(800,1500); 
        PinkMonsters.y = random(1,200);
        //PinkMonsters.lifetime = 150;
        PinkMonsters2Group.add(PinkMonsters);
       // PinkMonsters.debug = true;
        //PinkMonsters.setCollider("rectangle", -5, 10, 60,60);
        
    }
}
/*
function ENEMY4()
{
    
    if(frameCount % 200 == 00 )
    {

        var PinkMonsters= createSprite(75 ,100 );
        PinkMonsters.velocityY = 3;
        PinkMonsters.addImage(PinkMonsters3_image);
        //PinkMonsters.scale = 0.3;
        PinkMonsters.x = random(800,600); 
        PinkMonsters.y = random(0,200);
       // PinkMonsters.lifetime = 150;
        PinkMonsters3Group.add(PinkMonsters);
       // PinkMonsters.debug = true;
        //PinkMonsters.setCollider("rectangle", -5, 10, 60,60);
        
    }
}
*/

