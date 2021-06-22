var backGroundImg, bgSprite
var playerSprite
var gameState = "start"
var button1
var titan, titanSprite, titanGroup, titanNumber = 5;
var rand
var erenImage, titanImage
var erenImageSprite, titanImageSprite, titanHurt
var aot, aotLogo
var playerStanding, playerRunning, playerJumping 
var titanHealth = 100, playerLives = 3
var liveImage
var sec
var fireBallGroup,fire
var ground
var erenDead, erenDeadSprite
var score = 0  



function preload() {
  backGroundImg = loadImage('images/backGround.jpg')
  playerRunning = loadAnimation('images/tile012.png', 'images/tile013.png', 'images/tile014.png')
  playerJumping = loadImage('images/tile006.png')
  playerStanding = loadImage('images/eren.png')
  titan = loadImage('images/titanSprite (1).png')
  erenImage = loadImage('images/erenY.jpg')
  titanImage = loadImage('images/titanpic.png')
  aot = loadImage('images/singekiNoKyojin.png')
  liveImage = loadImage('images/surveyCorp (1).png')
  fire = loadImage('images/tile001.png')
  erenDead = loadImage('images/erenDead.png')
  titanHurt = loadImage('images/titanHurt.png')

}
function setup() {
  createCanvas(windowWidth, windowHeight);

  bgSprite = createSprite(width / 2, height / 2, width, height)
  bgSprite.addImage(backGroundImg)
  bgSprite.scale = 1
  bgSprite.velocityX = -2

  ground = createSprite(width/2, height-30, width, 20)
  ground.visible = false

  playerSprite = createSprite(200, 580, 20, 20)
  playerSprite.addImage("playerStandingImg", playerStanding)
  playerSprite.addAnimation("playerImg", playerRunning)
  playerSprite.addImage("playerJump", playerJumping)
  playerSprite.debug = false
  playerSprite.setCollider("rectangle", -20,0,70,100)
  playerSprite.scale = 1.5
  playerSprite.visible = false
  playerSprite.addImage("playerDead",erenDead)

  button1 = createButton("Play")
  button1.position(100, 50)

  erenImageSprite = createSprite(200, 200, 10, 10)
  erenImageSprite.scale = 0.3
  erenImageSprite.addImage(erenImage)
  

  titanImageSprite = createSprite(200, 470, 5, 5)
  titanImageSprite.scale = 0.6
  titanImageSprite.addImage(titanImage)

  aotLogo = createSprite(750, 90, 5, 5)
  aotLogo.scale = 0.5
  aotLogo.addImage(aot)

  titanGroup = new Group()

  sec = second()

  fireBallGroup = new Group()


}

function draw() {
  background(205, 153, 0);
  drawSprites();

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

  if (gameState === "start") {
    start()
  }

  if (gameState === "play") {
    play()
  }

  if(gameState === "gameOver"){
    gameOver()
  }
}




