
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

});



    // chrome.tabs.onCreated.addListener(function(Tab tab) {
      // };