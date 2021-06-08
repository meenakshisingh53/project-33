var snow;
var bg;
var snowImg;


function preload(){
  bg = loadImage("snow3.jpg");
  snowImg=loadImage("snow5.webp");
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  
}

function draw() {
  background(bg);  
  snowfall();
  drawSprites();
}
function snowfall(){
  if(frameCount%60===0){
    snow=createSprite(random(100,width-100),50,10,10);
    snow.velocityY=5;
    snow.addImage(snowImg);
    snow.scale=0.1;
  }

}