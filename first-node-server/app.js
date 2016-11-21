var http = require('http');

http.createServer(function(request, response){
  response.writeHead(200, {'Content-Type':'text/plain'});
  response.write('First Node Application');
  response.end();
}).listen(process.env.PORT || 3030);

console.log('First Node Server');