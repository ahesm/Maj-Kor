var app = require('express')();
var bodyParser = require('body-parser');
var http = require('http').Server(app);

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({extended: false});

app.get('/', function (req, res) {
	res.sendfile( __dirname + '/front/login.html');
});

app.get('/g', function(req, res) {
	res.sendfile( __dirname + '/front/canvas.html');
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
app.get('/room/:num', function(req, res) {
	var num = req.params.num;
	var addr = request.connection.remoteAddress;
	if(room[num]===null){
		room[num] = {
			"player": 0,
			"observer": 0,
			"ready": 0,
			"address": new Array()
		}
	}
	room[num].address[room[num].player] = addr;
	room[num].player<4?room[num].player++:room[num].obserber++;
	//res.sendfile( __dirname + '/ready.html');
});
//Game================================================
var rooms = new Array();

var io = require('socket.io')(http);
io.on('connection',function(socket){
	var address = socket.handshake.address;
	console.log("connected: " + address);
	socket.on('first',function(){
		var room = {

		};
		rooms.push(room);
	});
	
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

