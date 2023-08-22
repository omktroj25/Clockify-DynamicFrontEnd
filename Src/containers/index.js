
// Universal

var clockifyBody = document.querySelector("body");
var clockify = document.createElement("div");
clockify.classList.add("overall-layer");
clockifyBody.appendChild(clockify);

// To set the attributes to the element
function setCollection(element, attributes) {
    for (var key in attributes) {
        if (attributes.hasOwnProperty(key)) {
            element.setAttribute(key, attributes[key]);
        }
    }
}

// To generate guid
function generateGUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = crypto.getRandomValues(new Uint8Array(1))[0] % 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

