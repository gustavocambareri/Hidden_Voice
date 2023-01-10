function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  circle(20, 20, 20);
  textAlign(CENTER);
  circle(30, 30, 30);
  textSize(20);
  text("HIDDEN VOICE", width / 2, height / 2);
}
