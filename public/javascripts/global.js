// Cardlist data array for filling in info box
var cardListData = [];

// DOM Ready =============================================================
$(document).ready(function() {

    // Populate the user table on initial page load
    populateTable();
    
    // Cardname link click
    $('#cardList table tbody').on('click', 'td a.linkshowcard', showCardInfo);

});

// Functions =============================================================

// Fill table with data
function populateTable() {

    // Empty content string
    var tableContent = '';

    // jQuery AJAX call for JSON
    $.getJSON( '/users/userlist', function( data ) {
        // Stick our card data array into a cardlist variable in the global object
        cardListData = data;
        
        // For each item in our JSON, add a table row and cells to the content string
        $.each(data, function(){
            tableContent += '<tr>';
            tableContent += '<td><a href="#" class="linkshowcard" rel="' + this.name + '" title="Show Details">' + this.name + '</a></td>';
            tableContent += '<td>' + this.rarity + '</td>';
            tableContent += '<td><a href="#" class="linkdeletecard" rel="' + this._id + '">delete</a></td>';
            tableContent += '</tr>';
        });

        // Inject the whole content string into our existing HTML table
        $('#cardList table tbody').html(tableContent);
    });
};

// Show User Info
function showCardInfo(event) {
    console.log('potato test');

    // Prevent Link from Firing
    event.preventDefault();

    // Retrieve username from link rel attribute
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