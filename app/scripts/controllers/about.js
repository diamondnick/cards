'use strict';

/**
 * @ngdoc function
 * @name cardsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the cardsApp
 */
angular.module('cardsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
