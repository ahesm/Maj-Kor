var app = require('express')();
var bodyParser = require('body-parser');
var http = require('http').Server(app);

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false});

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


//Game================================================

var group = new Array();
var ccount = 0;

var io = require('socket.io')(http);
io.on('connection',function(socket){
	var address = socket.handshake.address;
	console.log("connected");
	group[ccount] = new Array();
	group[ccount].player = new Array();
	if(group[ccount]==null){
		group[ccount] = {
			"count": 0,
		 	"game": false, 
		 	"hanpan": new require("./back/hanpan"),
		 	"player": new Array()
		 };
	}
	if(group[ccount].player[address]==null){
		group[ccount].plater[address] = {
			"pae": group[ccount].hanpan.pcard[group[ccount].count]
		};
		console.log(group[ccount].player[address].pae);
		group[ccount].count++;
	}
	if(group[ccount].count>=4){

		group[ccount].game = true;
		ccount++;
	}
	socket.on('msg', function(msg){
    	console.log('message: ' + msg);
    });
    socket.on('disconnect',function(){
    	console.log("adsf");
    })
});

//Start===============================================

var server = http.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});

