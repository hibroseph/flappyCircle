/******************************************************
* Simple game that one must pass between the pipies
* before getting pushed off the screen.
* Future updates: make the speed of the pipes increase slowly
* Last worked on: 12/30/17
******************************************************/

// Variables
var bird;
var pipes = [];
var theBackground;
var score;
var menu;
var currentScore = 0;
var game;

// Whether pipes should be displayed or not
var displayPipes = true;

function setup() {
  createCanvas(400, 600);
  bird = new Bird();
  score = new Score();
  theBackground = new Background();
  menu = new Menu();
  game = new gameRules();
} // setup

function draw() {
  background(66, 158, 244);


  // background
  theBackground.show();

  // Pipe Stuff
  for (var i = pipes.length - 1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();

    if (pipes[i].offscreen()) {
      pipes.splice(i , 1);
    }

    // Handle adding/subtracting points
    if (pipes.length > 0) {
      if (pipes[i].hit(bird) && !pipes[i].scoreRecorded) {
        //pipes[i].scoreRecorded = true;
        //currentScore -= 1;

        // If we are playing the game
        if(menu.play) {
          bird.x = pipes[i].x;
        }
      } else if (!pipes[i].hit(bird) && !pipes[i].scoreRecorded &&
      pipes[i].x < bird.x) {
        pipes[i].scoreRecorded = true;
        currentScore += 1;
      }
    } // if statement

  } // for loop

  // Lets add a new pipe every 100 frames
  if (frameCount % 100 == 0) {
    if (displayPipes) {
      pipes.push(new Pipe());
    } // if statement
  } // if statement


  // Bird Stuff
  bird.update();
  bird.show();

  // Score stuff
  score.update(currentScore);
  score.show();

  if(game.isGameOver(bird)) {
    menu.play = false;
    menu.displayGameOver();
    menu.gameOver = true;
  }

  if(game.isWonGame(bird)) {
    menu.play = false;
    menu.displayWinner();
    menu.gameOver = true;
  }

  if(menu.gameOver) {
    bird.x = -5;
  }

  if (!menu.play) {
    menu.displayMenu();
  } // if statement

} // draw

function mouseClicked() {
  // console.log("X: " + mouseX);
  // console.log("Y: " + mouseY);

  // Check if they clicked start game
  if (mouseX > 75 && mouseX < 326 &&
      mouseY > 158 && mouseY < 201 && !menu.play) {
        console.log("You pressed start game");
        bird.x = 50;
        menu.play = true;
        bird.alive = true;
        game.gameOver = false;
        menu.gameOver = false;
        currentScore = 0;
      }
} // mouseClicked

function keyPressed() {
  if (key == "1") {
    console.log("You pressed 1!");
  }
} // keyPressed

function keyPressed() {
  if (key == ' ' && bird.alive) {
    bird.up();
  }  // keyPressed
}
