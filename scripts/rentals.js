// array of property types for searchbar
var properties = ["Apartment 2 bedrooms", "Apartment 3 bedrooms", "Duplex 3 bedrooms", "House 3 bedrooms", "House 4 bedrooms", "House 5 bedrooms", "Studio", "Terrace 4 bedrooms", "Townhouse 2 bedrooms", "Townhouse 3 bedrooms"];

// initiate the autocomplete function on searchbar and pass along properties array as possible values
autocomplete(document.getElementById("searchBar"), properties);


function displayResults(selected) {

    var resultsFound = false;
    let output = "<table class='propTable'><tbody>";

    // loop through array and create table 
    for (let key in data) {
        if (selected == data[key].type) {
            output += "<tr class='toprow'><td>" + data[key].address + "</td><td>" + data[key].type.split(' ')[0] + "</td><td>" + data[key].avail + "</td><td>" + data[key].bedrooms + "</td><td rowspan='2'>" + data[key].pic + "</td></tr>"
                + "<tr><td>" + data[key].description + "</td><td>" + data[key].rent + "</td><td>" + data[key].parking + "</td><td>" + data[key].bathrooms + "</td></tr>"
                + "<tr class='separator'></tr>";
            resultsFound = true;
        }
    }
    output += "</tbody></table>";

    // user feedback if search does not match
    if (resultsFound == false) {
        document.getElementById("msgNoneFound").innerHTML = "None available at this time. Please try a different property type.";
    } else {
        document.getElementById("msgNoneFound").innerHTML = "";
        document.getElementById("searchResults").innerHTML = output;
    }
}




