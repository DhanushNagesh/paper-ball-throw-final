
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball
var ground
var bin1,bin2,bin3
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ball = new Ball(100,200)
	ground = new Ground(600,490,1200,20)
	bin1 = new Bin(620,425,15,110)
	bin2 = new Bin(700,425,15,110)
	bin3 = new Binim(660,475,80,15)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  ball.display();
  ground.display();
  bin1.display();
	 bin2.display();	
	 bin3.display();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:40,y:-55})
	}
}

