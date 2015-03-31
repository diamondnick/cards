'use strict';
 /*jshint unused:false*/
 /*global cardsApp, cardArray, SituationService*/
cardsApp.filter('situationFilter', function(CardService) {
    return function(input, query) {
       return CardService.filterSituations(input,query);
   };
});


cardsApp.service('CardService', function() {
    var ss = new SituationService();
    this.getAllSituations = function(){     
          return ss.getAllSituations(cardArray);
    };
    this.filterSituations = function(situations, query){
          return ss.filterSituations(situations, query);
    };

});

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


