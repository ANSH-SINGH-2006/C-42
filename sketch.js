var form, player



function setup() {
  createCanvas(1200,1200);
  //createSprite(400, 200, 50, 50);
  form=new Form();
  form.display();
}

function draw() {
  background(255,255,255);  
  //spawnPlayer();
  drawSprites();
  
}

function spawnPlayer(){
var player1= createSprite(100,300,50,50);
var player2=createSprite(200,300,50,50);
var player3=createSprite(300,300,50,50);
var player4=createSprite(400,300,50,50);
var player5=createSprite(500,300,50,50);
var player6=createSprite(600,300,50,50);


}