var express = require('express');
var app = express();
var indexRouter = require('./routes/index')(app);
var aboutRouter = require('./routes/about')(app);
var usersRouter = require('./routes/users')(app);

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

app.listen(app.get('port'), function(){
  console.log('Second Express server is running at localhost:' + app.get('port'));
});