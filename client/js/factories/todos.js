var myApp = angular.module("myApp");

myApp.factory("todosFactory", function($http){
	var factory = {};
        //===== user =====//
        factory.getUsers = function(callback){
          $http.get('/users').success(function(returned_data){
            callback(returned_data);
          })
        }; 
        factory.addUser= function(newUser, callback){
          // users.push({name: data.name, created: Date()});
          $http.post('/users', newUser).success(function(returned_data){
            console.log('Back from server', returned_data);
            console.log('Back from server-user', newUser);
            // console.log('Back from server-users', users);
            callback(returned_data);
          })                  
        };
        factory.removeUser = function(data, callback){
          console.log('try to remove a user-factory', data);
          $http.get('/users/'+data).success(function(){
            callback();
          }) 
        };
        //===== todo=====//
        factory.getTodos = function(callback){
          $http.get('/todos').success(function(returned_data){
            callback(returned_data);
          })
        }; 
        factory.addTodo= function(newTodo, callback){
          // users.push({name: data.name, created: Date()});
          $http.post('/todos', newTodo).success(function(returned_data){
            console.log('Back from server', returned_data);
            console.log('Back from server-product', newTodo);
            // console.log('Back from server-users', users);
            callback(returned_data);
          })                  
        };
        factory.removeTodo = function(data, callback){
          console.log('try to remove a product-factory', data);
          $http.get('/todos/'+data).success(function(){
            callback();
          }) 
        };  


	return factory;
});