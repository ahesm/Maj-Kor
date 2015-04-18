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

//Init=============================
var init = function(){
	ctx.font="30px Verdana";
	canvas.addEventListener('click',mouse,false);
}

//Click=============================
var mouse = function(eve){
	var x = eve.clientX - canvas.offsetLeft;
	var y = eve.clientY - canvas.offsetTop;
	if(x>10&&x<50&&y>50&&y<80){
		
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
	ctx.fillText("Ready",10,50);
}


//Loop===========================
var loop1 = function(){

}

var loop2 = function(){

}

//Main===========================
var main = function(){
	var now = Date.now();
	var delta = now - then;
	init();
	loop1();
	loop2();
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
