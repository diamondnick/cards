'use strict';
/*jshint unused:false*/
function Situation(face, unraisedPot, raisedPot, pos) {
    this.face = face;
    this.card1 = face.substring(0, 1).toUpperCase();
    this.card2 = face.substring(1, 2).toUpperCase();
    this.unraisedPot = unraisedPot;
    this.raisedPot = raisedPot;
    this.position = pos;
    this.suited = face.substring(2, 3).toUpperCase() === 'S' ? 'suited' : 'unsuited';
    this.isSuited = face.substring(2, 3).toUpperCase() === 'S';
    this.same = this.card1 === this.card2;
    this.showDiffCards = this.same || !this.suited;
    this.positionAbbr = pos.substring(0, 1).toUpperCase();
    this.hasNumber = !(isNaN(this.card1) && isNaN(this.card2));
    this.positionDisplay = '';
    this.show = false;
    this.wildCardMatch = false;
    this.exactMatch = false;


    switch (this.position) {
        case 'E':
            this.positionDisplay = 'Early';
            break;
        case 'M':
            this.positionDisplay = 'Middle';
            break;
        case 'L':
            this.positionDisplay = 'Late';
            break;
        case 'B':
            this.positionDisplay = 'Big Blind';
            break;
        default:
            this.positionDisplay = 'Small Blind';
    }

    this.isMatch = function (situationQuery) {
        var isWildCardMatch = this.isWildCardMatch(situationQuery.card1, situationQuery.card2, situationQuery.position);

        var isExactMatch = this.isExactMatch(situationQuery.card1, situationQuery.card2, situationQuery.position);

        //console.log('card: '+ JSON.stringify(this) +'situationQuery: '+ JSON.stringify(situationQuery) + 'is isWildCardMatch: '+ isWildCardMatch + 'isExactMatch: '+isExactMatch);

        return isExactMatch || isWildCardMatch;

    };

    this.exactMatch = function (card1, card2) {

        var match = (card1 === this.card1) && (card2 === this.card2);

        //    console.log('is exact match ? '+this.card1+this.card2+' search one '+ card1 + ' search two '+card2+' '+match);
        return match;
    };

    this.wildcardMatch = function (card1, card2) {
        var isMatchWIthWildcard = false;
        if (!isNaN(card1) && ((this.card1 === 'Z') || (this.card2 === 'Z'))) {
            if (this.card1 === card2 || this.card2 === card2) {
                isMatchWIthWildcard = true;
            }
        }

        if (!card1) {
            if (this.card1 === card2 || this.card2 === card2) {
                isMatchWIthWildcard = true;
            }
        }

        return isMatchWIthWildcard;
    };

    this.isWildCardMatch = function (card1, card2, position) {
        return (!position || this.position === position) && (this.wildcardMatch(card1, card2) ||
                this.wildcardMatch(card2, card1));
    };

    this.isExactMatch = function (card1, card2, position) {
        return  (!position || this.position === position) && (this.exactMatch(card1, card2) ||
                this.exactMatch(card2, card1));
    };


}


function SituationQuery(query) {
    this.isValidPosition = function (letter) {
        //  return true;
        return 'EMLBS'.indexOf(letter) !== -1;
    };


    this.position = '';
    var one = query.toUpperCase().substring(0, 1);
    var two = query.toUpperCase().substring(1, 2);
    var three = query.toUpperCase().substring(2, 3);

    if (this.isValidPosition(one)) {
        this.position = one;
        this.card1 = two;
        this.card2 = three;

    } else {
        this.position = '';
        this.card1 = one;
        this.card2 = two;
    }
}


function SituationService() {


   this.getSituationByQuery = function(query, limit){

       return this.filterSituations(this.getAllSituations(),query,limit);

   }


    this.filterSituations = function (situations, query, limit) {

        var out = [];
        if (query) {
            var sq = new SituationQuery(query);
            angular.forEach(situations, function (sit) {
                if (sit.isMatch(sq)) {
                    out.push(sit);
                }

            });
        }

        return out;
    };



    this.getSituationByPosition = function (posName, data, startIndex) {

        var hsArray = data.map(function (ob) {
            return new Situation(ob[0], ob[startIndex], ob[startIndex + 1], posName);
        });
        // var sits = this.situations.concat(hsArray);   
        return hsArray;
    };

    this.getAllSituations = function (cardArrayData) {

        if (!cardArrayData) {
            cardArrayData = cardArray;
        }

        try {
            var situations = [];
            situations = this.getSituationByPosition('E', cardArrayData, 3);
            situations = situations.concat(this.getSituationByPosition('M', cardArrayData, 1));
            situations = situations.concat(this.getSituationByPosition('L', cardArrayData, 5));
            situations = situations.concat(this.getSituationByPosition('S', cardArrayData, 7));
            situations = situations.concat(this.getSituationByPosition('B', cardArrayData, 9));
        } catch (e) {
            console.log(e);
        }
        return situations;

    };

}