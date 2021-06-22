function play() {

  playerSprite.visible = true

  var x = 100

  for (var i = 0; i < playerLives; i++) {
    image(liveImage, x, 50, 70, 80)
    x = x + 100
  }
  fill(0)
  textSize(20)
  text('LIVES:', 30, 100)

  score = 5- titanNumber
  text('Score:'+score, width-200, 30)

  spawnTitans()
  if (titanGroup.length !== 0) {
    spawnFire()

    if (playerSprite.isTouching(fireBallGroup) && fireBallGroup.length !== 0) {
      playerLives = playerLives - 1
      fireBallGroup.destroyEach()
    }
    if (playerSprite.isTouching(titanSprite)) {
      titanHealth = titanHealth - 20
      playerSprite.x = playerSprite.x - 300
      titanSprite.changeImage("hurt", titanHurt)
    }
    //if (!playerSprite.isTouching(titanSprite)) {
    //  titanSprite.changeImage("normalTitan", titan)
    //}

    if (playerLives === 0) {
      playerSprite.changeImage("playerDead", erenDead)
      gameState = "gameOver"
    }
    if (titanHealth <= 0) {
      titanGroup.destroyEach()
      sec = second()
      titanNumber = titanNumber - 1
    }
    if (titanHealth > 0) {
      push()
      fill("green")
      rect(width - 300, 100, titanHealth * 2, 20)
      pop()
    }
  }
  if (keyDown(UP_ARROW)) {
    playerSprite.velocityY = -10
    playerSprite.changeImage("playerJump", playerJumping)
  }
  playerSprite.velocityY = playerSprite.velocityY + 0.5
  playerSprite.collide(ground)
  if (keyDown(DOWN_ARROW)) {
    playerSprite.y = playerSprite.y + 2
  }

  if (keyDown(LEFT_ARROW)) {
    playerSprite.x = playerSprite.x - 2
  }
  if (keyDown("d")) {
    playerSprite.x = playerSprite.x + 10
    playerSprite.changeAnimation("playerImg", playerRunning)
  }
  if (keyWentUp("d")) {
    playerSprite.changeImage("playerStandingImg", playerStanding)
  }

  if (titanNumber === 0) {
    textSize(30)
    text("GOING INTO LEVEL 2", width / 2 - 400, height / 2)
    gameState = "level2"
  }
}

function start() {

  textSize(20)
  fill(0)
  text('This game is set in a world where humanity lives inside cities surrounded by three enormous walls', 430, 310)
  text('that protect them from the gigantic man-eating humanoids referred to as Titans.', 430, 340)
  text('The story follows Eren Yeager, who vows to exterminate the Titans and avenge his loved ones.', 430, 370)
  text('PLAYER CONTROLS', 430, 460)
  text('Press right arrow key to move towards the right', 430, 490)
  text('Press left arrow key to move towards the left', 430, 520)
  text('Press up arrow key to move up', 430, 550)
  text('Press down arrow key to move down', 430, 580)
  titanImageSprite.display()
  erenImageSprite.display()
  aotLogo.display()
}

function spawnTitans() {
  console.log((sec + 5) % 60)
  if (titanGroup.length === 0 && second() == (sec + 5) % 60) {

    titanHealth = 100
    titanSprite = createSprite(width-200, 570, 20, 20)
    titanSprite.debug = false
    //titanSprite.setCollider("rectangle", -100, 0, 100, 200)
    titanSprite.addImage("normalTitan",titan)
    titanSprite.addImage("hurt", titanHurt)
    titanSprite.scale = 1.5
    titanGroup.add(titanSprite)

  }

}

function spawnFire() {

  if (frameCount % 60 === 0) {
    rand = Math.round(random(1, 2))
    console.log(rand)
    if (rand === 2) {
      var fireBall = createSprite(titanSprite.x - 100, titanSprite.y, 20, 10)
      fireBall.addImage("fire", fire)
      fireBall.debug = false
      fireBall.scale = 0.4
      //fireBall.setCollider("rectangle",0,-150,20,20)
      fireBall.velocityX = -20
      fireBallGroup.add(fireBall)
    }
  }
}

function gameOver() {
  bgSprite.velocityX = 0;
  textSize(50)
  fill(0)
  text('GAME OVER', width / 2, height / 2)
  playerSprite.changeImage("playerDead", erenDead)

}