function gameRules() {

  this.gameLost = false;
  // If the bird falls off the screen, he is dead
  this.isGameOver = function(bird) {
    if(bird.x < 0) {
      bird.alive = false;
      return true;
    } else {
      return false;
    }
  } // isGameOver

  this.isWonGame = function(bird) {
    if(bird.x > width) {
      return true;
    } else {
      return false;
    }
  }

} // gameRules
