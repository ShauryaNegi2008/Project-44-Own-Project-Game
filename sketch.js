const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var net, bg, ground, netImg, netBody, rand, rand1, butterfly,butterflyImg, score = 0;

function preload() {
  bg = loadImage("assets/bg.jpg");
  netImg = loadImage("assets/net.jpg")
  butterflyImg=loadImage("assets/butterfly.jpg")
}
function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(800, 400);
  ground = new Ground(400, 100000, 10);
  net = new Net();
  netBody = createSprite(net.body.position.x, net.body.position.y, 50, 50)
  netBody.setCollider("Rectangle", 0, 0)
  netBody.addImage(netImg);
  butterfly = createSprite(0, 50, 50, 50);
  butterfly.setCollider("rectangle",0,0,65,65)
  butterfly.addImage(butterflyImg)
  butterfly.velocityX = 1;
  butterfly.velocityY = 1;
}

function draw() {
  Engine.update(engine);
  net.display();
  background("black");
  fill("White")
  text("Butterfly caught:" + score, 650, 50)
  if (frameCount % 10 === 0) rand = Math.round(random(1, 5))
  ground.display();
  netBody.depth=butterfly.depth;
  netBody.depth=netBody.depth+1
  netBody.x = net.body.position.x;
  netBody.y = net.body.position.y - 150;

  console.log(butterfly.y)

  if (butterfly.isTouching(netBody)) {
    score++;
    butterfly.x = 0
    butterfly.y = 50
  }

  textSize(15);
  fill("red")
  text(rand + ":The higher no. it is you will jump that higher", 450, 20)
  drawSprites();
  Move();
  butterflyY();
}

function Move() {
  if (net.body.position.y > 300) {
    if (rand === 5) {
      if (keyWentDown("space")) {
        net.body.position.y = net.body.position.y - 7
      }
    }
    else if (rand === 4) {
      if (keyWentDown("space")) {
        net.body.position.y = net.body.position.y - 5
      }
    }
    else if (rand === 3) {
      if (keyWentDown("space")) {
        net.body.position.y = net.body.position.y - 3
      }
    }
    else if (rand === 2) {
      if (keyWentDown("space")) {
        net.body.position.y = net.body.position.y - 2
      }
    }
    else if (rand === 1) {
      if (keyWentDown("space")) {
        net.body.position.y = net.body.position.y - 1
      }
    }
  }
}

function butterflyY() {
  if (butterfly.y === 100) {
    butterfly.velocityY = -1
  }
  if (butterfly.y === 0) {
    butterfly.velocityY = 1
  }
}