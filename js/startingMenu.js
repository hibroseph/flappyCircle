// This will be as the title says, the starting menus
function startingMenu() {

var show = true;

  // The update function
  this.update = function (clicked) {
    if (clicked) {
      show = false;
    }
  }

  // The display function
  this.display = function () {

    if (show) {
      console.log("is this running")
      strokeWeight(2);
      textSize(50);
      textStyle(BOLD);
      textAlign(CENTER);
      fill(0);
      text("Start Game", 200, 200);
    }
  }
}
