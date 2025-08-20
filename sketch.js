var d;

function setup() {
  createCanvas(windowWidth, windowHeight).position(0,0).style('z-index','-1');
  background(228, 193, 249);
  noStroke();
}

function draw() {
  d = random(10,60);
  colorMode(HSB,360,100,100);
  fill(random(0,360),100,100,0.3);
  ellipse(mouseX,mouseY,d,d);
}

function keyPressed() {
  if (key === 'p') {
    save('dibujo.jpg');
  }
}
