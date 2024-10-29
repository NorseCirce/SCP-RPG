

//Make all images Lazy load    src:https://medium.com/@sidhupkc/how-to-implement-lazy-loading-to-all-images-e207d50d6512
var images = document.querySelectorAll('img');
images.forEach(function(image) {
  image.setAttribute('loading', 'lazy');
});


//Making all images target the folder named images
window.onload = function() {
    var images = document.querySelectorAll('img');
    var basePath = 'images/';

    images.forEach(function(image) {
        var src = image.getAttribute('src');
        // Check if src doesn't start with 'images/'
        if (!src.startsWith('images/')) {
            // Prepend basePath to src
            image.src = basePath + src;
        }
    });
};



//Toggle visible stats
function toggleFields() {
    var format = document.getElementById("TTRPG_Format").value;
    var elements_fallout = document.querySelectorAll('[id*="Fallout"]');
    var elements_FiveE = document.querySelectorAll('[id*="FiveE"]');
    var elements_info = document.querySelectorAll('[id*="info"]');
    
    if (format === "5th Edition") {
        elements_fallout.forEach(function(element_fallout) {
            element_fallout.classList.add("hidden");
        });
        elements_FiveE.forEach(function(element_FiveE) {
            element_FiveE.classList.remove("hidden");
        });
        elements_info.forEach(function(element_info) {
            element_info.classList.add("hidden");
        });

    } else if (format === "Fallout") {
        elements_fallout.forEach(function(element_fallout) {
            element_fallout.classList.remove("hidden");
        });
        elements_FiveE.forEach(function(element_FiveE) {
            element_FiveE.classList.add("hidden");
        });
        elements_info.forEach(function(element_info) {
            element_info.classList.add("hidden");
        });
    }
    else {
        elements_fallout.forEach(function(element_fallout) {
            element_fallout.classList.add("hidden");
        });
        elements_FiveE.forEach(function(element_FiveE) {
            element_FiveE.classList.add("hidden");
        });
        elements_info.forEach(function(element_info) {
            element_info.classList.remove("hidden");
        });



    }
}




//Mobile check
function isMobileBrowser() {
    return /iPhone|iPad|iPod|Android|Windows Phone/i.test(navigator.userAgent);
}

if (isMobileBrowser()) {
    console.log("This browser is on a mobile device.");
} else {
    console.log("This browser is not on a mobile device.");
}