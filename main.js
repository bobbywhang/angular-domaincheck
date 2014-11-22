var myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope, $http){

	// var userDomainCheck = $scope.userDomainCheck;

	$scope.getURL = function(userDomainCheck) {
	//return the promise directly.
	return $http.jsonp('http://domains.bootname.com/api/v1/domain/' + userDomainCheck + '?callback=JSON_CALLBACK')
		.then(function(result) {
	//resolve the promise as the data
	console.log(result.data);
	});

};

});