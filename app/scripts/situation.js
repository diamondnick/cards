'use strict';
function Situation(face, unraisedPot, raisedPot, pos) {
		this.face = face;
		this.card1 = face.substring(0,1).toUpperCase();
		this.card2 = face.substring(1,2).toUpperCase();
		this.unraisedPot = unraisedPot;
		this.raisedPot = raisedPot;
		this.position = pos;	
		this.suited  = face.substring(2,3).toUpperCase() == "S" ? "suited" : "unsuited";
		this.same = this.card1 == this.card2;
		this.showDiffCards = this.same || !this.suited;
		this.positionAbbr = pos.substring(0,1).toUpperCase();
		this.hasNumber = !(isNaN(this.card1) && isNaN(this.card2));
        this.show = false;
        this.wildCardMatch = false;
        this.exactMatch = false;

           

         this.exactMatch = function(card1, card2){

            var match = (card1 == this.card1) && (card2 == this.card2);

   //    console.log("is exact match ? "+this.card1+this.card2+" search one "+ card1 + " search two "+card2+" "+match);
            return match;
         }

         this.wildcardMatch = function(card1, card2){
             var isMatchWIthWildcard = false;
            if(!isNaN(card1) && ((this.card1 == '#') ||(this.card2 == '#'))  ){
                 if(this.card1 == card2 || this.card2 == card2) {
                     isMatchWIthWildcard = true;
                  }     
            }   

           if(!card1){
                 if(this.card1 == card2 || this.card2 == card2) {
                     isMatchWIthWildcard = true;
                  }     
            }   

            return isMatchWIthWildcard;
         }

         this.isWildCardMatch = function(card1, card2, position){
              return (!position || this.position == position )&& (this.wildcardMatch(card1, card2) ||
                     this.wildcardMatch(card2, card1));
         }

         this.isExactMatch = function(card1, card2, position){
                return  (!position || this.position == position ) && (this.exactMatch(card1, card2)   ||
                       this.exactMatch(card2, card1));
         }

		
	}