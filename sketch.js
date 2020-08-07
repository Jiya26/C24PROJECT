
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var left,right,center;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("yellow")

	ground = Bodies.rectangle(width/2, height-35, width, 10 , {isStatic:true} );
	World.add(world,ground)


    left = Bodies.rectangle(600,610,20,100,{isStatic:true});
	World.add(world,left);
	center = Bodies.rectangle(680,650,100,20,{isStatic:true});
	World.add(world,center);
	right = Bodies.rectangle(750,610,20,100,{isStatic:true});
	World.add(world,right);

	ball = new Ball(100,600);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  rect(left.position.x,left.position.y,20,100)
  rect(center.position.x,center.position.y,150,20)
  rect(right.position.x,right.position.y,20,100)
  ball.display();

  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(ball.body,ball.body.position,{x:60,y:-50})
	 }
   }


