function Background() {
  // A container for the mountains
  var Mountains = [];
  // How fast shall we go?
  this.speed = 1;
  // Add 1 mountain in the start!
  Mountains.push(new Mountain());

  // Updates the mountain objects to move them
  this.update = function(mount) {
    mount.startXCoord -= this.speed;
    mount.endXCoord -= this.speed;
  } // end_update

  // Shows the mountains
  this.show = function () {
    for (var i = Mountains.length - 1; i >= 0; i--) {
      this.update(Mountains[i]);

      Mountains[i].show();

      // Are they off screen? If so DELETE
      if(Mountains[i].offScreen()) {
        Mountains.splice(i, 1);
      }

    }// end_loop

    // Create a new mountain every ___ frames
    if (frameCount % 200 == 0) {
      Mountains.push(new Mountain());
    }

  } // end_show

} // Background

/* An instance of 1 Mountain */
function Mountain() {
  // Where the mountain starts x coordinate
  this.startXCoord = width;
  // Where the mountain ends on the x coordinate
  this.endXCoord = width + random(150, 500);
  this.randHeight = random(300, 500);

  // Some random colors to make each mountain a little different
  this.red = random(30, 80);
  this.green = random(180, 255);
  this.blue = random(50, 120);

  // Shows the mountains!
  this.show = function() {
    fill(this.red, this.green, this.blue);
    triangle(this.startXCoord, height,
             (this.endXCoord + this.startXCoord) / 2, this.randHeight, this.endXCoord, height);

  }// end_show

  // Decides whether the mountain is offscreen or not
  this.offScreen = function () {
    if (this.endXCoord < 0) {
      return true;
    } else {
      return false;
    }
  }
} // Mountain
