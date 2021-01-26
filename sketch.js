const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground
var particles = []
var divisions = []
var plinkos = []
var divisionHeight = 300


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
  engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,690,800,20)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  ground.display()

  makeDivisions()

  
 
  }
  function makeDivisions(){
    for(var k=0, k <=width; k = k + 80){
      divisions.push(new Divisions(k , height = divisionHeight/2,10,divisionHeight))
    }
  }
