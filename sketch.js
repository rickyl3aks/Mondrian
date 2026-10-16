function setup() {
  //create a large square canvas
  createCanvas(800, 800);
}

function draw() {
  //colour palette for the painting
  const white = "#e4e2e3";
  const yellow = "#efda6e";
  const red = "#e0292b";
  const blue = "#025e9f";

  fill(red);

  //set a thick stroke weight for the black lines
  strokeWeight(12);

  //draw the red rectangle
  rect(150, 50, 600, 600);
  fill(white);
  rect(150, 650, 550, 100);
  rect(700, 650, 50, 50);
  fill(yellow);
  rect(700, 700, 50, 50);
  fill(blue);
  rect(70, 650, 80, 100);
  fill(white);
  rect(70, 50, 80, 600);
  rect(70, 50, 80, 300);

  //signature
  textSize(20);
  fill(0);
  textFont("Verdana");
  text("RC.", 80, 735);
}
