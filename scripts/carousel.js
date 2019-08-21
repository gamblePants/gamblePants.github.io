// start slideshow on 4th image
var slideIndex = 4;

// look for buttons in the dom and set onlclick behaviour - unobtrusive
function prepareButtons() {

    // unobtrusive checks
    if (!document.getElementsByTagName) { return; }
    if (!document.getElementById) { return; }
    if (!document.getElementById("prev")) { return; }
    if (!document.getElementById("next")) { return; }

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

// display image (based on slide index) in placeholder and info in table
function showSlides(n) {    
    
    if (!document.getElementById("placeholder")) { return; } // unobtrusive check

    // return slide back to start if finished and vice versa
    if (n > data.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = data.length }

    var placeholder = document.getElementById("placeholder");
    if (placeholder.nodeName != "IMG") { return; } 	// unobtrusive check

    let i = slideIndex - 1;

    // split img tag and set src to larger image
    var source = data[i].pic.split("\'")[3];
    source = source.replace("_small.jpg", ".jpg");
    placeholder.setAttribute("src", source);

    if (!document.getElementById("infoPanel")) { return; } // unobtrusive check

    // create dynamic table
    let output = "<table class='propTable'><tbody>" +
        "<tr class='toprow'><td>" + data[i].address + "</td><td>" + data[i].type.split(' ')[0] + "</td><td>" + data[i].avail + "</td><td>" + data[i].bedrooms + "</td></tr>" +
        "<tr><td>" + data[i].description + "</td><td>" + data[i].rent + "</td><td>" + data[i].parking + "</td><td>" + data[i].bathrooms + "</td></tr>" +
        "</tbody></table>";

    document.getElementById("infoPanel").innerHTML = output;
}    

prepareButtons();

/* plusSlides() and showSlides() adapted from script found here:
https://www.w3schools.com/howto/howto_js_slideshow.asp */
