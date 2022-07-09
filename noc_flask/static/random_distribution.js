let bar_array;

function setup() {
  createCanvas(1200, 450);
  background(255, 204, 0);
  bar_array = new Array(20).fill(0); // create array of size 20 with 0 as every value
}

function draw() {
  // pick a random bar to increase in value
  let idx = floor(random(20));
  bar_array[idx]++;

  stroke(0);
  strokeWeight(2);
  fill(255);

  let bar_width = width / bar_array.length;

  for (let i = 0; i < bar_array.length; i++) {
    
    rect( 
      i * bar_width, // x at top left corner of each bar
      height - bar_array[i], // y at height of the window - current bar height 
      bar_width, // width = width
      bar_array[i] // height = same as it currently is 
    ); 
  
  }
}