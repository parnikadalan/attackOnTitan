var backGroundImg, bgSprite
var player, playerSprite
var gameState = "start"
var button1
var titan, titanSprite
var rand
var erenImage, titanImage
var erenImageSprite, titanImageSprite
var aot, aotLogo



function preload() {
  backGroundImg = loadImage('images/backGround.jpg')
  player = loadImage('images/eren.png')
  titan = loadImage('images/titanSprite (1).png')
  erenImage = loadImage('images/erenY.jpg')
  titanImage = loadImage('images/titanC.jpg')
  aot = loadImage('images/singekiNoKyojin.png')

}
function setup() {
  createCanvas(windowWidth, windowHeight);

  bgSprite = createSprite(width / 2, height / 2, width, height)
  bgSprite.addImage(backGroundImg)
  bgSprite.scale = 1
  bgSprite.velocityX = -2

  playerSprite = createSprite(200, 580, 20, 20)
  playerSprite.addImage(player)
  playerSprite.scale = 1.5
  playerSprite.visible = false

  button1 = createButton("Play")
  button1.position(100, 50)

  erenImageSprite = createSprite(200,200,10,10)
  erenImageSprite.scale = 0.3
  erenImageSprite.addImage(erenImage)

  titanImageSprite = createSprite(200,500,5,5)
  titanImageSprite.scale = 0.08
  titanImageSprite.addImage(titanImage)

  aotLogo = createSprite(750,90,5,5)
  aotLogo.scale = 0.5
  aotLogo.addImage(aot)

}

function draw() {
  background(205, 153, 0);

  if (bgSprite.x < 0) {
    bgSprite.x = bgSprite.width / 2
  }

  button1.mousePressed(() => {
    gameState = "play"
    button1.hide()
    erenImageSprite.visible = false
    titanImageSprite.visible = false
    aotLogo.visible = false
  })
  

  if (gameState === "play") {
    playerSprite.visible = true

    spawnTitans()

    if (keyDown(UP_ARROW)) {
      player.velocityY = player.velocityX - 2
    }

    if (keyDown(DOWN_ARROW)) {
      player.velocity = player.velocityY + 2
    }
    if (keyDown(RIGHT_ARROW)) {
      player.velocityX = player.velocityX + 2
    }
    if (keyDown(LEFT_ARROW)) {
      player.velocityX = player.velocityX - 2
    }

  }



  drawSprites();

  if (gameState === "start") {
    textSize(20)
    fill(0)
    text('This game is set in a world where humanity lives inside cities surrounded by three enormous walls',430,310)
    text('that protect them from the gigantic man-eating humanoids referred to as Titans.', 430, 340)
    text('The story follows Eren Yeager, who vows to exterminate the Titans and avenge his loved ones.', 430, 370)
    titanImageSprite.display()
    erenImageSprite.display()
    aotLogo.display()
  }

}

function spawnTitans() {
  rand = Math.round(random(200, 300))

  titanSprite = createSprite(1400, 570, 20, 20)
  titanSprite.addImage(titan)
  titanSprite.scale = 1.5


}

