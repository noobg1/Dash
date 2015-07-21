angular.module('Dash',['ui.router'])

.config(function($stateProvider,$urlRouterProvider,$httpProvider) {
	$urlRouterProvider.otherwise('/index');

	$stateProvider
		.state('restaurant', {
			url: '/restaurant',
			templateUrl: '../src/templates/restaurant.html',
			//controller: 'HomeController as Home'
		})
		
		.state('menu_category', {
			url: '/menu_category',
            templateUrl: '../src/templates/menu_category.html'
		})	

		.state('south', {
			url: '/south',
            templateUrl: '../src/templates/south.html'
		})	
});