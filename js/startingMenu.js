// This will be as the title says, the starting menus
function startingMenu() {

var show = true;
var displayHighscore = false;

  // The update function
  this.update = function (clicked, gameLost) {
    if (clicked) {
      show = false;
    } else {
      show = true;
    }
    if (gameLost) {
      displayHighscore = true;
    }
  }

  // The display function
  this.display = function () {
    if (show) {
      strokeWeight(2);
      textSize(50);
      textStyle(BOLD);
      textAlign(CENTER);
      fill(0);
      text("Start Game", 200, 200);
    }
    if (displayHighscore && show) {
      textSize(50);
      textStyle(BOLD);
      fill(255, 255, 102);
      textAlign(CENTER);
      text("Highscore " + localStorage.getItem("highscore"), 200, 400);

      fill(255, 0, 0);
      text("Game Over!", 200, 300);
    }
  } // display
} // startingMenu
