function Bird() {
  this.y = height / 2;
  this.x = 1;
  // Gravity
  this.gravity = .50;
  // Velocity
  this.velocity = 0;
  // Lift of the bird
  this.lift = 15;
  // Speed of bird
  this.speed = .50;
  // Is the game over?
  this.alive = true;
  this.health = 100;
  this.highlight = false;

  // Shows the bird
  this.show = function() {
    if(this.highlight) {
      fill(244, 66, 66);
    } else {
      fill(255);
    }
    stroke(2);
    ellipse(this.x, this.y, 32, 32);
  }

  this.hit = function(bool) {
    if(bool) {
    this.health -= 1;
    }
    this.highlight = bool;
  }

  // Returns the health
  this.getHealth = function() {
    return this.health;
  }
  this.up = function() {
    this.velocity -= this.lift;
  }
  // Updates the current position with velocity
  // and gravity taken into account
  this.update = function() {


    this.velocity *= .95; // was .95
    this.velocity += this.gravity;
    this.y += this.velocity;

    if(this.health <= 0) {
      this.alive = false;
    }
    // If we are displaying pipes, we want
    // to increase the speed of the bird
    if (displayPipes == true) {
    this.x += this.speed;
  }

  // Makes sure if the bird reaches the bottom, it stops
    if (this.y > height)  {
      this.y = height;
      this.velocity = 0;
    }

  // If the bird reaches the top it stops
    if (this.y < 0) {
      this.y = 0;
      this.velocity = 0;
    }

  }

}
