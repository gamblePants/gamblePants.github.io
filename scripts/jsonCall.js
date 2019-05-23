window.onload = getProperties('resource.json', 'searchResults', 'Terrace 4 bedrooms');

function getProperties(file, divID, selected)
{		
	var xhr = new XMLHttpRequest();
	var resultsFound = false;
	xhr.onreadystatechange = function()
	{		
		if(xhr.readyState == 4 && this.status == 200)
		{			
			var data = JSON.parse(xhr.responseText);		
			
			let output = "<table class='propTable'><tbody>";
			
			for(let key in data){
				if(selected == data[key].type){					
					output += "<tr class='toprow'><td>" + data[key].address + "</td><td>" + data[key].type.split(' ')[0] + "</td><td>" + data[key].avail + "</td><td>" + data[key].bedrooms + "</td><td rowspan='2'>" + data[key].pic + "</td></tr>"
					+ "<tr><td>" + data[key].description + "</td><td>" + data[key].rent + "</td><td>" + data[key].parking + "</td><td>" + data[key].bathrooms + "</td></tr>"
					+ "<tr class='separator'></tr>";
					resultsFound = true;
				}
			}			
			
			output += "</tbody></table>";
			
			if (resultsFound == false){
				document.getElementById("msgNoneFound").innerHTML = "None available at this time. Please try a different property type.";
			}else{
				document.getElementById("msgNoneFound").innerHTML = "";
				document.getElementById(divID).innerHTML = output;
			}
		}
	}
	xhr.open("GET",file,true);
	xhr.overrideMimeType("application/json");
	xhr.send(null);	
}


