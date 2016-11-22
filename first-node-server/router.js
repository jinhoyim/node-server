var fs = require('fs');
var renderer = require('./renderer');

function home(request, response){
  if(request.url === '/'){
    renderer(request, response, 'home');
  }
}

function about(request, response){
  if(request.url === '/about'){
    renderer(request, response, 'about');
  }
}

function fastcampus(request, response){
  if(request.url === '/fastcampus'){
    renderer(request, response, 'fastcampus');
  }
}


module.exports.home = home;
module.exports.about = about;
module.exports.fastcampus = fastcampus;
