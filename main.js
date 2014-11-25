'use strict';
enchant();

var game;
var gs = {
	height:320
	,width:320
	,fps:15
};



var Bear = Class.create(Sprite,{
	initialize:function(x,y){
		Sprite.call(this,32,32);
		this.image = game.assets['http://enchantjs.com/assets/images/chara1.gif'];
		this.anime = [0,1,2,1];
		this.frame = [5,6,5,7];
		this.y = x || 0;
		this.x = y || 0;
		this.tl
		.moveTo((gs.width-this.width), 10, 130)
		.moveTo(-(gs.width-this.width), 10, 30)
		.loop();
		game.rootScene.addChild(this);
	},
	movedown:function() {
		this.moveBy(0,this.height);
	},
	isRange:function(){
		return (
			this.x > 0 
			&& this.x < game.width -this.width
			);
	},
	turn:function() {
		this.scaleX *= -1;
	},
	move:function(){
		if(Math.floor(this.age / 15) % 2 == 0){
			this.x += 0.5;
			this.y += 0.2
		}else{
			this.x -= 0.5;
			this.y += 0.2
		}
		// var vector = 3 * this.scaleX;
		// this.moveBy(vector,0);
	},
	onenterframe:function(){
		// this.move();
		// if(!this.isRange()){
		// 	this.turn();
		// 	// this.movedown();
		// }
	},
	ontouchstart:function(){
		this.turn();
	}
});

window.onload = function(){
	game = new Core(gs.width,gs.height);
	game.preload('http://enchantjs.com/assets/images/chara1.gif');
	game.fps = gs.fps;
	game.onload = function(){
		new Bear();
	};
	
	game.start();
};