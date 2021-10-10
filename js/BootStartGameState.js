var bgColor = '69c3fc';
var BootStartGameState = {
	//initiate some game-level settings
  init: function() {
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;
  },
  preload: function() {
  	this.load.image('preloadBar', 'assets/loader.png');
    this.load.image('cloud','assets/cloud.png');
    this.load.spritesheet('sahil_happy', 'assets/happy.png', 98, 137,2);
    this.load.image('loadfun','assets/loadingfun.png');
  },
  create: function() {
  	this.game.stage.backgroundColor = '69c3fc';
  	this.state.start('PreloadGameState');
  }
};