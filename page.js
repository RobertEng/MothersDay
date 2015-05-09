
document.addEventListener("DOMContentLoaded", function() {
	var d = new Date();
	// var n = d.toLocaleDateString(); // Nice, but has the year too
	// console.log(n);

	// Get just the month/date. No leading zeros
	var str = d.getMonth() + 1 + "-" + d.getDate() + ".png";
	console.log("str = " + str);

	document.body.style.background = "#ffffff url("+str+") center center";

	document.getElementById("date").innerHTML = d.toDateString();

});



    // chrome.tabs.onCreated.addListener(function(Tab tab) {
      // };