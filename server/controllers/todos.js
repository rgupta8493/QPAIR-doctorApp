var mongoose = require('mongoose');
var Todo = mongoose.model('Todo');

module.exports = (function() {
  return {
    retrieve: function(request, response){      
      Todo.find({}, function(err, returned_value){
        if(err){
          response.json({status: 'failed', err: err})
        }
        else{
          response.json(returned_value);
        }
      });
    },

    create: function(request, response){ 
      var todo = new Todo({app_date: request.body.app_date, app_time: request.body.app_time, name: request.body.name, reason: request.body.reason});    
      todo.save(function(err, returned_value){
        if(err){
          response.json({status: 'failed', err: err})
        }
        else{
          response.json({status: 'success'})
        }
      })
    },

    remove: function(request, response){   
      Todo.remove({_id: request.params.id}, function (err){
        if(err) {
          console.log(err);
        } else { // else console.log that we did well and then redirect to the root route
          // console.log('successfully added a Todo!');
          response.json({status: 'success'})
          // res.render('result', {Todos: Todos_array});
        }
      })
    }
  }
})();
