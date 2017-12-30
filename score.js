// The score object
// Keeps track of displaying the score
function Score() {

  // Where the score will be added
  this.score = 0;

  // Updates the score being kept in the main loop to here
  this.update = function(score) {
    this.score = score;
  }

  // How the text will be displayed
  this.show = function() {
    textSize(32);

    fill(255);
    if(this.score < 0) {
      fill(255, 42, 42);
    }

    text(this.score, 10, 30 );
  }

}
