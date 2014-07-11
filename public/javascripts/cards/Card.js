// Base class definition for cards

// However, not all cards have a cost, power, or toughness.
// Only creature cards do, while spell cards have a cost and color
// but not a power or toughness.
var Card = function(){
    this.name = "";
    this.rarity = "";
    
    this.color = function() {
        // Ideally we will detect whether or not colors are set or not
        // so we can either check for a certain color to be there (meaning we don't have to put them
            // all in the DB... or we can loop through a set array...
            var self = this;
            
            // So in the DB, it's set as 0s for colors it doesn't have... Perhaps, though, one isn't set.
            // Two ways to handle that. We have set colors, so we can enumerate that
            var possibleColors = ['blue', 'black', 'green', 'red', 'white'];
            
            // so we can use hasOwnProperty to loop through and see if it has those colors..
            // hasOwnProperty DOES SUCK - and seems extraneous to test if it has that property
            // as it seems it handles well with just checking against the array.
            for (var i = 0; i < possibleColors.length; i++) {
                if(theCard[possibleColors[i]] === '1' ) {
                    console.log('potato');
                    self.settings.color.push(possibleColors[i]);
                } 
            }
            
            // Set the color setting now for this object
            if (self.settings.color.length < 0) {
                self.settings.color.push('colorless');
            }
            
            console.log('color ' + self.settings.color);
            return self.settings.color;
    };
}

