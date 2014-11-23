var myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope, $http){

	// var userDomainCheck = $scope.userDomainCheck;



	$scope.getURL = function(userDomainCheck) {
		//return the promise directly.
		$scope.domainResults = [];
		return $http.jsonp('http://domains.bootname.com/api/v1/domain/' + userDomainCheck + '?callback=JSON_CALLBACK')
			// .then means "do this then do this"
			.then(function(result) {
				console.log(result.data);
				for(var i = 0; i < result.data.length; i++) {
					$scope.domainResults.push(result.data[i]);
				}
			});

		};

		$scope.itemArray = [];
		$scope.addToList = function(item) {
			$scope.itemArray.push(item);	
		}



	});