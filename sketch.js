/******************************************************
* Simple game that one must pass between the pipies
* before getting pushed off the screen. I call it...
* flappyCircle (It has nothing to do with flappyBird)
******************************************************/
// Variables
var bird;
var pipes = [];
var theBackground;
var score;
var highscore = 0;
var menu;
var currentScore = 0;
var game;
var startingSpeed = 2;
var pipesPerFrame = 100;

// I am just adding stuff here to see if I can connect This
// with github
// idk need I change something else?

// Whether pipes should be displayed or not
var displayPipes = false;

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

  if(frameCount % 100 == 0) {
    //console.log("Increase speed!");
    startingSpeed += .10;
  }

  // Pipe Stuff
  for (var i = pipes.length - 1; i >= 0; i--) {

    pipes[i].newSpeed(startingSpeed);

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
  if (frameCount % pipesPerFrame == 0) {
    console.log("A new pipe should appear");
  }

  var currentFrame = frameCount % 100;
  //console.log("currentFrame " + currentFrame);
  if (frameCount % pipesPerFrame == 0) {
    if (displayPipes) {
      console.log("new pipe!!");
      pipes.push(new Pipe(startingSpeed));
    } // if statement
  } // if statement


  // Bird Stuff
  bird.update();
  bird.show();

  // Score stuff
  score.update(currentScore);
  score.show();

  // Set the highscore
  if(game.isGameLost(bird)) {
    if(currentScore > highscore) {
      localStorage.setItem("highscore", currentScore);
    } // if statement

    menu.play = false;
    menu.displayGameOver();
    menu.displayHighscore();
    menu.gameOver = true;
    bird.x = -1;
    displayPipes = false;

    //console.log("The highscore is: " + localStorage.getItem("highscore"));
  } // if statement

  if(game.isGameWon(bird)) {
    menu.play = false;
    menu.displayHighscore();
    menu.gameOver = true;
    bird.x = 450;
  } // if statement

  if (!menu.play) {
    menu.displayMenu();
  } // if statement


  /*************************************************
  * Possible bug, frames mighted be minused
  *************************************************/
  if (frameCount % 200 == 0) {
    console.log("lets minus 5 frames for a new pipe to appear");
    pipesPerFrame -= 5;
  }
  //console.log("Pipes every: " + pipesPerFrame);
  //console.log("The speed of the game is: " + startingSpeed)
} // draw

function mouseClicked() {
  // console.log("X: " + mouseX);
  // console.log("Y: " + mouseY);
  // Check if they clicked start game
  if (mouseX > 75 && mouseX < 326 &&
      mouseY > 158 && mouseY < 201 && !menu.play) {
        resetGame();
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

// Resets the variables so we can play another game
function resetGame() {
  bird.x = 1;
  menu.play = true;
  bird.alive = true;
  game.gameOver = false;
  menu.gameOver = false;
  this.startingSpeed = 2;
  displayPipes = true;
  currentScore = 0;
  pipesPerFrame = 100;
}
