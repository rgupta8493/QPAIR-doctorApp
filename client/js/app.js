//immediate function
(function(){

	var myApp = angular.module('myApp', ['ngRoute']);
	var userName = prompt("What's your name?");
	//  use the config method to set up routing:
	myApp.config(function ($routeProvider) {
	  $routeProvider
	    .when('/',{
	        templateUrl: 'partials/dashboard.html',
	        controller: 'usersController',
	        controller: 'todosController',
	    })
	    .when('/new_appointment',{
	        templateUrl: 'partials/appointments.html',
	        controller: 'usersController',
	        controller: 'todosController',
	    })
	    .when('/users',{
	        templateUrl: 'partials/users.html',
	        controller: 'usersController'
	    })
	    .otherwise({
	      redirectTo: '/'
	    });
	});


})();