var w = window.innerWidth;
var h = window.innerHeight;
var backgroundColor = "#69c3fc"; 
var player;
var cursors;
var tree1;
var plane;
var text;
var github_url="https://github.com/sahilbashambu";
var linkedin_url="https://linkedin.com/in/sahilbashambu";
//var resume_url="https://cvee.me/sahilbashambu.pdf";
var resume_url= "https://tqb.notion.site/Sahil-Bashambu-cfdd4ca161bb414593abb5fd68626e22";
var hashnode_url="https://TheQuirkyBit.com";
var pokemon_url = "https://cvee.me/pokemon";
var start_text;
var end_text;
var offsetNewCompany = 600;
var platformLength =19700+offsetNewCompany;
var start_point=150;
var starting_y_point = -200;
var back_btn;
var direction = "left";
var debug=false;
var flag;
var flagbool = true;

//use for simplify the length of assets in game

var milestone1 = 1500; //intro
var milestone2 = 4250; //education
var milestone3 = 7400; //experience
var milestonemountain = 6650;
var milestonewindmill = 9550+offsetNewCompany; //windmill
var milestone4 = 10050+offsetNewCompany;
var milestone5 =11900+offsetNewCompany;
var milestone6=13300+offsetNewCompany;
var milestone7=17600+offsetNewCompany;
var milestoneflag = 18900+offsetNewCompany;
var milestoneplane = 20000+offsetNewCompany;

var myresume = {
    create:function(){
        console.log("Create function");
        gamecreate();
    },
    update:function(){
        console.log("update function");
        gameupdate();
    },
    render:function(){
		if(debug)
			rendergame();
       // console.log("render function");
    }
};
		  

window.addEventListener('resize', () => {
	game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	let nw = window.innerWidth;
	let nh = window.innerHeight;
	game.scale.setGameSize(nw,nh);
	game.stage.getBounds.width = nw;
	game.stage.getBounds.height = nh;
	game.camera.setSize(nw, nh);
});


function gamecreate(){
	//text.setText("");
	game.stage.backgroundColor =backgroundColor;
	game.world.setBounds(0, 0,platformLength,h+800);

	for(var i=0;i<19000;i+=1000){
		game.add.sprite(i,h-750,'cloud');
		game.add.sprite(i+400,h-650+50,'cloud');
	}
	
	var ground = game.add.tileSprite(0,h-100,platformLength*2,2000,'ground');
	ground.scale.setTo(0.5,0.5);
	var grass = game.add.tileSprite(0,h-100,platformLength*2,50,'grass');
	grass.scale.setTo(0.5,0.5);

// Adding main Title tree
	tree1 = game.add.sprite(milestone1-1200,h-(100-1)-(1.25*464),'starttree');
	tree1.scale.setTo(1.25,1.25);

	let bushes = game.add.sprite(milestone1-200,h-(100-2)-(0.60*190),'bushes');
	bushes.scale.setTo(0.60,0.60);


	//About Section
	game.add.sprite(milestone1,h-(100-2)-(1.25*127),'about').scale.setTo(1.25,1.25);
	game.add.sprite(milestone1+200,h-(100-5)-(1*359),'intro');
	game.add.sprite(milestone1+1000,h-(100-2)-(0.75*448),'treeball').scale.setTo(0.75,0.75);
	game.add.sprite(milestone1+1200,h-(100-2)-(1*431),'india');
	game.add.sprite(milestone1+1980,h-(100-2)-(0.75*448),'treeball').scale.setTo(0.75,0.75);

	//Education Section
	let bushes1 = game.add.sprite(milestone2-350,h-(100-2)-(0.60*190),'bushes');
	bushes1.scale.setTo(0.60,0.60);
	game.add.sprite(milestone2-150,h-(100-2)-(1.25*127),'education').scale.setTo(1.25,1.25);;

	game.add.sprite(milestone2,h-(100-2)-(0.75*463),'tree').scale.setTo(0.75,0.75);
	game.add.sprite(milestone2+300,h-(100-2)-(1*378),'school');
	game.add.sprite(milestone2+850,h-(100-2)-(0.75*463),'tree').scale.setTo(0.75,0.75);
	game.add.sprite(milestone2+1100,h-(100-2)-(1.25*128),'colahead').scale.setTo(1.25,1.25);;
	game.add.sprite(milestone2+1250,h-(100-2)-(0.75*448),'treeball').scale.setTo(0.75,0.75);
	game.add.sprite(milestone2+1500,h-(100-2)-(1.25*253),'college').scale.setTo(1.25,1.25);;
	game.add.sprite(milestone2+2150,h-(100-2)-(0.75*448),'treeball').scale.setTo(0.75,0.75);

	game.add.sprite(milestonemountain,h-(100-2)-0.80*400,'mountain').scale.setTo(0.80,0.80);

	//Experience Section
	let bushes2 = game.add.sprite(milestone3-350,h-(100-2)-(0.60*190),'bushes');
	bushes2.scale.setTo(0.60,0.60);
	game.add.sprite(milestone3-150,h-(100-2)-(1.25*127),'experience').scale.setTo(1.25,1.25);;

	game.add.sprite(milestone3,h-(100-2)-(0.75*463),'tree').scale.setTo(0.75,0.75);
	game.add.sprite(milestone3+300,h-(100-2)-(0.90*610),'company').scale.setTo(0.90,0.90);
	game.add.sprite(milestone3+850,h-(100-2)-(0.75*463),'tree').scale.setTo(0.75,0.75);
	game.add.sprite(milestone3+1150,h-(100-2)-(0.90*574),'company2').scale.setTo(0.90,0.90);
	game.add.sprite(milestone3+1700,h-(100-2)-(1.25*128),'startupzone').scale.setTo(1.25,1.25);
	game.add.sprite(milestone3+1850,h-(100-2)-(0.75*448),'treeball').scale.setTo(0.75,0.75);
	game.add.sprite(milestone3+2100,h-(100-2)-(1*326),'startup');
	game.add.sprite(milestone3+2500,h-(100-2)-(0.75*448),'treeball').scale.setTo(0.75,0.75);

	
	let windmill = game.add.sprite(milestonewindmill,h-(100-2)-(1*492), 'windmill');
	windmill.animations.add('run');
	windmill.animations.play('run',8,true);

	
	//Skill Section
	let bushes3 = game.add.sprite(milestone4-200,h-(100-2)-(0.60*190),'bushes');
	bushes3.scale.setTo(0.60,0.60);
	game.add.sprite(milestone4,h-(100-2)-(1.25*127),'skills').scale.setTo(1.25,1.25);;

	game.add.sprite(milestone4+200,h-(100-2)-(0.90*870) - 250,'jsm').scale.setTo(0.90,0.90);
	//jsm.to({ y: game.world.height-ball.height }, 1000 + Math.random() * 3000, Phaser.Easing.Bounce.In);
	game.add.sprite(milestone4+250,h-(100-2)-(0.30*190),'bushes').scale.setTo(0.30,0.30);
	game.add.sprite(milestone4+450,h-(100-2)-(0.90*1255) - 150,'atu').scale.setTo(0.90,0.90);
	game.add.sprite(milestone4+500,h-(100-2)-(0.30*190),'bushes').scale.setTo(0.30,0.30);
	game.add.sprite(milestone4+700,h-(100-2)-(0.90*870) - 250,'cdg').scale.setTo(0.90,0.90);
	game.add.sprite(milestone4+750,h-(100-2)-(0.30*190),'bushes').scale.setTo(0.30,0.30);
	game.add.sprite(milestone4+950,h-(100-2)-(0.90*1254) - 150,'snr').scale.setTo(0.90,0.90);
	game.add.sprite(milestone4+1000,h-(100-2)-(0.30*190),'bushes').scale.setTo(0.30,0.30);
	game.add.sprite(milestone4+1200,h-(100-2)-(0.90*870) - 250,'dls').scale.setTo(0.90,0.90);
	game.add.sprite(milestone4+1250,h-(100-2)-(0.30*190),'bushes').scale.setTo(0.30,0.30);

	// let windmill1 = game.add.sprite(11450,h-(100-2)-(1*492), 'windmill');
	// windmill1.animations.add('run');
	// windmill1.animations.play('run',8,true);


	//Involvement Section
	let bushes4 = game.add.sprite(milestone5-200,h-(100-2)-(0.60*190),'bushes');
	bushes4.scale.setTo(0.60,0.60);
	game.add.sprite(milestone5,h-(100-2)-(1.25*127),'involvement').scale.setTo(1.25,1.25);;
	game.add.sprite(milestone5+250,h-(100-2)-(0.70*458),'rotary').scale.setTo(0.70,0.70);
	game.add.sprite(milestone5+800,h-(100-2)-(0.75*448),'treeball').scale.setTo(0.75,0.75);


	//Hobbies Section
	let bushes5 = game.add.sprite(milestone6-200,h-(100-2)-(0.60*190),'bushes');
	bushes5.scale.setTo(0.60,0.60);
	game.add.sprite(milestone6,h-(100-2)-(1.25*127),'hobbies').scale.setTo(1.25,1.25);;
	game.add.sprite(milestone6+250,h-(100-2)-(1*434),'travel');
	game.add.sprite(milestone6+1550,h-(100-2)-(0.75*463),'tree').scale.setTo(0.75,0.75);
	game.add.sprite(milestone6+1900,h-(100-2)-(1*242),'reading');
	game.add.sprite(milestone6+2450,h-(100-2)-(0.75*448),'treeball').scale.setTo(0.75,0.75);
	game.add.sprite(milestone6+2725,h-(100-2)-(1*273),'photography');
	game.add.sprite(milestone6+3200,h-(100-2)-(0.75*463),'tree').scale.setTo(0.75,0.75);
	// game.add.sprite(16750,h-(100-2)-(1*195),'gaming');
	game.add.button(milestone6+3500,h-(100-2)-(1*195),'gaming',openPokemonGame, this);
	// game.add.sprite(17350,h-(100-2)-(0.75*448),'treeball').scale.setTo(0.75,0.75);

	//Contact Section
	let bushes6 = game.add.sprite(milestone7-200,h-(100-2)-(0.60*190),'bushes');
	bushes6.scale.setTo(0.60,0.60);
	game.add.sprite(milestone7,h-(100-2)-(1.25*127),'contact').scale.setTo(1.25,1.25);;
	
	let mail = game.add.sprite(milestone7+250,h-(100-2)-(0.50*418), 'mail');
	mail.scale.setTo(0.50,0.50);
	mail.animations.add('run');
	mail.animations.play('run',2,true);

	let mailicon = game.add.button(milestone7+250,h-(100-2)-(232),'button',openGmail,this);
	mailicon.alpha=0;



	let linkedbutton = game.add.sprite(milestone7+500,h-(100-2)-(1*463),'links');
	// linkedbutton.anchor.setTo(0.5,0.5);
	let linkedinHiddenbutton1 = game.add.button(0 ,linkedbutton.y + linkedbutton.height/2,'button',openLinkedInPage,this);//.alpha = 0;
	linkedinHiddenbutton1.x = linkedbutton.x;
	linkedinHiddenbutton1.width = 70;
	linkedinHiddenbutton1.alpha=0;
	let linkedinHiddenbutton = game.add.button(0 ,linkedbutton.y + linkedbutton.height/2,'button',openHashnodeBlog,this);
	linkedinHiddenbutton.x = linkedbutton.x + linkedinHiddenbutton.width+140;
	linkedinHiddenbutton.width = 70;
	linkedinHiddenbutton.alpha = 0;
	
	let bushes7 = game.add.sprite(milestoneflag-250,h-(100-2)-(0.60*190),'bushes');
	bushes7.scale.setTo(0.60,0.60);
	game.add.sprite(milestoneflag,h-(100-2) - (1*400),'castle');

	flag = game.add.sprite(milestoneflag+500,h-(100-2)- (1*402),'flag');
	flag.animations.add('run');


	plane = game.add.sprite(milestoneplane,h-650,'plane');
 	game.physics.arcade.enable(plane);
	plane.scale.setTo(0.75,0.75);
	start_text = game.add.text(w/2-200,h-50,"Use ◀ Screen Buttons ▶ or  Arrow Keys",{font:"35px Roboto",fill:"#fff"});
	end_text = game.add.text(platformLength - w/2 - 200,h-50,"All the design elements are created by Sahil.",{font:"35px Roboto",fill:"#fff"});
	end_text.alpha=0;
	let alphaText = game.add.text(platformLength - w/2 - 100,h-10,"*Fun Fact*: The Game size is only 600KB including graphics.",{font:"20px Roboto",fill:"#fff"});
	alphaText.alpha=0.6;
	player = game.add.sprite(100,starting_y_point,'sahil');
	player.animations.add('run');

	//	player entry animation of bounce
	var entryTween = game.add.tween(player);
 	entryTween.to({x:start_point,y:h-(100-2)-player.height},2000,Phaser.Easing.Bounce.Out, true);
 	entryTween.start();
	cursors = game.input.keyboard.createCursorKeys();
	game.physics.startSystem(Phaser.Physics.ARCADE);
	game.physics.arcade.enable(player);
	game.input.mouse.mouseWheelCallback = mouseWheel;
	game.camera.follow(player);
	game.camera.follow(player,Phaser.Camera.FOLLOW_PLATFORMER);

	back_btn = game.add.button(20,h-94,'back');
	fwd_btn = game.add.button(w-20,h-94,'back');
	fwd_btn.scale.x *= -1;
	fwd_btn.fixedToCamera = true;
	back_btn.fixedToCamera = true;
	
	resume_download = game.add.button(w-150,05,'download',downloadPDFResume,this);
	resume_download.fixedToCamera = true;
	// resume_download.scale.setTo(0.5,0.5);
	//game.add.text(w-120,100,"Download PDF",{font:"10px Roboto",fill:"#000"}).fixedToCamera=true;

}

function moveBack(){
	player.x -= 80;
	player.animations.play('run',15,true);
}

function mouseWheel(event) {
		start_text.setText("");
		if(game.input.mouse.wheelDelta>0){
			player.x +=30;
			player.animations.play('run',15,true);	
		 }else{
			player.x -=30;
			player.animations.play('run',15,true);		
		}
}

function moveforward(){
	start_text.setText("");
	player.x +=50;
}

function forwardButtonPressed(){
	
	var ptr = game.input.activePointer ;
	player.animations.play('run',15,true);

	if((ptr.x>=w-150 && ptr.y>=h-150&&ptr.isDown)||cursors.right.isDown||scroll>0)
	{
		if(direction =="left"){
			direction= "right";
			player.scale.setTo(1,1);
			player.anchor.setTo(0,0);	
		}
		return true;
	}else{
		return false;
	}
}

function backButtonPressed(){
	var ptr = game.input.activePointer ;
	player.animations.play('run',15,true); 
	if((ptr.x<=150 && ptr.y>=h-150&&ptr.isDown)||cursors.left.isDown||scroll<0)
	{
		if(direction =="right"){
		direction= "left";
		player.scale.setTo(-1,1);
	}
	return true;
	}
	else		
		return false;
}

function gameupdate(){

	var scroll = game.input.mouse.wheelDelta;
	if(forwardButtonPressed()){
		start_text.setText("");
		player.x +=25;
		player.animations.play('run',15,true);
		//console.log("Pointer:"+game.input.activePointer.x);
	}else if(backButtonPressed()){
		player.x -=30;
	}else{
		player.animations.stop('run');
	}
	
	if(player.x<=0&&direction=="right"){
		player.x =0;
	}
	if(player.x <=150&&direction=="left"){
		player.x = 150;
	}

	if(player.x>platformLength-350){
		player.x = platformLength-350;
	}

	if(player.x >= 18000){
		movePlaneLeft();
	}


	if(plane.x<(18500+offsetNewCompany)){
		game.time.events.add(Phaser.Timer.SECOND * 3, fadePlane, this);
	}

	if(plane.x<(17000+offsetNewCompany)){
		plane.kill();
	}


	if(player.x > platformLength - 400 && flagbool){
		flagbool = false;
		flag.animations.play('run',10,false);
	}

}

function fadePlane() {
		game.add.tween(plane).to( { alpha: 0 }, 1000, Phaser.Easing.Linear.None, true);
}

function movePlaneLeft(){
	if(player.x >=(18000+offsetNewCompany) && plane.x >= (20000+offsetNewCompany) ){
			plane.body.velocity.x = -150;
	}
	game.add.tween(end_text).to( { alpha: 1 }, 1000, Phaser.Easing.Linear.None, true);
}

function rendergame(){
	
	if(debug)
	{
		game.debug.spriteInfo(player,32,32);
		game.debug.cameraInfo(game.camera, 32, 200);
        game.debug.spriteCoords(player, 32, 500);	
	}
}


function openPokemonGame(){
	var win = window.open(pokemon_url);
	win.focus();
}

function openLinkedInPage(){
 var win = window.open(linkedin_url);
 win.focus();
}

function openHashnodeBlog(){
 var win = window.open(hashnode_url);
 win.focus();
}

function downloadPDFResume(){
 var win = window.open(resume_url);
 win.focus();
}

function openGmail(){
 var win = window.open("mailto:sahil@cvee.me");
 win.focus();
}





