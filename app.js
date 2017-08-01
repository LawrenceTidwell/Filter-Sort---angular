angular.module('myApp', [])
.controller('myController', ['$scope', 'filterFilter', function($scope, filterFilter) {
	$scope.cars = [
		{make: 'Honda', model: 'civic', capacity: 6},
		{make: 'Chevy', model: 'Malibu', capacity: 5},
		{make: 'Toyota', model: 'Camry', capacity: 7},
		{make: 'Ford', model: 'Fusion', capacity: 2},
		{make: 'Jeep', model: 'Compass', capacity: 5},
		{make: 'Toyota', model: 'Carolla', capacity: 3},
		{make: 'Nissan', model: 'Altima', capacity: 10}];
	$scope.filteredCars = $scope.cars;
	$scope.reverse = true;
	$scope.column = 'make';
	$scope.setSort = function(column) {
		$scope.column = column;
		$scope.reverse = !$scope.reverse;
	};
	$scope.filterString = '';
	$scope.setFilter = function(value) {
		$scope.filteredCars = filterFilter($scope.cars, $scope.filterString);
	};
}]);
