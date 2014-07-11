// This will inherit from Card.js, and will set definitions for just creatures

var CreatureCards = function(theCard){
    // these will probably have functions written out to assign properly from JSON
    this.name = theCard.name;
    this.rarity = theCard.rarity;
    this.power = theCard.power;
    this.toughness = theCard.toughness;
    this.cost = theCard.cost;
    
    this.color = function() {
        // So we are passed theCard, which will be a JSON object
        // that contains our values. Colors is the hardest one to 
        // extract, because it's not defined - we have to define
        // them individually so that we can use it properly (aka 
        // so we can query the DB/collection by color).
        
        // We have 5 possible colors that have been available since
        // the Dawn of Time, so for now we can hardcode this.
        var possibleColors = ['blue', 'black', 'green', 'red', 'white'];
        var possColLength = possibleColors.length;
        
        var colorArray = [];
        
        // After that, we basically want to test and see if a certain
        // color is set.
        for (var i = 0; i < possColLength; i++) {
                if(theCard[possibleColors[i]] === '1' ) {
                    // So if that is set to a 1 (true), we
                    // want to add it to the card's color array
                    colorArray.push(possibleColors[i]);
                }
            }
        console.log('col Array ' + colorArray);
        return colorArray;
    };
}
CreatureCards.prototype = new Card();