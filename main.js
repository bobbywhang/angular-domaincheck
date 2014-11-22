var myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope, $http){
	$scope.message = "Yoman";
	
	// var userDomainCheck = $scope.userDomainCheck;

	$scope.getURL = function(userDomainCheck) {
	//return the promise directly.
	return $http.get('http://domains.bootname.com/api/v1/domain/' + userDomainCheck)
		.then(function(result) {
	//resolve the promise as the data
	console.log(result);
	});

};

});