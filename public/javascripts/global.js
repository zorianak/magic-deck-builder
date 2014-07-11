// DOM Ready =============================================================
$(document).ready(function() {

    // Populate the user table on initial page load
    populateTable('all');
    
    // Cardname link click
    $('#cardList table tbody').on('click', 'td a.linkshowcard', showCardInfo);
    
    // Add Card button click
    $('#btnAddCard').on('click', addCard);

});



// Fill table with data
function populateTable(cardType) {
    // the table things will go into
    var cardListTable = $('#cardList tbody');
                          
    // String we will be inserting into our table
    var tableTemplate = '<tr>';
        tableTemplate += '<td><a href="#" class="linkshowcard" rel="<cardname>" title="Show Details"><cardname></a></td>';
        tableTemplate += '<td><rarity></td>';
        tableTemplate += '<td><colors></td>';
        tableTemplate += '<td><a href="#" class="linkdeletecard" rel="<id>">delete</a></td>';
        tableTemplate += '</tr>';
    
    var tableContent = '';
    
    if(cardType === 'all') {
        console.log('all');
        $.getJSON( '/cards/cardlist', function( data ) {
            // Stick our card data array into a cardlist variable in the global object
            var cardListData = data;
            
            // using 'this' gets kind of confusing.
            var self = this;

            // For each item in our JSON, add a table row and cells to the content string
            // We also want to determine the color(s) of the cards
            $.each(data, function(){
                
                // so we want to basically init our creature card
                var Card = new CreatureCards(this);
                console.log('theCard ');
                console.log(Card.color());
                
                if ( Card !== -1) {

                    // replace everything from the table template and push it into a temporary one
                    var tempTemplate = tableTemplate.replace(/<cardname>/g, Card.name)
                                .replace('<rarity>', Card.rarity)
                                .replace('<colors>', Card.color())
                                .replace('<id>', Card.id);
                    
                    
                    // the temporary one will now be put into our big string to add to the table
                    tableContent += tempTemplate;
                }
                
                
            });
            
            // done looping data, let's populate our table
            cardListTable.html(tableContent);
        });
    }
};

// Show User Info
function showCardInfo(event) {
    console.log('potato test');

    // Prevent Link from Firing
    event.preventDefault();

    // Retrieve cardname from link rel attribute
    var thisCardName = $(this).attr('rel');

    // Get Index of object based on id value
    var arrayPosition = cardListData.map(function(arrayItem) { return arrayItem.name; }).indexOf(thisCardName);

    // Get our User Object
    var thisCardObject = cardListData[arrayPosition];

    //Populate Info Box
    $('#cardInfoName').text(thisCardObject.name);
    $('#cardInfoRarity').text(thisCardObject.rarity);
    $('#cardInfoCost').text(thisCardObject.cost);
    $('#cardInfoPower').text(thisCardObject.power);
    $('#cardInfoToughness').text(thisCardObject.toughness);

};

// Add Card
function addCard(event) {
    event.preventDefault();

    // Super basic validation - increase errorCount variable if any fields are blank
    var errorCount = 0;
    $('#addCard input').each(function(index, val) {
        if($(this).val() === '') { errorCount++; }
    });

    // Check and make sure errorCount's still at zero
    if(errorCount === 0) {

        // If it is, compile all user info into one object
        var newCard = {
            'name': $('#addCard fieldset input#inputCardName').val(),
            'rarity': $('#addCard fieldset input#inputCardRarity').val(),
            'cost': $('#addCard fieldset input#inputCardCost').val(),
            'power': $('#addCard fieldset input#inputCardPower').val(),
            'toughness': $('#addCard fieldset input#inputCardToughness').val()
        }

        // Use AJAX to post the object to our adduser service
        $.ajax({
            type: 'POST',
            data: newCard,
            url: '/users/addcard',
            dataType: 'JSON'
        }).done(function( response ) {

            // Check for successful (blank) response
            if (response.msg === '') {

                // Clear the form inputs
                $('#addCard fieldset input').val('');

                // Update the table
                populateTable();

            }
            else {

                // If something goes wrong, alert the error message that our service returned
                alert('Error: ' + response.msg);

            }
        });
    }
    else {
        // If errorCount is more than 0, error out
        alert('Please fill in all fields');
        return false;
    }
};

// Delete Card
function deleteCard(event) {

    

};