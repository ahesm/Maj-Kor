//Init===============================
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

//Image==============================

function gImage(){
	var _image = new Image();
	var _ready = false;

	image.onload = function(){
		_ready = true;
	}

	var _Load = function(path){
		_image.src = path;
	}

	var _Draw = function(x,y){
		ctx.drawImage(_image,x-_image.width/2,y-_image.height/2);
	}

	return{
		image : _image ,
		ready : _ready ,
		Load : _Load ,
		Draw : _Draw
	};
}

//Keyboard===============================

var Keys = {};
addEventListener("keydown",function(e){
	Keys[e.keyCode] = true;
},false);

addEventListener("keyup",function(e){	
	Keys[e.keyCode] = false;
},false);

var key = function(){
	if(38 in KeysDown){	
		dot.y -= dot.speed;
	}
	if(40 in KeysDown){
		dot.y += dot.speed;
	}
	if(37 in KeysDown){
		dot.x -= dot.speed;
	}
	if(39 in KeysDown){
		dot.x += dot.speed;
	}
}


//Render===========================

var bgReady = false;
var bgImage = new Image();
bgImage.onload = function() {
	bgReady = true;
}


var render = function(){
	ctx.clearRect(0,0,canvas.width,canvas.height);
	
}


//Loop===========================
var loop = function(){
	
}


//Main===========================
var main = function(){
	var now = Date.now();
	var delta = now - then;
	loop();
	render();
	then = now;
	requestAnimationFrame(main);
}
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;
var then = Date.now();
main();

//socket===========================

$(document).ready(function(){
 	var socket = io();
 	socket.emit('first');
   	$('.bt').click( function(){
   		socket.emit('msg', $('#m').val());
   		console.log($('#m').val());
   		$('#m').val('');
   		return false;
 	}) ;
});
