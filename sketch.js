let array = []; //empty array for mouseX and mouseY
let backgroundColor = 255;

function setup() {
  createCanvas(600, 600);
  background(backgroundColor);
  strokeWeight(5);
  noFill();
}

function draw() {
  if (mouseIsPressed) {
    backgroundColor -= 5;
    background(backgroundColor);
    array.push([mouseX, mouseY]); //to push mouseX and mouseY into array
    beginShape(); //draw image in curvilinear lines
    for (let i = 0; i < array.length; i++) {
      curveVertex(array[i][0], array[i][1]);
    }
    endShape();
  }
}

function keyTyped() {
  // if (key === 'r') {  //red stroke
  //   stroke(255, 0, 0);
  // }
  // if (key === 'g') {  //green stroke
  //   stroke(0, 180, 0);
  // }
  // if (key === 'b') {  //blue stroke
  //   stroke(0, 80, 235);
  // }
  if (key === 's') { //save image
    saveCanvas('drawing', 'png');
  } else if (key === 'd') { //display image
    background(255);
    beginShape(); //draw image in curvilinear lines
    for (let i = 0; i < array.length; i++) {
      curveVertex(array[i][0], array[i][1]);
    }
    endShape();
  }
  return false;
}

function mousePressed() {
  array = [];
  backgroundColor = 255;

}
