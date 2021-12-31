
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var groundObj;
var rightSide;
var leftSide;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;

   groundObj=new ground(width/2,690,width,20);
   leftSide =new ground(1100,600,20,120);
   rightSide =new ground(1000,600,20,120);
   

   var ball_options={
	   isStatic:false,
	   restitution:0.3,
	   friction:0,
	   density:1.2
   }
   ball = Bodies.circle(200,100,20,ball_options);
   World.add(world,ball);

   ellipseMode(RADIUS);
   rectMode(CENTER);

	Engine.run(engine);
  
}


function draw() {
  background(0);
  ellipse(ball.position.x,ball.position.y,20);

  groundObj.display();
  leftSide.display();
  rightSide.display();

  Engine.update(engine);
  drawSprites();
 
}

function keyPressed(){
	if(keycode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0.03});
	}
}



