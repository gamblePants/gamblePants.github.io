window.onload = getProperties('resource.json', 'Terrace 4 bedrooms');


function getProperties(file, selected)
{
    // instantiate request
	var xhr = new XMLHttpRequest();
	
	xhr.onreadystatechange = function()
    {
        // if request finished, response ready and status ok
		if(xhr.readyState == 4 && this.status == 200)
        {
            // parse json string as an array of objects
			var data = JSON.parse(xhr.responseText);		

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
    }
    // send request to server and specify mime type
	xhr.open("GET",file,true);
	xhr.overrideMimeType("application/json");
	xhr.send(null);	
}





