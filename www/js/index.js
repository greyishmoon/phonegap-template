//----------- CORDOVA ONLOAD ---------------- //
// Cordova device event listener - will not work in browser
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    console.log("Cordova onDeviceReady");
    initialize();
}

//----------- HTML ONLOAD ---------------- //
// JQuery ready event listener
$(document).ready(onReady);         // or... $(window).on( "load", readyFn );

function onReady(jQuery) {
    console.log("jQuery onReady");
    initialize();
}

//----------- JQM ONLOAD ---------------- //
// JQuery Mobile pageloaded event listener
$(document).on('pageshow', '#pageone', onLoad);

function onLoad() {
    console.log("jQuery Mobile onLoad");
    initialize();
}

function initialize() {
    console.log("initialize");
    // EVENT LISTENERS HERE

    // DEMO
    //set up click event handling for button
    $('#linkedButton').on("click", updateText);
    $("#linkedText").text("Text replaced by initialize");
}

function updateText() {
    $("#linkedText").text("Text NOW replaced by BUTTON");
}
