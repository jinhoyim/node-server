module.exports = function(app){
  var users = [
    {id:'1', name:'John', email:'john@gmail.com'},
    {id:'2', name:'Kim', email:'kim@gmail.com'},
    {id:'3', name:'Park', email:'park@gmail.com'},
    {id:'4', name:'Choi', email:'choi@gmail.com'},
  ];

  app.get('/users', function(req, res){
    res.json(users);
  });

  app.get('/users/random', function(req, res){
    var n = Math.floor(Math.random() * users.length);
    var user = users[n];
    res.json(user);
  });

  app.get('/users/:id', function(req, res){
    if(users.length < req.params.id || req.params.id <= 0){
      res.statusCode = 404;
      return res.send('404 - Not Found, Choose 1 to ' + users.length);
    }
    res.json(users[req.params.id-1]);
  })
}