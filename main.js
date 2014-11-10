'use strict';
enchant();

var game;
var gs = {
	height:320
	,width:320
	,fps:15
};

var assets = [
'http://enchantjs.com/assets/images/chara0.gif'
,'http://enchantjs.com/assets/images/map0.gif'
];

var DIR_LEFT  = 0;
var DIR_RIGHT = 1;
var DIR_UP    = 2;
var DIR_DOWN  = 3;

window.onload = function(){
	game = new Core(gs.width,gs.height);
	game.fps = gs.fps;
	game.preload(assets);
	game.onload = function(){
		var bg = new Sprite(320,320);
		var maptip = game.assets[assets[1]];
		var image = new Surface(320,320);

		for (var j = 0; j < 320; j += 16) {
			for(var i = 0 ; i < 320; i += 16){
				image.draw(maptip,0,0,16,16,i,j,16,16);
			}
		}

		bg.image = image;
		game.rootScene.addChild(bg);


		//chara
		var girl = new Sprite(32,32);
		garl.image = game.assets[assets[0]];
		girl.x = 160 -16;
		garl.y = 160 -16;
		garl.frame =7;
		giral.toX = girl.x;
		giral.toY = girl.y;
		girl.dir = DIR_DOWN;
		girl.anim = [
		15,16,17,16,//left
		24,25,26,24,//right
		33,34,35,34//top
		6,7,8,7//Down
		];

		game.rootScene.addChild(girl);

		//chara定期処理
		girl.tick = 0;
		girl.addEventListener(Event.ENTER_FRAME,function(){
			//上へ
			if (girl.y > girl.toY){
				girl.dir = DIR_UP;
				if(Math.abs(girl.y - girl.toY) < 3){
					girl.y = girl.toY;
				}else{
					girl.y -= 3;
				}
				//下へ移動
				else if (girl.y < girl.toY){
					girl.dir = DIR_DOWN;
					if (Math.abs(girl.y - girl.toY) < 3) {
						girl.y = girl.toY;
					}else {
						girl.y += 3;
					}
				}
				//右へ移動
				else if (girl.x > girl.toX){
					girl.dir = DIR_RIGHT;
					if (Math.abs(girl.x - girl.toX;) < 3) {
						girl.x = girl.toX;
					} else {
						girl.x += 3;
					}
				}

				//フレームの指定
				girl.tick++;
				if(girl.x == girl.toX && girl.y == girl.toY) girl.tick = 1;//静止
				girl.frame = girl.anim[girl.dir *4 + (girl.tick % 4)];

			}


		})




	};
	game.start();
};