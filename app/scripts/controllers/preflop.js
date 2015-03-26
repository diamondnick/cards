'use strict';




angular.module('cardsApp').filter('situationFilter', function() {

  // Create the return function and set the required parameter name to **input**
  return function(input, query) {
    console.log('het '+query);
    var out = [];

    // Using the angular.forEach method, go through the array of data and perform the operation of figuring out if the language is statically or dynamically typed.
    angular.forEach(input, function(sit) {
     
    //   out.push(sit);
        out.push(sit);
      
      
    });

    return out;
  };

});

/**
 * @ngdoc function
 * @name cardsApp.controller:PreflopController
 * @description
 * # PreflopController
 * Controller of the cardsApp
 */
angular.module('cardsApp')
  .controller('PreflopController', function ($scope) {
    var sit1 = new Situation('AA', 'Reraise', 'Reraise','Middle');
    var sit2 = new Situation('KK', 'Fold', 'Fold','Middle');
    $scope.search = function() {
        console.log($scope.query );
    };

    $scope.items = [
      sit1,sit2
    ];
  });
