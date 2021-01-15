var backGround, backgroundImage, tom, tomAnimation, jerry, jerryAnimation, catAnimation, mouseAnimation, mouseanimation;

function preload() 
{
backgroundImage = loadImage("garden.png");
tomAnimation = loadAnimation("tomFour.png", "tomOne.png", "tomThree.png", "tomTwo.png");
jerryAnimation = loadAnimation("jerryFour.png", "jerryOne.png", "jerryThree.png", "jerryTwo.png");
catAnimation = loadAnimation("tomTwo.png");
mouseAnimation = loadAnimation("jerryThree.png");
}

function setup(){
createCanvas(1000,800);
  
backGround = createSprite(380,360,20,20);
backGround.addImage(backgroundImage);

tom = createSprite(580,580,20,20);
tom.addAnimation("tom_animation", tomAnimation);
tom.scale = 0.2;

jerry = createSprite(200, 600, 20, 20);
jerry.addAnimation("jerry_animation", jerryAnimation);
jerry.scale = 0.2;
}

function draw() {
background(255);
 
if(tom.x - jerry.x < (tom.width - jerry.width)/2)
{
    tom.velocityX=0;
    tom.scale=0.5;

    tom.addAnimation("cat_animation", catAnimation);
    tom.x = 600;
    tom.scale=0.2;
    tom.changeAnimation("cat_animation", catAnimation);
    jerry.addAnimation("mouse_Animation", mouseAnimation);
    jerry.scale=0.15;
    jerry.changeAnimation("mouse_Animation", mouseAnimation);
}

drawSprites();
}

function keyPressed()
{
if (keyCode === LEFT_ARROW)
{
tom.velocityX = -5;

}

}
