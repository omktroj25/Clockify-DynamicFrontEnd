
// Universal

var clockifyBody = document.querySelector("body");
var clockify = document.createElement("div");
clockify.classList.add("overall-layer");
clockifyBody.appendChild(clockify);


function setCollection(element, attributes) {
    for (var key in attributes) {
        if (attributes.hasOwnProperty(key)) {
            element.setAttribute(key, attributes[key]);
        }
    }
}