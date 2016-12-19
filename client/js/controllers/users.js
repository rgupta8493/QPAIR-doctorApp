var myApp = angular.module("myApp");

myApp.controller("usersController", function($scope, todosFactory){

	//===== user =====//
	var updateUsersList = function(){
	  todosFactory.getUsers(function(data){
	  $scope.users = data;
	  }); 
	}
	updateUsersList();

	$scope.addUser = function(){
	  todosFactory.addUser($scope.newUser, function(users){
	    updateUsersList();
	    })
	  $scope.newUser = {};
	};

	$scope.removeUser = function(data){
	  console.log("scope.removeUser", data);
	  todosFactory.removeUser(data, function(data){
	    updateUsersList();
	  })
	};


});