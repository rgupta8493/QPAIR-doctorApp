module.exports = function(app) {
  var users = require('./../controllers/users.js');
  var todos = require('./../controllers/todos.js');

  //===== user =====//
  // Index
  app.get('/users', function(request, response) {
    users.retrieve(request, response);
  });
  // Create
  app.post('/users', function(request, response) { 
    users.create(request, response) 
  })
  // remove
  app.get('/users/:id', function (request, response){
    // console.log('app.post', req.params.id);
    // console.log('app.post', req.body.name);
    users.remove(request, response);
  })

  //===== order =====//
  // Index
  app.get('/todos', function(request, response) {
    todos.retrieve(request, response);
  });
  // Create
  app.post('/todos', function(request, response) { 
    todos.create(request, response) 
  })
  // remove
  app.get('/todos/:id', function (request, response){
    todos.remove(request, response);
  })
};