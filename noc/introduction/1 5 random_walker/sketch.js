let walker;

function setup() {
  createCanvas(1450, 700);
  walker = new Walker();
  background(255, 204, 0);
}

function draw() {
  walker.step();
  walker.render();
}

class Walker {
  constructor() { // initialise in the centre of the screen
    this.x = width / 2;
    this.y = height / 2;
  }

  render() {
    stroke(0);
    point(this.x, this.y); 
  }

  step() {

    var r = random(1)

    // % probability of random step 
    if (r < 0.7 || this.x == mouseX || this.y == mouseY) {

      // represents 3 x 3 grid 
      var x_axis = floor((random() * 3) - 1); // random choice of [-1, 0, 1]
      var y_axis = floor((random() * 3) - 1);

      if (x_axis == 1){ // move right 
        this.x++
      } else if (x_axis == -1){ // move left
        this.x--
      }
  
      if (y_axis == 1){ // move up 
        this.y++
      } else if (y_axis == -1){ // move down
        this.y--
      }
    // % probability step toward mouse 
    } else {

      if (this.x < mouseX){ // move right 
        this.x++
      } else { // move left
        this.x--
      }
  
      if (this.y < mouseY){ // move right 
        this.y++
      } else { // move left
        this.y--
      }
    }
    
    // dont draw off the page
    this.x = constrain(this.x, 0, width - 1); // keep value of var between param 2 and 3
    this.y = constrain(this.y, 0, height - 1);
  }
}