'use strict';
enchant();

var game;
var gs = {
	height:320
	,width:320
	,fps:15
};

var assets = [
'http://enchantjs.com/assets/images/chara1.gif'
];

var Bear = Class.create(Sprite,{
	initialize:function(){
		Sprite.call(this,32,32);
		this.image = game.assets[assets[0]];
		this.frame = [5,6,5,7];
		this.direction = 1;
		this.speed = 3;
		game.rootScene.addChild(this);
	},
	onenterframe:function(){
		this.move();
	},
	move:function(){
		this.x += this.direction * this.speed;

		if (this.x < 0
			|| this.x > game.width - this.width){
			this.turn();
	},
	turn:function(){
		this.scaleX = this.direction *= -1;
	}

		// 	if(this.scaleX === 1){
		// 		this.moveBy(3,0);
		// 		if(this.x > game.width - this.width) {
		// 			this.scaleX = -1;
		// 		}
		// 	}else {
		// 		this.moveBy(-3,0);
		// 		if(this.x < 0) {
		// 			this.scaleX = 1;
		// 		}
		// 	}
		// }
	});

window.onload = function(){
	game = new Core(gs.width,gs.height);
	game.fps = gs.fps;
	game.preload(assets);
	game.onload = function(){
		// var bear = new Bear();

		game.rootScene.on('enterframe',function(){
			var counter = 0; //初期値
			if (game.frame % game.fps === 0){
				if(counter < 5){
					new Bear();
					// console.log(counter);
				}
				
			}
		});
		

	};
	game.start();
};