const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground, bridge;
var leftWall, rightWall;
var jointPoint;
var jointLink;
var zombie1, zombie2, zombie3, zombie4, sadzombie;
var breakButton;
var backgroundImage;

var stones = [];
var collided = false

function preload() {
zombie1 = loadImage("./assets/zombie1.png")
zombie2 = loadImage("./assets/zombie2.png")
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

}

function draw() {
  background(51);
  Engine.update(engine);

}
