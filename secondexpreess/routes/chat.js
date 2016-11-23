module.exports = function(app){
  // var http = require('http').Server(app);
  // var io = require('socket.io')(http);

  // http.listen(80);
app.get('/chat', function(req, res){
  res.render('chat.ejs');
});
  

  // http.listen(3000, function(){
  //   console.log('Chat server is listen on 3000');
  // });

}