'use strict';
 /*jshint unused:false*/
 /*global cardsApp, cardArray, SituationService*/
cardsApp.filter('situationFilter', function(CardService) {
    return function(input, query) {
       return CardService.filterSituations(input,query);
   };
});


cardsApp.service('CardService', SituationService);

/**
 * @ngdoc function
 * @name cardsApp.controller:PreflopController
 * @description
 * # PreflopController
 * Controller of the cardsApp
 */

cardsApp
  .controller('PreflopController', function ($scope,CardService ) {
   $scope.items = CardService.getAllSituations();
  });


  cardsApp
  .controller('HelpController', function ($scope) {
   $scope.show = true;
  });


