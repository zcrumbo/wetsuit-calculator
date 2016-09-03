'use strict';

/**
 * @ngdoc function
 * @name wetsuitGeneratorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the wetsuitGeneratorApp
 */

 //TODO: check if wetsuit exists before display
 
angular.module('wetsuitGeneratorApp')
  .controller('MainCtrl', function ($scope) {
  	$scope.hidden=true;
  	$scope.showCm =false;
  	$scope.showKg = false;
  }
  )
  .controller('FormCtrl', function($scope, $location, $animate, WetsuitResults, $document, $filter){
   		$scope.formData={};
   		$scope.units='ft-in';//standard display
   		$scope.weightUnits='lb';//standard display
   		$scope.unitsFt = function(){
   			//show feet and inches fields, hide cm field
  			$scope.units='ft-in';
   			$scope.showCm = false;
   		};
   		$scope.unitsCm = function(){
   			//show cm field, hide feet and inches fields. delete english units as they will override cm data
   			$scope.units='cm';
   			$scope.showCm = true;
   			//delete $scope.formData.heightFt;
   			//delete $scope.formData.heightIn;
 		};
   		$scope.unitsKg = function(){
   			$scope.weightUnits='kg';
   			$scope.showKg = true;
   			//delete $scope.formData.weightLb;
   		};
   		$scope.unitsLb= function(){
   			$scope.weightUnits='lb';
   			$scope.showKg = false;
      };

  	$scope.getWetsuits = function(){
      $scope.loading=true;
      $scope.hidden=true;
  		if ($scope.showKg===false){
  			$scope.formData.weight = $filter('number')($scope.formData.weightLb*0.453592, 0);
  		}else{
        $scope.formData.weight = $scope.formData.weightKg;
      }
  		if ($scope.showCm===false){
  			$scope.formData.height = $filter('number')((($scope.formData.heightFt*12)+$scope.formData.heightIn*1)*2.54, 0);
  		}else{
        $scope.formData.height = $scope.formData.heightCm;
      }

		WetsuitResults.load($scope.formData).
	        then(function(response) {
            // checking if wetsuit url still exists on store - moved logic to php file, leaving here as ref
            // for (var i = response.data.length - 1; i >= 0; i--) {
            //   $http({
            //     method: 'HEAD',
            //     url: 'http://www.trisports.com/'+response.data[i].link
            //   }).then(function successCallback(header) {
            //       // this callback will be called asynchronously
            //       // when the response is available
            //       console.log(header);
            //     }, function errorCallback(header) {
            //       // called asynchronously if an error occurs
            //       // or server returns response with an error status.
            //        console.log(header);
            //    });
            // }
	           $scope.status = response.status;
	           $scope.data = response.data;
             if (response.data.error){
              $scope.dataError = true;
              return;
             }else{
              $scope.dataError = false;
             }
	           $scope.hidden=false;
             $scope.loading=false;
	           scrollToResults();

	          //$location.path('results');
	        }, function(response) {
	          $scope.data = response.data || 'Request failed';
	          $scope.status = response.status;
            $scope.dataError = true;
	      });  	
	    };
	  $scope.testData = function(){
	  	$scope.formData.heightFt=5;
	  	$scope.formData.heightIn=8;
	  	$scope.formData.weightLb=150;
	  	$scope.formData.gender='1';
	  	$scope.formData.body='TS';
	  	$scope.formData.sleeves='0';
	  	$scope.formData.price=500;
	  };
	var resultsDiv = angular.element('.resultsWindowMobile');
    var duration = 500; //milliseconds
    var offset = 30; 
    //Scroll to the exact position
    function scrollToResults(){
    	$document.scrollToElementAnimated(resultsDiv, offset, duration);
}
    // var offset = 30; //pixels; adjust for floating menu, context etc
    // //Scroll to #some-id with 30 px "padding"
    // //Note: Use this in a directive, not with document.getElementById 
    // var someElement = angular.element(document.getElementById('some-id'));
    // $document.scrollToElement(someElement, offset, duration);
  
  });
