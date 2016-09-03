'use strict';

/**
 * @ngdoc service
 * @name wetsuitGeneratorApp.WetsuitResults
 * @description
 * # WetsuitResults
 * Factory in the wetsuitGeneratorApp.
 */
angular.module('wetsuitGeneratorApp')
  .factory('WetsuitResults', function ($http) {
    // Service logic
    // ...

    var apiCall;
    var url='http://hg.trisports.ws/wetsuit_calculator_2016/sqlJSON.php';
    function get(){
      return apiCall;
    }
    // Public API here
    return {
      load: function (formData) {
        apiCall = $http({method: 'POST', data: formData, url: url});
        return apiCall;
      },
      get: get
    };
  });
