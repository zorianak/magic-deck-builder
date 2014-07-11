// These are controllers for the app itself
function displayPage(goHere) {
    // so as of writing this, we only go to card pages
    // so far now, we want to do a GET on just that 
    // card color
    
    // make the url
    var theUrl = '/cards/cardlist?color=' + goHere;
    console.log('theURL ' + theUrl);
    $.ajax({
        type: 'GET',
        url: theUrl,
        dataType: 'json',
        jsonp: 'jsonp',
        sucess: function(data) {
            console.log('success', data);
        },
        error: function(xhr,status,error){ alert(status); }
    }).done(function( response ) {

            // Check for a successful (blank) response
            if (response.msg === '') {
                populateTable();
            }
            else {
                alert('Error: ' + response.msg);
                console.log(data);
            }

            // Update the table
            populateTable(goHere);
        console.log('Updated table.');
        });
};