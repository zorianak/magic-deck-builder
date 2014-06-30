var s,
    Card = {
        /*** Global Settings 
        Cards will overwrite this!
        ****/
        settings: {
            power:0,
            toughness:0,
            rarity:0,
            name:0,
            color:0
        },
        
        init: function() {
            s = this.settings;
            console.log('this');
        },
        
        deleteCard : function() {
            event.preventDefault();

            // Pop up a confirmation dialog
            var confirmation = confirm('Are you sure you want to delete this card?');

            // Check and make sure the user confirmed
            if (confirmation === true) {

                // If they did, do our delete
                $.ajax({
                    type: 'DELETE',
                    url: '/users/deletecard/' + $(this).attr('rel')
                }).done(function( response ) {

                    // Check for a successful (blank) response
                    if (response.msg === '') {
                    }
                    else {
                        alert('Error: ' + response.msg);
                    }

                    // Update the table
                    populateTable();

                });

            }
            else {

                // If they said no to the confirm, do nothing
                return false;

            }
        },
        
        /********
        This will figure out the color of the card, and return the color property.
        Note that some cards can be colorless, and others can have more than one color.
        *********/
        getCardColor : function(theCard) {
            // so we can either check for a certain color to be there (meaning we don't have to put them
            // all in the DB... or we can loop through a set array...
            var self = theCard;
            var color = [];
            
            // So in the DB, it's set as 0s for colors it doesn't have... Perhaps, though, one isn't set.
            // Two ways to handle that. We have set colors, so we can enumerate that
            var possibleColors = ['blue', 'black', 'green', 'red', 'white'];
            
            // so we can use hasOwnProperty to loop through and see if it has those colors..
            // hasOwnProperty DOES SUCK - and seems extraneous to test if it has that property
            // as it seems it handles well with just checking against the array.
            for (var i = 0; i < possibleColors.length; i++) {
                if(theCard[possibleColors[i]] === '1' ) {
                    color += possibleColors[i];
                } 
            }
            
            // now we want to return the colors we got, if any
            if (color.length > 0) {
                return color;
            } else {
                return 'colorless';
            }
        }
    }