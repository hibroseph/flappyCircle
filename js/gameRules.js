function gameRules() {
  
  this.gameLost = false;
  // If the bird falls off the screen, he is dead
  this.isGameLost = function(bird) {
    if(bird.x < 0) {
      bird.alive = false;
      //console.log("Game is lost!");
      return true;
    } else {
      return false;
    }
  } // isGameOver

  this.isGameWon = function(bird) {
    if(bird.x > width) {
      //console.log("Game is won!");
      return true;
    } else {
      return false;
    }
  }

} // gameRules
