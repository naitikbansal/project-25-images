const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bin1,paperObject,groundObject,dustbinObject;
var ball;
function preload()
{
	
}

function setup() {
	createCanvas(1600,900);
   rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
    
	dustbinObject=new Bin(950,500,30,100);
	paperObject=new Paper(270,450,70);
	groundObject=new ground(width/2,620,width,20);
	
	
	

	Engine.run(engine);
  
}


function draw() {
	background('white');
	rectMode(CENTER);
	groundObject.display();
  paperObject.display();
  dustbinObject.display();
  
  
  
  
  
  drawSprites();
 
}
function keyPressed(){
	if (keyCode === UP_ARROW){
		
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:83,y:-187})
	}
}