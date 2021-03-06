var car, wall;
var speed,weight;
var deformation;


function setup() {
  createCanvas(1600,400);
  car = createSprite(50, 200, 15, 15);
  car.shapeColor = "purple";
  car.setCollider("rectangle",20,1,15,15,0);
  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor = "white";

  speed = random(20,70);
  weight = random(300,1400);

  deformation = 0;
}

function draw() {
  background(0);
  textSize(18);

  car.velocityX = speed;

  if(car.isTouching(wall)) {
    deformation =  round(0.5 * weight * speed * speed/2500);
    car.velocityX = 0;
  }

  if(deformation > 180) {
    fill("red");
    text("LETHAL!",380,50);
    text("NO",640,50);
    car.shapeColor = "red";
  }  else if(deformation <= 180 && deformation > 80) {
    fill("yellow");
    text("AVERAGE",385,50);
    fill("green");
    text("YES",642,50);
    car.shapeColor = "yellow";
  } else if(deformation <= 80 && deformation > 0) {
    fill("green");
    text("GOOD!",379,50);
    text("YES",642,50);
    car.shapeColor = "green";
  }

  drawSprites();
  fill("lightBlue");
  text("Deformation = " + deformation,100,50);
  text("Good to go - ",530,50);

  fill("orange");
  text("State = ",300,50);
}