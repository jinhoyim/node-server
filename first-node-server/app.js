var http = require('http');

http.createServer(function(request, response){
  console.log(request.url);

  if(request.url === '/'){
    response.write('This is home.');
    response.end();
  }
}).listen(process.env.PORT || 3030);

console.log('First Node Server');