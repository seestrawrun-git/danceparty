//these will all be in the upper left corner
class Box {
	constructor(x, y, xSpeed, ySpeed, xWidth, yHeight) {
	  this.x = x;
	  this.y = y;
	  this.xSpeed = xSpeed;
	  this.ySpeed = ySpeed;
	  this.xWidth = xWidth;
	  this.yHeight = yHeight;
	}
	move() {
	  this.x += this.xSpeed;
	  this.y += this.ySpeed;
	  
	  if (this.x > width/3 - 20 || this.x < 20) {
		this.xSpeed *= -1;
	  }
	  if (this.y > height/3 - 20 || this.y < 20) {
		this.ySpeed *= -1;
	  }
	}
	show() {
	  stroke(100);
	  fill(120, 230, 0);
	  rect(this.x, this.y, this.xWidth, this.yHeight);
	}
  }
  
  
  
  
  
  
  let box;
  let box2;
  let box3;
  
  let ball;
  let ball2;
  let ball3;
  
  function setup() {
	createCanvas(640, 360);
	box = new Box(26,25, 3, 4, 20, 20);
	box2 = new Box(21, 21, 4, 2, 15, 15);
	box3 = new Box(30, 30, 5, 2, 25, 25);
	
   
  }
  
  function draw() {
	background(216, 191, 216, 80);
	
	
	//background radial lines
	push();
	translate(width/2, height/2)
	rotate(frameCount/1000);
	for(var i = 0; i < 300; i++){
	strokeWeight(10)
	stroke(230, 230, 250);
	rotate(10);
	line(0, 0, 0, height);
	rotate(20);
	stroke(221, 160, 221, 100);
	  strokeWeight(sin(frameCount/100)*4);
	  
	line(0,0,0, height);
	}
	pop();
	
	
	push(); //this one is moving the box holding the bouncing balls
	translate(0, 100 + sin(frameCount/200) * 100)
	
  
  
	
  
	push();
  
	stroke(240, 0, 60, 120);
	fill(0, 200, 10, sin(frameCount/1000)* 50);
	strokeWeight(5 +(sin(frameCount/200))* 5);
	rect(0,0, width/3, height/3)
	pop();
	
	//these bouncing boxes are inside of the box
	box.move();
	box.show();
	box2.move();
	box2.show();
	box3.move();
	box3.show();
	
	pop();
	
	push(); //duplicated on the right side, inverse y movement
	translate(420, 100 + -sin(frameCount/200) * 100)
	
  
  
	
  
	push();
  
	stroke(240, 0, 60, 120);
	fill(0, 200, 10, sin(frameCount/1000)* 50);
	strokeWeight(5 +(sin(frameCount/200))* 5);
	rect(0,0, width/3, height/3)
	pop();
	
	//these bouncing boxes are inside of the box

	box.move();
	box.show();
	box2.move();
	box2.show();
	box3.move();
	box3.show();
	
	pop();
	
	//middle mandala
	push();
  
	translate(width/2, height/2);
	scale(sin(frameCount/100)* 5);
	rotate(frameCount/100);
	
	for(var i = 0; i < 200; i++) {
  
	  push();
	  fill(10, 100, 10);
	  ellipse(0, 40, 10, 20);
	  pop();
	  push();
	  stroke(230, 100);
	  line(0, 0, 0, 50);
	  pop();
	  fill(random(0,200), random(0, 10), random(40, 50), 255);
	  triangle(0,0, 10, 10, 20, 10);
	  rotate(i);
	  
	}
	
	pop();
	
	  push()
	if(frameCount > 1 && frameCount < 150) {
	  textSize(32);
	  fill(255);
	  text("dance", 320, 30);
	} else if (frameCount > 100 && frameCount < 250) {
	  push();
  
	  fill(random(0, 255), random(0, 255), random(0, 255));
	  textSize(32);
	  text("bounce", 320, 30);
	  pop();
	} else if (frameCount > 250 && frameCount < 400) {
	  textSize(32);
	  fill(random(0, 100), 0, random(20, 50));
	  text("crunch", 320, 30);
	}
	pop();
	
	// push()
	//   stroke(240, 0, 60, 120);
	// fill(0, 200, 10, sin(frameCount/1000)* 50);
	// strokeWeight(5 +(sin(frameCount/200))* 5);
	// // rect(0,0, width/3, height/3)
	// pop();
	
  
  
	
	
  }
  
  