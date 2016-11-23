module.exports = function(app){
  var http = require('http').Server(app);
  var io = require('socket.io')(http);

  // http.listen(80);
  app.get('/chat', function(req, res){
    res.render('chat.ejs');
  });

  io.on('connection', function(socket){
    console.log('new user is connected.');

    socket.on('chat message', function(msg){
     console.log("message: " + msg);
    });

    socket.on('disconnect', function () {
      console.log('user disconnected');
      io.emit('user disconnected');
    });
  });
// socket.emit("chat message", msg);
//     socket.on("chat message", function(msg){
//       console.log("message: " + msg);
//     });
  

  http.listen(3000, function(){
    console.log('Chat server is listen on 3000');
  });

}