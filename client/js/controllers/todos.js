var myApp = angular.module("myApp");

myApp.controller("todosController", function($scope, todosFactory){

	//===== Todo =====//
        // $scope.users = [];
        // $scope.errors = {};
        var updateTodoList = function(){
          todosFactory.getTodos(function(data){
          $scope.todos = data;
          }); 
        }
        updateTodoList();

        todosFactory.getUsers(function(data){
          $scope.users = data;
        });

        $scope.addTodo = function(){
          todosFactory.addTodo($scope.newTodo, function(todos){
            updateTodoList();
            })
          $scope.newTodo = {};
        };

        $scope.removeTodo = function(data){
          console.log("scope.removeTodo", data);
          todosFactory.removeTodo(data, function(data){
            updateTodoList();
          })
        };    


});

