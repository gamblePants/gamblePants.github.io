// start slideshow on 4th image
var slideIndex = 4;

// look for buttons in the dom and set onlclick behaviour - unobtrusive
function prepareButtons() {

    // unobtrusive checks
    if (!document.getElementsByTagName) { return false; }
    if (!document.getElementById) { return false; }
    if (!document.getElementById("prev")) { return false; }
    if (!document.getElementById("next")) { return false; }

    var previous = document.getElementById("prev");
    var next = document.getElementById("next");

    previous.onclick = function () {
        return plusSlides(-1);
    }

    next.onclick = function () {
        return plusSlides(1);
    }
}

// next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// gets json data and displays to dom
function showSlides(n) {

    // instantiate request
    var xhr = new XMLHttpRequest();
    
    xhr.onreadystatechange = function () {
        
        // if request finished, response ready and status ok
        if (xhr.readyState == 4 && this.status == 200) {
            // parse json string as an array of objects
            var data = JSON.parse(xhr.responseText);

            if (!document.getElementById("placeholder")) { return true; } // unobtrusive check

            // return slide back to start if finished and vice versa
            if (n > data.length) { slideIndex = 1 }
            if (n < 1) { slideIndex = data.length }

            var placeholder = document.getElementById("placeholder");
            if (placeholder.nodeName != "IMG") { return true; } 	// unobtrusive check

            let i = slideIndex - 1;

            // splits img tag and sets src to larger image
            var source = data[i].pic.split("\'")[1];
            source = source.replace("_small.jpg", ".jpg");
            placeholder.setAttribute("src", source);

            if (!document.getElementById("infoPanel")) { return true; } // unobtrusive check
            //var desc = document.getElementById("infoPanel");
            //desc.firstChild.nodeValue = data[i].description;

            let output = "<table class='propTable'><tbody>" +
                "<tr class='toprow'><td>" + data[i].address + "</td><td>" + data[i].type.split(' ')[0] + "</td><td>" + data[i].avail + "</td><td>" + data[i].bedrooms + "</td></tr>" +
                "<tr><td>" + data[i].description + "</td><td>" + data[i].rent + "</td><td>" + data[i].parking + "</td><td>" + data[i].bathrooms + "</td></tr>" +
                "</tbody></table>";

            document.getElementById("infoPanel").innerHTML = output;
        }
    }
    // send request to server and specify mime type
    xhr.open("GET", 'resource.json', true);
    xhr.overrideMimeType("application/json");
    xhr.send(null);	
}

window.onload = prepareButtons();

/* plusSlides() and showSlides() adapted from script found here:
https://www.w3schools.com/howto/howto_js_slideshow.asp */
