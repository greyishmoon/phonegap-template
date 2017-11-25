//----------- CORDOVA ONLOAD ---------------- //

// Cordova device event listener - will not work in browser
document.addEventListener("deviceready", onDeviceReady, false);

// Cordova device event triggered function
function onDeviceReady() {

    // Add other event listeners here if needed (pause, resume, backbutton etc)

    // updates display    
    // updateDisplay();

    console.log("device ready");
}

//----------- CORDOVA ONLOAD ---------------- //

//----------- HTML ONLOAD ---------------- //

// JQuery ready event listener
$(document).ready(onReady);
// or... $( window ).on( "load", readyFn );

// JQuery DOM loaded event triggered function
function onReady(jQuery) {
    // MAIN CODE HERE
    console.log("onReady");

    updateDisplay();
}

//----------- HTML ONLOAD ---------------- //


// USE FOR ALL DISPLAY CODE
function updateDisplay() {
    $("#linked").text("Text replaced by updateDisplay");
}