
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbin1,dustbin2, paperObject,groundObject	
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	dustbin1=new dustbin(1200,650);
    dustbin2=new dustbin(1300,650);
	paperObject=new Paper(200,450);
	groundObject=new Ground(width/2,670,width,20);


	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

	
	  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  Engine.update(engine);
  paperObject.display();
  groundObject.display();
  dustbin1.display();
  dustbin2.display();
 
  
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:180,y:-165});
    
  	}
}
