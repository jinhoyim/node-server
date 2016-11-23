module.exports = function(app){
  app.get('/about', function(req, res){
    // res.send('about');
    res.render('about.ejs');
  });
}