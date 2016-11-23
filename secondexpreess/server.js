var express = require('express');
var app = express();
var indexRouter = require('./routes/index')(app);
var aboutRouter = require('./routes/about')(app);
var usersRouter = require('./routes/users')(app);
var charRouter = require('./routes/chat')(app);

var http = require('http');

// var server = http.Server(app);
// var io = require('socket.io')(server);
var server = http.createServer(app);
var io = require('socket.io').listen(server);

// io.emit('some event', { for: 'everyone' });
io.on('connection', function(socket){
  console.log('new user is connected.');
  
  socket.broadcast.emit('chat message', 'new user joined');

  socket.on('chat message', function(msg){
    console.log("message: " + msg);
    io.emit("chat message", msg);
  });

  socket.on('disconnect', function () {
    console.log('user disconnected');
    io.emit('user disconnected');
    socket.broadcast.emit('chat message', 'user left');
  });
});

app.set('port', process.env.PORT | 3030);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);


app.use('/public', express.static(__dirname + '/public'));



app.use(function(req, res){
  res.type('text/plain');
  res.status('404');
  res.send('404 - Not Found');
});

app.use(function(req, res){
  res.type('text/plain');
  res.status('500');
  res.send('500 - Server Error');
});

// app.listen(app.get('port'), function(){
//   console.log('Second Express server is running at localhost:' + app.get('port'));
// });

server.listen(app.get('port'), function(){
  console.log('Second Express server is running at localhost:' + app.get('port'));
});