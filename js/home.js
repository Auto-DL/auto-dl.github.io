let firstTime = true;

document.addEventListener("scroll", function () {
	if (document.querySelector(".home-head").querySelector('.navbar') != null) {
		const navbar = document.querySelector(".home-head").querySelector('.navbar');
		// const headheight = document.getElementsByClassName('App-header').clientHeight;
		const navbarHeight = window.screen.height - 70;

		const distanceFromTop = Math.abs(
			document.body.getBoundingClientRect().top
		);

		(distanceFromTop >= navbarHeight) ? navbar.classList.add("fixed-top"): navbar.classList.remove("fixed-top");
	}

	// newsletter-modal
	if (firstTime === true && document.querySelector("#newsletter-modal") != null) {
		var newsModal = document.getElementById('newsletter-modal');
		const minHeight = 1200;

		const distFromTop = Math.abs(
			document.body.getBoundingClientRect().top
		);

		if (distFromTop >= minHeight) {
			var myModal = new bootstrap.Modal(newsModal, {});
			myModal.show(newsModal);
			firstTime = false;
		}
	}
});

$(window).on('load', function () {
	var head = document.querySelector('.home-head');

	// if (head != null && head.querySelector('.navbar') != null) {
	head.querySelector('.navbar').classList.remove('fixed-top');
	// }
	floatySpace()
});

// document.querySelector('header').classList.add("home-head");
// $(window).on('load', () => floatySpace());



$(document).ready(function () {
	// Gets the video src from the data-src on each button
	var $videoSrc = 'https://www.youtube-nocookie.com/embed/6uEt88vQxQU';
	/*$("#yt-btn").click(function () {
		// $videoSrc = $(this).attr("data-src");
		console.log("button clicked" + $videoSrc);
	});*/

	// when the modal is opened autoplay it
	$("#youtubeModal").on("shown.bs.modal", function (e) {
		// console.log("modal opened" + $videoSrc);
		// set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
		$("#youtubeDemo").attr(
			"src",
			$videoSrc + "?autoplay=1&showinfo=0&modestbranding=1&rel=0&mute=1"
		);
	});

	// stop playing the youtube video when I close the modal
	$("#youtubeModal").on("hide.bs.modal", function (e) {
		// a poor man's stop video
		$("#youtubeDemo").attr("src", $videoSrc);
	});

	// document ready
});