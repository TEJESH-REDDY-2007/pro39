var canvas, backgroundImage;
var playerCount, database, allPlayers;
var gameState = 0;
var distance = 0;
var form, player, game;
var skateBoard1, skateBoard2, skateBoards;

function preload() {

}


function setup() {
canvas = createCanvas(displayWidth-4, displayHeight-112);
database = firebase.database();
game = new Game();
game.getState();
game.start();
}


function draw() { 
  if(playerCount === 2){
    game.update(1);
  }

  if(gameState === 1){
    clear();
    game.play();
  }

//  drawSprites();
}



