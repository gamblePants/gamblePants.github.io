function getProperties(file, divID)
{		
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function()
	{		
		if(xhr.readyState == 4 && this.status == 200)
		{			
			var data = JSON.parse(xhr.responseText);		
			
			let output = "<table class='propTable'><tbody>";
			
			for(let key in data){				
				output += "<tr class='toprow'><td>" + data[key].address + "</td><td>" + data[key].type + "</td><td>" + data[key].avail + "</td><td>" + data[key].bedrooms + "</td><td rowspan='2'>" + data[key].pic + "</td></tr>"
				+ "<tr><td>" + data[key].description + "</td><td>" + data[key].rent + "</td><td>" + data[key].parking + "</td><td>" + data[key].bathrooms + "</td></tr>"
				+ "<tr class='separator'></tr>";				
			}			
			
			output += "</tbody></table>";
			document.getElementById(divID).innerHTML = output;
		}
	}
	xhr.open("GET",file,true);
	xhr.overrideMimeType("application/json");
	xhr.send(null);	
}


