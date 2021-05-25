var bji,cat,mouse,catI1,catI2,catI3,mouseI1,mouseI2,mouseI3
function preload() {
   bji=loadImage("images/garden.png")
   catI1=loadAnimation("images/cat1.png");
   catI2=loadAnimation("images/cat2.png","images/cat3.png");
   catI3=loadAnimation("images/cat4.png");
   mouseI1=loadAnimation("images/mouse1.png");
   mouseI2=loadAnimation("images/mouse2.png","images/mouse3.png");
   mouseI3=loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat=createSprite(870,600);
cat.addAnimation("catsleeping",catI1);
cat.scale=0.2;
mouse=createSprite(200,600);
mouse.addAnimation("mousestanding",mouseI1);
mouse.scale=0.2;
}

function draw() {

    background(bji);
   if(cat.x-mouse.x<(cat.width-mouse.width)/2){
     cat.velocityX=0;
     cat.addAnimation("catlastimage",catI3);
     cat.x=300;
     cat.scale=0.2;
     cat.changeAnimation("catlastimage");

     mouse.addAnimation("mouselastimage",mouseI3);
     mouse.scale=0.2;
     mouse.changeAnimation("mouselastimage");
   }
    drawSprites();
}


function keyPressed(){
if(keyCode===LEFT_ARROW){
cat.velocityX=-5;
cat.addAnimation("mouserunning",catI2);
cat.changeAnimation("catrunning");
mouse.addAnimation("mouserunning",mouseI2);
mouse.frameDelay=25
mouse.changeAnimation("mouserunning");
}


}
