
let backgroundImage, characterImage, scenario, gameSound, character;

function preload(){
  backgroundImage = loadImage('./assets/imagens/cenario/floresta.png');
  characterImage = loadImage('./assets/imagens/personagem/correndo.png');
  gameSound = loadSound('./assets/sons/trilha_jogo.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  scenario = new Scenario (backgroundImage, 3);
  character = new Character(characterImage);
  frameRate(40);
  // gameSound.loop();
}

function draw() {
  // image(image, positionX, positionY, imageWDTH, imgHGTH, spritePointX, spritePointY, spritesizeWdth, spritesizeHeight)
  scenario.show();
  scenario.move();
  character.show();

}
