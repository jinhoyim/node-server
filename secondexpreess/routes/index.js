module.exports = function(app){
  app.get('/', function(req, res){
    // res.send('hello second express!!');
    res.render('index.ejs');
  });
}