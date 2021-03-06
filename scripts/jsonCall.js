var data;
var xhr;
getProperties();

function getProperties()
{
    // instantiate request
	xhr = new XMLHttpRequest();
	
	xhr.onreadystatechange = function()
    {
        // if request finished, response ready and status ok
		if(xhr.readyState == 4 && this.status == 200)
        {
            // parse json string as an array of objects
			data = JSON.parse(xhr.responseText);  			
		}
    }
    // send request to server and specify mime type
    xhr.open("GET", 'https://api.myjson.com/bins/f1x9f', true);
    // xhr.open("GET", 'resource.json', true); // alternative if myjson server is down
	xhr.overrideMimeType("application/json");
	xhr.send(null);	
}



