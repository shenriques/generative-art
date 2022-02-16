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
    var choice = floor(random(4));
    if (choice === 0) {
      this.x++;
    } else if (choice == 1) {
      this.x--;
    } else if (choice == 2) {
      this.y++;
    } else {
      this.y--;
    }
    // keep value of var between param 2 and 3
    this.x = constrain(this.x, 0, width - 1);
    this.y = constrain(this.y, 0, height - 1);
  }
}