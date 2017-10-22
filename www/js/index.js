
// Cordova device event listener - will not work in browser
document.addEventListener("deviceready", onDeviceReady, false);
		
	



// Cordova device event triggered function
function onDeviceReady() {
	
	// Add other event listeners here if needed (pause, resume, backbutton etc)
	
    // updates display    
	updateDisplay();
	    
	console.log("device ready");
}


// USE FOR ALL DISPLAY CODE
function updateDisplay() {
	$("#linked").text("Text replaced by updateDisplay");
}