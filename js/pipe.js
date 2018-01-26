
function Pipe(speed) {

  // The empty space
  this.emptySpace = random(70, 200);
  this.emptySpacex = random(20, 500);

  // How far the top pipe goes down
  this.top = this.emptySpacex;
  // How far the bottom pipe goes up
  this.bottom = height - (this.top + this.emptySpace);
  // Where the pipes start on the x-axis (right side screen)
  this.x = width;
  // The width of the pipes
  this.w = 20;
  // The speed of the pipes
  this.speed = speed;
  // Has the score been recorded?
  this.scoreRecorded = false;

  // This function worries about showing the pipies
  this.show = function() {
    fill(255);
    rect(this.x, 0, this.w, this.top);
    rect(this.x, height-this.bottom, this.w, this.bottom)
  } // end show

  this.newSpeed = function(speed) {
    this.speed = speed;
  }

  // Increases speed by the number passed in
  this.increaseSpeed = function(speed) {
    this.speed += speed;
  }
  // This function updates the pipes
  this.update = function() {
    this.x -= this.speed;
  } // end update

  // Checks if the bird has hit the pipe
  this.hit = function(bird) {
    if(bird.y < this.top || bird.y > height - this.bottom) {
      if(bird.x > this.x && bird.x < this.x + this.w) {
        bird.hit(true);
        return true;
      }
    } else {
    bird.hit(false);
    return false;
    }
  } // end hit

  // Checks to see if the pipe is off screen
  this.offscreen = function() {
    if (this.x < -this.w) {
      return true;
    } else {
      return false;
    }
  } // end offscreen
}
