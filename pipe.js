
function Pipe() {

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
  this.speed = 2
  // To highlight it red if you hit it
  this.highlight = false;
  // Has the score been recorded?
  this.scoreRecorded = false;

  // This function worries about showing the pipies
  this.show = function() {
    fill(255);
    if (this.highlight == true)
    {
      fill(244, 66, 66);
    }
    rect(this.x, 0, this.w, this.top);
    rect(this.x, height-this.bottom, this.w, this.bottom)
  } // end show

  // This function updates the pipes
  this.update = function() {
    this.x -= this.speed;
    //this.speed += .10
  } // end update

  // Checks if the bird has hit the pipe
  this.hit = function(bird) {
    if(bird.y < this.top || bird.y > height - this.bottom) {
      if(bird.x > this.x && bird.x < this.x + this.w) {
        this.highlight = true;
        return true;
      }
    }
    this.highlight = false;
    return false;
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
