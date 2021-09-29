const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
var leftW, rightW, ground;
var bridge, jointpoint;
var jointLink;
var stones = [];
var zombie, zombie1, zombie2, zombie3, zombie4;
var backImg, woodImg;
var stoneImg;
var axeImg;

function preload(){
  zombie1 = loadImage("assets/zombie1.png");
  zombie2 = loadImage("assets/zombie2.png");
  zombie3 = loadImage("assets/zombie3.png");
  zombie4 = loadImage("assets/zombie4.png");

  backImg = loadImage("assets/background.png");
  

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);
  
  ground = new Base(0, height - 10, width * 2, 20);
  leftW = new Base(100, height / 2 + 50, 200, 100);
  rightW = new Base(1250, height / 2 + 50, 200, 100);

  bridge = new Bridge(25, { x: 150, y: height / 2 });
  //bridge.scale = 05;
  bridge.show();

  jointPoint = new Base(1200, height / 2 + 10, 40, 20);

  Matter.Composite.add(bridge.body, jointPoint);
  jointLink = new Link(bridge, jointPoint);

  for (var i = 0; i <= 8; i++) {
    var x = random(width / 2 - 200, width / 2 + 300);
    var y = random(-10, 140);
    var stone = new Stone(x, y, 80, 80);
    
    stones.push(stone);
    
  }
  
}

function draw() {
  background(51);
  image(backImg,0,0,windowWidth,windowHeight);
  Engine.update(engine);
  
  leftW.show();
  rightW.show();
  ground.show();
 var stone of stones.show();

  //for (var stone of stones) {
    //stone.show();
  }

