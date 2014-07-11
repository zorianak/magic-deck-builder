// These are controllers for the app itself
function displayPage(goHere) {
    // so as of writing this, we only go to card pages
    // so far now, we want to do a GET on just that 
    // card color
    
    // make the url
    var theUrl = '/cards/cardlist?color=' + goHere;
    console.log(theUrl);
    $.ajax({
        type: 'GET',
        url: theUrl
    }).done(function( response ) {

            // Check for a successful (blank) response
            if (response.msg === '') {
            }
            else {
                alert('Error: ' + response.msg);
            }

            // Update the table
            populateTable(goHere);

        });
};