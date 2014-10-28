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
		girl.dir




	};
	game.start();
};