
document.addEventListener("DOMContentLoaded", function() {
	var d = new Date();
	// var n = d.toLocaleDateString(); // Nice, but has the year too
	// console.log(n);

	// Get just the month-date. No leading zeros. Photos must be in format
	// month-date.png to get referenced this way.
	var str = d.getMonth() + 1 + "-" + d.getDate() + ".png";
	console.log("str = " + str);

	document.body.style.background = "#ffffff url("+str+") center center";

	// Make the date that gets displayed on the tab
	var weekday = new Array(7);
	weekday[0]=  "Sunday";
	weekday[1] = "Monday";
	weekday[2] = "Tuesday";
	weekday[3] = "Wednesday";
	weekday[4] = "Thursday";
	weekday[5] = "Friday";
	weekday[6] = "Saturday";
	var month = new Array();
	month[0] = "January";
	month[1] = "February";
	month[2] = "March";
	month[3] = "April";
	month[4] = "May";
	month[5] = "June";
	month[6] = "July";
	month[7] = "August";
	month[8] = "September";
	month[9] = "October";
	month[10] = "November";
	month[11] = "December";
	var disstr = weekday[d.getDay()] + ", ";
	disstr += month[d.getMonth()] + " " + d.getDate() + ", ";
	disstr += d.getFullYear();

	document.getElementById("date").innerHTML = disstr;


	// Add the time when tab opens
	var currentTime = new Date ();
	var currentHours = currentTime.getHours();
	var currentMinutes = currentTime.getMinutes();
	var currentSeconds = currentTime.getSeconds();
	// Pad the minutes and seconds with leading zeros, if required
	currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
	currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;
	// Choose either "AM" or "PM" as appropriate
	var timeOfDay = (currentHours < 12) ? "AM" : "PM";
	// Convert the hours component to 12-hour format if needed
	currentHours = (currentHours > 12) ? currentHours - 12 : currentHours;
	// Convert an hours component of "0" to "12"
	currentHours = (currentHours == 0) ? 12 : currentHours;
	// Compose the string for display
	var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;
	// Update the time display
	document.getElementById("clock").firstChild.nodeValue = currentTimeString;



	// Poop chrome extensions don't allow for javascript functions in setInterval.
	// The function in setInterval is same as above.
	// This setInterval updates every second
	setInterval(function() {
		var currentTime = new Date ();
		var currentHours = currentTime.getHours();
		var currentMinutes = currentTime.getMinutes();
		var currentSeconds = currentTime.getSeconds();
		// Pad the minutes and seconds with leading zeros, if required
		currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
		currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;
		// Choose either "AM" or "PM" as appropriate
		var timeOfDay = (currentHours < 12) ? "AM" : "PM";
		// Convert the hours component to 12-hour format if needed
		currentHours = (currentHours > 12) ? currentHours - 12 : currentHours;
		// Convert an hours component of "0" to "12"
		currentHours = (currentHours == 0) ? 12 : currentHours;
		// Compose the string for display
		var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;
		// Update the time display
		document.getElementById("clock").firstChild.nodeValue = currentTimeString;
	}, 1000);


});

// This function is from online somewhere



    // chrome.tabs.onCreated.addListener(function(Tab tab) {
      // };