var w = window.innerWidth;
var h = window.innerHeight;

var game = new Phaser.Game(w, h, Phaser.AUTO);

game.state.add('myresume', myresume);
game.state.add('PreloadGameState', PreloadGameState);
game.state.add('BootStartGameState', BootStartGameState);
game.state.start('BootStartGameState');