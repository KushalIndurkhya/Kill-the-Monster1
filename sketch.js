
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
const Constraint  = Matter.Constraint;

var engine,bodies,myWorld

function preload() {
//preload the images here

Background1=loadImage("images/GamingBackground.png")
Monster1=loadImage("images/Monster-01.png")
Monster2=loadImage("images/Monster-02.png")
Superhero1=loadImage("images/Superhero-01.png")
Superhero2=loadImage("images/Superhero-02.png")

}

function setup() {
  createCanvas(3000, 800);

  engine = Engine.create();
  myWorld = engine.world;

  ground = new Ground(1500,700,1500,20);
  hero = new Hero(200,100,40,40);
  fly = new Fly(hero.Body,{x:200,y:50})
  monster = new Monster(2500,100,10)

  //block1 = new Block()


}

function draw() {
  background(0);

  Engine.update(engine);

  ground.display();
  hero.display();
}


function mouseDragged(){
  Matter.Body.setPosition(hero.Body,{x:mouseX , y:mouseY})
}
