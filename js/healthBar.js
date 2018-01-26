// Health bar object

var healthBarLocationX = 20;
var healthBarLocationY = 10;
var healtBarHeight = 30;
var healthBarLength = 150;
var currentHealth = 0;

function healthBar() {

  this.show = function() {
    // The actual green health displaying
    noStroke();
    if (currentHealth > 40) {
      fill(66,244,89);
    } else {
      fill(255,0,0);
    }
    rect(healthBarLocationX, healthBarLocationY, currentHealth, healtBarHeight)

    fill(0);
    textSize(20);
    text(bird.getHealth(), healthBarLocationX + 72, healthBarLocationY + 23);
    // Outline of health bar
    strokeWeight(3);
    stroke(0);
    noFill();
    rect(healthBarLocationX, healthBarLocationY, healthBarLength, healtBarHeight);
  }

  this.update = function(bird) {
    if(bird.getHealth() > 0) {
      currentHealth = map(bird.getHealth(), 0, 100, 0, 150);
    }
  }


}
