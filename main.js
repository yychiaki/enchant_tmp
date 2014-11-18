'use strict';
enchant();

var game;
var gs = {
	height:320
	,width:320
	,fps:15
};

var Shoot = Class.create(Sprite,{
	initialize:function(x,y,direction){
		Sprite.call(this,16,16);
		this.image = game.assets['graphic.png'];
		this.x = x;
		this.y = y;
		this.frame = 1;
		this.direction = direction;
		this.moveSpeed = 10;
		game.rootScene.addChild(this);
	},
	onenterframe:function(){
		this.x += this.moveSpeed * Math.cos(this.direction);
		this.y += this.moveSpeed * Math.sin(this.direction);
		if(this.y > 320 
			|| this.x > 320 
			|| this.x < -this.width 
			|| this.y < -this.height){this.remove();}
	},
remove: function(){
	game.rootScene.removeChild(this);
	delete this;
}
});
var Player = Class.create(Sprite,{
	initialize:function(x,y) {
		Sprite.call(this,16,16);
		this.image = game.assets['graphic.png'];
		this.x = x;
		this.y = y;

		game.rootScene.on('touchstart',function(e){
			player.y = e.y;
			game.touched = true;
		});
		game.rootScene.on('touchend',function(e){
			player.y = e.y;
			game.touched = false;
		});
		game.rootScene.on('touchmove',function(e){
			player.y = e.y;
			game.touched = true;
		});


		game.rootScene.addChild(this)
	},
	onenterframe:function(){
		if(game.touched && game.frame % 3 ===0){
			new Shoot(this.x,this.y,0);
		}
	}

});

var Enemy = Class.create(Sprite,{
	initialize:function(x, y, omega) {
		Sprite.call(this,16,16);
		this.image = game.assets['graphic.png'];
		this.x = x;
		this.y = y;
		this.frame = 3;
		this.time = 0;

		this.omega = omega * (Math.PI / 180);
		this.direction = 0;
		this.moveSpeed =3;
		game.rootScene.addChild(this);
	},
	onenterframe:function(){
		this.direction += this.omega;
		this.x -= this.moveSpeed * Math.cos(this.direction);
		this.y += this.moveSpeed * Math.sin(this.direction);

		if(this.y > 320 
			|| this.x > 320
			|| this.x < -this.width
			|| this.y < -this.height
			){
			this.remove();
		}
	}
});


var player;
var enemy;
window.onload = function(){
	game = new Core(gs.width,gs.height);
	game.fps = gs.fps;
	game.preload('graphic.png');
	game.touched = false;
	game.score = 0;
	game.onload = function(){

		player = new Player(0,152);
		enemy = new Enemy(300,152,-1)

	};
	
	game.start();
};
