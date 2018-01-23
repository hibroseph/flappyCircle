function Menu() {
    this.play = false;
    this.gameOver = false;

    this.displayMenu = function() {
      textSize(50);
      textStyle(BOLD);
      textAlign(CENTER);
      fill(0);
      text("Start Game", 200, 200);
    } // displayMenu

    this.displayGameOver = function() {
      textSize(50);
      textStyle(BOLD);
      fill(244, 66, 66);
      textAlign(CENTER);
      text("Game Over", 200, 300);
    } // displayGameOver

    // Displays the highscore
    this.displayHighscore = function() {
      textSize(50);
      textStyle(BOLD);
      fill(255, 255, 102);
      textAlign(CENTER);
      text("Highscore " + localStorage.getItem("highscore"), 200, 400);
    } //displayWinnter

    this.update = function() {

    }

} // Menu
