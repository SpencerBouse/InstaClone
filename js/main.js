(function() {
    'use strict';

    angular
    .module('routing', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider,$locationProvider){

      $urlRouterProvider.otherwise('/#');


    	$stateProvider
	    .state('home', {
	      url: '/',
	      views: {
		      'content': {
		        templateUrl: '../partials/home.html',
		        controller: 'mainController',
		        controllerAs: 'vm'
		      }
		   }
	    })
	    .state('addImage', {
	      url: '/addImage/:id',
	      views: {
		      'content': {
		        templateUrl: '../partials/addImage.html',
		        controller: 'mainController',
		        controllerAs: 'vm'
		      }
		   }
	    })


    });

})();
