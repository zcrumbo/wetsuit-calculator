'use strict';

/**
 * @ngdoc overview
 * @name wetsuitGeneratorApp
 * @description
 * # wetsuitGeneratorApp
 *
 * Main module of the application.
 */
angular
  .module('wetsuitGeneratorApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'duScroll',
    'ngMessages'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/results',{
        templateUrl: 'views/results.html',
        controller: 'ResultsCtrl',
        controllerAs: 'results',
      })
      .otherwise({
        redirectTo: '/'
      });
  });
