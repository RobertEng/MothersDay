(function(window, document, undefined) {
  var IMAGE_DIRECTORY = "/img";
  var NUM_IMAGES_TOTAL = 22;
  var NUM_IMAGES_RENDER = 6;

  document.addEventListener("DOMContentLoaded", function() {
    renderBackground(new Date());
    // renderImages(document.getElementById("quilt"));

    // Update clock per second
    setInterval(function() {
      renderClock(document.getElementById("clock"), new Date());
    }, 1000);

    renderClock(document.getElementById("clock"), new Date());
    renderGreeting(document.getElementById("greeting"), new Date());

    // Render thumbnails with Masonry
    imagesLoaded(element, function() {
      new Masonry(element, {
        itemSelector: '.thumbnail'
      });
    });
  });

  function renderBackground(dateObject) {
    var date = dateObject.getDate();
    var colorList = ["#fffff0", "#f0e68c", "#e6e6fa", "#fff0f5", "#fffacd",
                     "#add8e6", "#f08080", "#e0ffff", "#fafad2", "#90ee90",
                     "#ffb6c1", "#ffa07a", "#20b2aa", "#87cefa", "#ffe4e1"]
    document.body.style.backgroundColor = colorList[date % colorList.length];

    // imageIndex = Math.floor(Math.random() * NUM_IMAGES_TOTAL + 1);
    // src = [IMAGE_DIRECTORY, "/", imageIndex, ".jpg"].join("");

    // document.body.style.background = ["#ffffff url(", src, ") no-repeat center center"].join("");
    // document.body.style.backgroundSize = "cover";
  }

  function renderImages(element, num) {
    // var used = [];
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
		var name = ["Moh-ver", "Mommy", "Moh-ber"]

		var date = dateObject.getDate();
		var hours = dateObject.getHours();

		if (hours >= 3 && hours < 11) {
			var greeting = "Good morning, " + name[date % name.length] + ".";
		} else if (hours >= 11 && hours < 19) {
			var greeting = "Good afternoon, " + name[date % name.length] + ".";
		} else {
			var greeting = "Good evening, " + name[date % name.length] + ".";
		}

		element.innerHTML = greeting;
	}
})(window, document);