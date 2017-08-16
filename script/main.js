var app = angular.module("myApp",["angularUtils.directives.dirPagination","ngRoute"]);
app.config(function($routeProvider){
         $routeProvider
		 .when("/home",{
		      templateUrl:"./partialls/home/home.html",
			  controller:"homeController"
		 })
		 .when("/component",{
		      templateUrl:"./partialls/component/table.html",
			  controller:"tableController"
		 })
		 .otherwise({redirectTo:"/home"});
});