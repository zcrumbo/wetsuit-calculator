'use strict';

angular.module('wetsuitGeneratorApp')
  .controller('ResultsCtrl', function ($scope, $location, WetsuitResults) {
	//console.log(WetsuitResults.get());
	  if (WetsuitResults.get()!==undefined) {
	   WetsuitResults.get().then(function(response) {
	   $scope.status = response.status;
	   $scope.data = response.data;
	          //$location.path('results');
	        }
  		);
	}
	   $scope.reset = function() {
	   	$location.path('main');
	   };
});