function Menu() {
    this.play = false;
    this.gameOver = false;

    this.displayMenu = function() {
      textSize(50);
      textAlign(CENTER);
      fill(0);
      text("Start Game", 200, 200);
    } // displayMenu

    this.displayGameOver = function() {
      textSize(50);
      fill(244, 66, 66);
      textAlign(CENTER);
      text("Game Over", 200, 300);
    } // displayGameOver

    this.displayWinner = function() {
      textSize(50);
      fill(66, 244, 98);
      textAlign(CENTER);
      text("You won!", 200, 400);
    } //displayWinnter

    this.update = function() {

    }

} // Menu
