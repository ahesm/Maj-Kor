var app = require('express')();
var bodyParser = require('body-parser');
var http = require('http').Server(app);
//var app = express();

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

var io = require('socket.io')(http);
io.on('connection',function(socket){
	console.log("connected");
	socket.on('msg', function(msg){
    	console.log('message: ' + msg);
    });
    socket.on('disconnect',function(){
    	console.log("adsf");
    })
});


var server = http.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});

