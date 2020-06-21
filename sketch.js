const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var dustbinObj,paperObject,groundObject,launchingRope;
var engine,world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	dustbinObj=new dustbin(1200,660);
	paperObject=new paperBall();
	groundObject=new Ground();
	launchingRope = new Launcher(paperObject.body,{x:200,y:200});

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(255);
 
  dustbinObj.display();
  paperObject.display();
  groundObject.display();
  launchingRope.display();
}

function mouseDragged(){
    Matter.Body.setPosition(paperObject.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    launchingRope.fly();
}