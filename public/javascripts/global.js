// DOM Ready =============================================================
$(document).ready(function() {

    // Populate the user table on initial page load
    populateTable('all');
    
    // Cardname link click
    $('#cardList table tbody').on('click', 'td a.linkshowcard', showCardInfo);
    
    // Add Card button click
    $('#btnAddCard').on('click', addCard);

});