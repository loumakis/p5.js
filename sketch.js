var canvas;

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}

function setup() {
 canvas= createCanvas (windowWidth,windowHeight);
 canvas.position(0,0);
 canvas.style('z-index','-1');
  
}

function draw() {
  noCursor();
  background(255);
  stroke(190,0,0);
  line(mouseX,0,mouseX,windowHeight);
   line(0,mouseY,windowWidth,mouseY);
}
