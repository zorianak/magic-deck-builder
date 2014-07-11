// DOM Ready =============================================================
$(document).ready(function() {

    // Populate the user table on initial page load
    populateTable('all');
    
    // Cardname link click
    $('#cardList table tbody').on('click', 'td a.linkshowcard', showCardInfo);
    
    // Add Card button click
    $('#btnAddCard').on('click', addCard);

    // When we click a menu item, we want to query for that card
    $('#nav').on('click', function(e) {
        e.preventDefault();
        var goHere = e.target.rel;
        displayPage(goHere);
      });
});