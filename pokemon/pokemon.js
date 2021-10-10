function loadImages(){
	playerImage = new Image;
	playerImage.src ='Assets\\player.png';
	goalImage = new Image;
	goalImage.src ='Assets\\goal.png';
	enemyImage = new Image;
	enemyImage.src ='Assets\\enemy.png';
	enemyImage1 = new Image;
	enemyImage1.src ='Assets\\enemy1.png';
	enemyImage2 = new Image;
	enemyImage2.src ='Assets\\enemy2.png';
	enemyImage3 = new Image;
	enemyImage3.src ='Assets\\enemy3.png';
	moveNextButton = new Image;
	moveNextButton.src ='Assets\\forward.png';
	moveBackButton = new Image;
	moveBackButton.src ='Assets\\back.png';
}

function init(){
	loadImages();
	canvas = document.getElementById("mycanvas");
	left = document.getElementById("left");
	right = document.getElementById("right");
	W = canvas.width;
	H = canvas.height;
	gameover = false;
	score=0;
	pen = canvas.getContext('2d');
	enemys  = [enemy1 ={
			x:250,
			y:100,
			w:100,
			h:100,
			speed:8
	},
	enemy2 ={
			x:550,
			y:499,
			w:100,
			h:100,
			speed:5
	},
	enemy3={
			x:850,
			y:100,
			w:100,
			h:100,
			speed:7
	},
	enemy4 ={
			x:1150,
			y:499,
			w:100,
			h:100,
			speed:6
	},
	];
		
	player = {
			x:0,
			y:H/2,
			w:100,
			h:100,
			speed: 5,
			state:"still"
	};
	
	goal = {
			x: W-100,
			y:H/2,
			w:100,
			h:100
	};
	
var rectBack = {
	x:10,
	y:H-32,
	width:40,
	heigth:40
};

var rectNext = {
	x:W-42,
	y:H-32,
	width:40,
	heigth:40
};


//canvas touch event on desktop and button click for onscreen arrow
canvas.addEventListener('mousedown', function(evt) {
	evt.preventDefault();
	var mousePos = getMousePos(canvas, evt);
	if (isInside(mousePos,rectBack)) {
		player.state="moving";
			if(player.speed>0){
				player.speed *= -1;
			}
			
    }else if (isInside(mousePos,rectNext)) {
		player.state="moving";
			if(player.speed<0){
				player.speed *= -1;
			}
	}
}, false);

canvas.addEventListener('mouseup', function(evt) {
	player.state="still";		
}, false);


//mobile event for moving the character
right.addEventListener('touchstart', function(evt) {
	player.state="moving";
			if(player.speed<0){
				player.speed *= -1;
			}
}, false);

left.addEventListener('touchstart', function(evt) {
	player.state="moving";
			if(player.speed>0){
				player.speed *= -1;
			}
}, false);

right.addEventListener('touchend', function(evt) {
	player.state="still";		
}, false);

left.addEventListener('touchend', function(evt) {
	player.state="still";		
}, false);

	//keyboard event for moving character
	function keyPressed(e){
		if(e.key == "ArrowRight"){
			player.state="moving";
			if(player.speed<0){
				player.speed *= -1;
			}
			//player.x++; better do this in update
		}
		if(e.key=="ArrowLeft"){
			player.state="moving";
			if(player.speed>0){
				player.speed *= -1;
			}
		}
	}
	
	document.addEventListener("keydown",keyPressed);
	document.addEventListener("keyup",function(){
			player.state="still";		
	});

	//context menu block on mobile phones
	window.oncontextmenu = function(event) {
		event.preventDefault();
		event.stopPropagation();
		return false;
   };
   
}

function draw(){
	//Erase the old screen
	
	pen.clearRect(0,0,W,H);
	
	pen.font = "18px Arial";
	pen.fillText("Score: "+score,20,20);
	//pen.fillStyle="blue";
	pen.drawImage(enemyImage,enemys[0].x,enemys[0].y,enemys[0].w,enemys[0].h);
	pen.drawImage(enemyImage1,enemys[1].x,enemys[1].y,enemys[1].w,enemys[1].h);
	pen.drawImage(enemyImage2,enemys[2].x,enemys[2].y,enemys[2].w,enemys[2].h);
	pen.drawImage(enemyImage3,enemys[3].x,enemys[3].y,enemys[3].w,enemys[3].h);
	

	if(!CheckForMobileTablet()){
		pen.drawImage(moveBackButton,10,H-32,32,32);
		pen.drawImage(moveNextButton,W-42,H-32,32,32);
	}
	
	
	pen.fillStyle="red";
	pen.drawImage(playerImage,player.x,player.y,player.w,player.h);
	pen.fillStyle="orange";
	pen.drawImage(goalImage,goal.x,goal.y,goal.w,goal.h);
}

function update(){
	
	if(isColliding(player,enemys[0])){
			alert("Game Over!");
			gameover=true;
	}if(isColliding(player,enemys[1])){
			alert("Game Over!");
			gameover=true;
	}if(isColliding(player,enemys[2])){
			alert("Game Over!");
			gameover=true;
	}if(isColliding(player,enemys[3])){
			alert("Game Over!");
			gameover=true;
	}
	if(isColliding(player,goal)){
			pen.font = "30px Arial";
			pen.fillText("Congratulations You Won! score is : "+score, W-150, 40);
			alert("Level Complete!");
			gameover = true;
	}
	enemys[0].y +=enemys[0].speed;
	if(enemys[0].y>=H-enemys[0].h || enemys[0].y <= 0){
		enemys[0].speed *= -1;
	}
	enemys[1].y +=enemys[1].speed;
	if(enemys[1].y >=H-enemys[1].h || enemys[1].y <= 0){
		enemys[1].speed *= -1;
	}
	enemys[2].y +=enemys[2].speed;
	if(enemys[2].y>=H-enemys[2].h || enemys[2].y <= 0){
		enemys[2].speed *= -1;
	}
	enemys[3].y +=enemys[3].speed;
	if(enemys[3].y>=H-enemys[3].h || enemys[3].y <= 0){
		enemys[3].speed *= -1;
	}
	
	if(player.x < 0 ){
		player.x=0;
		player.state = "still";
	}
	
	if(player.state=="moving"){
		player.x += player.speed;	
	}
	score = Math.round(player.x/2);
}

function gameLoop(){
	draw();
	update();
	console.log("In Game Loop");
	if(!gameover){
	window.requestAnimationFrame(gameLoop);
	}else{
		startGame();
	}
}

function startGame(){
	init();
	gameLoop();
}
function isColliding(r1,r2){
	var firCond = Math.abs(Math.max(r1.x -r2.x)) <=r1.w;
	var secCond = Math.abs(Math.max(r1.y -r2.y)) <=r1.h;
	
	return firCond && secCond;
}

function getMousePos(canvas, event) {
	var rect = canvas.getBoundingClientRect();
	return {
		x: event.clientX - rect.left,
		y: event.clientY - rect.top
	};
}


function isInside(pos, rect){
	return pos.x > rect.x && pos.x < rect.x+rect.width && pos.y < rect.y+rect.heigth && pos.y > rect.y
}

function CheckForMobileTablet() {
	let check = false;
	(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
	return check;
  };


//setInterval(gameLoop,1000);
init();
gameLoop();

