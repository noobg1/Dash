angular
    .module('Dash')
    .controller('restaurantCtrl', ['$scope', '$http',restaurantCtrl]);


/*var res = angular.module('res', []);

res.controller('restaurantCtrl', function($scope, $http) {
  $http.get("http://viands.in:3000/restaurants")
  .success(function (response) {$scope.names = response.restaurants});
});*/

function restaurantCtrl($scope,$http) {
    $http.get("http://viands.in:3000/restaurants")
  .success(function (response) {$scope.names = response.restaurants});
}