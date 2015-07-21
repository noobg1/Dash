angular
    .module('Dash')
    .controller('menuCtrl', ['$scope', '$http',menuCtrl]);


function menuCtrl($scope,$http) {
    $http.get("http://viands.in:3000/restaurants")
  .success(function (response) {$scope.menus = response.restaurants[0].menu} 	);
}