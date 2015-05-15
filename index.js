var app = require('express')();
var bodyParser = require('body-parser');
var http = require('http').Server(app);

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({extended: false});

app.get('/', function (req, res) {
	res.sendfile( __dirname + '/front/canvas.html');
});

app.get('/jquery',function(req, res){
	res.sendfile( __dirname + '/back/jquery-1.11.1.js');
});

app.get('/canvas',function(req,res) {
	res.sendfile( __dirname + '/front/canvas.js');
});
app.get('/image',function(req,res) {
	res.sendfile( __dirname + '/front/game/image.js');
});
app.get('/keyboard',function(req,res) {
	res.sendfile( __dirname + '/front/game/keyboard.js');
});
app.get('/:nick/room/:num', function(req, res) {
	var num = req.params.num;
	var nick = req.params.nick;
	var addr = req.connection.remoteAddress;
	if(rooms[num]==null){
		rooms[num] = {
			"player": 0,
			"observer": 0,
			"ready": 0,
			"member": new Array()
		};
		rooms[num].member[addr] = {
			"address": new Array(),
			"nick": nick,
			"master": true,
			"pae": 0
		};
	}
	rooms[num].player<4?rooms[num].player++:rooms[num].obserber++;
	res.sendfile( __dirname + '/front/canvas.html');
});

//Game================================================
var rooms = new Array();

var io = require('socket.io')(http);
io.on('connection',function(socket){
	var address = socket.handshake.address;
	console.log("connected: " + address);
	socket.on('msg', function(msg){
    	console.log('message: ' + msg);
    });
    socket.on('disconnect',function(){
    	console.log("disconnect");
    })
});

//Start===============================================

var server = http.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});

