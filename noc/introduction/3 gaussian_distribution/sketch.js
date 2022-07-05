function setup() {
  createCanvas(1200, 700);
  background(255, 204, 0);
}

function draw() {
  // Get a gaussian random number w/ mean of 0 and standard deviation of 1.0
  let xloc = randomGaussian();

  const standardDeviation = 100;
  const mean = width / 2; // make the mean the middle of the screen along the x-axis
  xloc = xloc * standardDeviation + mean; // Scale the gaussian random number by standard deviation and mean

  fill(0, 5);
  noStroke();
  ellipse(xloc, height / 2, 16, 16); // Draw an ellipse at our "normal" random position

  // paint drip (should be splatter tho..)
  let yloc = randomGaussian();
  yloc = yloc * standardDeviation + mean;
  fill('#A1045A');
  noStroke();
  ellipse(xloc, yloc, 16, 16); 

  // gaussian random walk 
}