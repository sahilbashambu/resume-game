var loadingFun;
var PreloadGameState = {

  preload: function() {
    loadImages();
    
    middleXWorld = this.game.world.centerX;
	middleYWorld = this.game.world.centerY;
	
    var sahilHappy = game.add.sprite(middleXWorld-100,middleYWorld-250,'sahil_happy');
    sahilHappy.scale.setTo(1.65,1.65);
	sahilHappy.animations.add('dance');
	sahilHappy.animations.play('dance',6,true);
    
    this.preloadBar = this.add.sprite(this.game.world.centerX,middleYWorld, 'preloadBar');
    this.preloadBar.anchor.setTo(0.5);
    this.preloadBar.scale.setTo(1,2);
    this.load.setPreloadSprite(this.preloadBar);
	var style = { fill: '#fff', fontstyle:"roboto"};
    var loading_text = this.game.add.text(middleXWorld,middleYWorld+2.5,"LOADING GAME...", style);
	loading_text.anchor.setTo(0.5,0.5);
	
	var delay = 0;
    for (var i = 0; i < 40; i++)
    {
        var loadingFun = game.add.sprite(-100 + (game.world.randomX), 800, 'loadfun');
        loadingFun.scale.set(game.rnd.realInRange(0.1, 0.6));
        var speed = game.rnd.between(4000, 6000);
        game.add.tween(loadingFun).to({ y: -256 }, speed, Phaser.Easing.Sinusoidal.InOut, true, delay, 50, false);
        delay += 50;
    }
  },
  create: function() {
  this.state.start('myresume');
  },
  update:function(){
     //console.log("update function - No Need in splashscreen");         
  }
};

function loadImages(){
	game.load.image('back','assets/back64.png');
	game.load.image('grass','assets/grass.png');
	game.load.image('starttree','assets/starttree.png');
	game.load.image('tree','assets/tree.png');
	game.load.image('intro','assets/intro.png');
	game.load.image('treeball','assets/treeball.png');
	game.load.image('plane','assets/plane.png');
	game.load.image('about','assets/about.png');
	game.load.image('atu','assets/atu.png');
	game.load.image('bushes','assets/bushes.png');
	game.load.image('castle','assets/castle.png');
	game.load.image('cdg','assets/cdg.png');
	game.load.image('jpj','assets/jpj.png');
	game.load.image('mountain','assets/mountain.png');
	game.load.image('colahead','assets/colahead.png');
	game.load.image('college','assets/college.png');
	game.load.image('company','assets/company.png');
	game.load.image('company2','assets/company2.png');
	game.load.image('contact','assets/contact.png');
	game.load.image('dls','assets/dls.png');
	game.load.image('education','assets/education.png');
	game.load.image('experience','assets/experience.png');
	game.load.atlasJSONHash('flag','assets/flag.png','assets/flag.json');
	game.load.image('gaming','assets/gaming.png');
	game.load.image('hobbies','assets/hobbies.png');
	game.load.image('india','assets/india.png');
	game.load.image('involvement','assets/involvement.png');
	game.load.image('jsm','assets/jsm.png');
	game.load.image('ladder','assets/ladder.png');
	game.load.image('photography','assets/photography.png');
	game.load.image('reading','assets/reading.png');
	game.load.image('rotary','assets/rotary.png');
	game.load.image('school','assets/school.png');
	game.load.image('skills','assets/skills.png');
	game.load.image('snr','assets/snr.png');
	game.load.image('startup','assets/startup.png');
	game.load.image('startupzone','assets/startupzone.png');
	game.load.image('thankyou','assets/thankyou.png');
	game.load.image('travel','assets/travel.png');
	game.load.atlasJSONHash('mail','assets/mail.png','assets/mail.json');
	game.load.image('links','assets/links.png');
	game.load.image('button','assets/button.png');
	game.load.image('download','assets/download.png');
	game.load.atlasJSONHash('sahil','assets/player_running.png','assets/player_running.json');
	game.load.atlasJSONHash('windmill','assets/data.png','assets/data.json');
	game.load.image('ground','assets/ground.png');
    
}
