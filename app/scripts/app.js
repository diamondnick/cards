'use strict';

/**
 * @ngdoc overview
 * @name cardsApp
 * @description
 * # cardsApp
 *
 * Main module of the application.
 */
angular
  .module('cardsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
       .when('/', {
        templateUrl: 'views/preflop.html',
        controller: 'PreflopCtrl'
      })
    
  });
