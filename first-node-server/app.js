var http = require('http');
var router = require('./router');

http.createServer(function(request, response){
  console.log(request.url);

  router.home(request, response);
  router.about(request, response);
  router.fastcampus(request, response);

}).listen(process.env.PORT || 3030);

console.log('First Node Server');