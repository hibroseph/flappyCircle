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
var currentScore = 0;
var startingSpeed = 2;
var pipesPerFrame = 100;
var healthBar;
var menuClicked = false;
var sMenu;
var birdStartPosition = -17;
// Whether pipes should be displayed or not
var displayPipes = false;
var play = false;
var gameLost = false;

function setup() {
  createCanvas(400, 600);
  bird = new Bird();
  score = new Score();
  theBackground = new Background();
  healthBar = new healthBar();
  sMenu = new startingMenu();
} // setup

function draw() {
  background(66, 158, 244);

  // background
  theBackground.show();

  if(frameCount % 100 == 0) {
    //console.log("Increase speed!");
    startingSpeed += .10;
  }

  // Displaying pipes
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
        if(play) {
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
    //console.log("A new pipe should appear");
  }

  var currentFrame = frameCount % 100;
  //console.log("currentFrame " + currentFrame);
  if (frameCount % pipesPerFrame == 0) {
    if (displayPipes) {
      //console.log("new pipe!!");
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
  if(gameLost) {
    if(currentScore > highscore) {
      localStorage.setItem("highscore", currentScore);
    } // if statement
  } // if statement

  // Health bar
  healthBar.update(bird);
  healthBar.show();

  /*************************************************
  * Possible bug, frames mighted be minused
  *************************************************/
  if (frameCount % 200 == 0) {
    //console.log("lets minus 5 frames for a new pipe to appear");
    pipesPerFrame -= 5;
  }

  sMenu.update(menuClicked, gameLost);
  sMenu.display();

  // check if the game is over
  if (play) {
    isGameOver();
  }

  if (gameLost) {
    gameOver();
    displayPipes = false;
    menuClicked = false;
  }

} // draw

function mouseClicked() {
  // console.log("X: " + mouseX);
  // console.log("Y: " + mouseY);

  // Check if they clicked start game
  if (mouseX > 75 && mouseX < 326 &&
      mouseY > 158 && mouseY < 201 && !play) {
        menuClicked = true;
        startGame();
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

// Let's start the game
function startGame() {
  play = true;
  displayPipes = true;
  currentScore = 0;
  pipesPerFrame = 100;
  gameLost = false;
  startingSpeed = 2;
  bird.reset();
}

// Let's check to see if the game is over
function isGameOver() {
  if(bird.x < -17 && play) {
    bird.alive = false;
    gameLost = true;
  }
}

// What will happen when the game is over
function gameOver() {
  bird.x = birdStartPosition;
  play = false;

}
