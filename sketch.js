let ball;


function setup() {
  createCanvas(windowWidth, windowHeight); 
  ball = new Walker();
}


function draw() {
  background(0);
  ball.update();
  ball.display();
}


// new way to define Object
class Walker {
  //setup values
  constructor() {
  	this.x = width/2;
  	this.y = height/2;
  	this.w = 10;
  }
  
  update() {
    //update position
  	this.x = this.x + random(-1, 1);
  	this.y = this.y + random(-1, 1);
  }
  
  display() {
    //display walker
	fill(255, 105, 180);
  rect(this.x, this.y, this.w);

  }
}