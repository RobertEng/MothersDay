(function(window, document, undefined) {
  var IMAGE_DIRECTORY = "/img";
  var NUM_IMAGES_TOTAL = 22;
  var NUM_IMAGES_RENDER = 6;

  document.addEventListener("DOMContentLoaded", function() {
    renderBackground();
    // renderImages(document.getElementById("container"));

    // Update clock per second
    setInterval(function() {
      renderClock(document.getElementById("clock"), new Date());
    }, 1000);

    renderClock(document.getElementById("clock"), new Date());
    renderGreeting(document.getElementById("greeting"), new Date());
  });

  function renderBackground() {
    imageIndex = Math.floor(Math.random() * NUM_IMAGES_TOTAL + 1);
    src = [IMAGE_DIRECTORY, "/", imageIndex, ".jpg"].join("");


    document.body.style.background = ["#ffffff url(", src, ") no-repeat center center"].join("");
    document.body.style.backgroundSize = "cover";
  }

  function renderImages(element, num) {
    var used = [];

    // while (used.length < NUM_IMAGES_RENDER) {
    //   var imageIndex = Math.floor(Math.random() * NUM_IMAGES_TOTAL + 1);
    //   if (used.indexOf(imageIndex) == -1) {
    //     used.push(imageIndex);
    //     var img = document.createElement("img");
    //     img.src = [IMAGE_DIRECTORY, "/", imageIndex, ".jpg"].join("");
    //     img.width = "100";
    //     img.className = "flavor";
    //     element.appendChild(img);
    //   }
    // }

    // new Masonry(element, { itemSelector: '.thumbnail' });
  }

	function renderClock(element, dateObject) {
		var hours = dateObject.getHours();
		var minutes = dateObject.getMinutes();

		hours = (hours > 12) ? hours - 12 : hours;
		hours = (hours == 0) ? 12 : hours;
		minutes = (minutes < 10 ? "0" : "") + minutes;

		element.innerHTML = hours + ":" + minutes;
	}

	function renderGreeting(element, dateObject) {
		var mother = ["Mo-ver", "Mommy", "Mo-ber"]

		var date = dateObject.getDate();
		var hours = dateObject.getHours();

		if (hours >= 3 && hours < 11) {
			var greeting = "Good Morning, " + mother[date % mother.length];
		} else if (hours >= 11 && hours < 19) {
			var greeting = "Good Afternoon, " + mother[date % mother.length];
		} else {
			var greeting = "Good Evening, " + mother[date % mother.length];
		}

		element.innerHTML = greeting;
	}
})(window, document);