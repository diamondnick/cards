'use strict';

/**
 * @ngdoc overview
 * @name cardsApp
 * @description
 * # cardsApp
 *
 * Main module of the application.
 */

 var cardsApp = angular
  .module('cardsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    "ngOnboarding"
  ]);

  cardsApp.config(function ($routeProvider) {
    $routeProvider
       .when('/', {
        templateUrl: 'preflop.html',
        controller: 'PreflopController'
      }) ;
  });
