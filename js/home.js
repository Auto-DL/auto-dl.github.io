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
});

// document.querySelector('header').classList.add("home-head");
$(window).on('load', function () {
	floatySpace();

	// youtubePlayback();
});
/*
function youtubePlayback() {
    var modal = document.getElementById('youtubeModal');
    // var video = document.getElementById('youtubeDemo');

    // if (modal.style.display === 'none') {
    //     video.player.pauseVideo();
    // }

    // 2. This code loads the IFrame Player API code asynchronously.
    var tag = document.createElement('script');


    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    // 3. This function creates an <iframe> (and YouTube player)
    //    after the API code downloads.
    var player;

    function onYouTubeIframeAPIReady() {
        player = new YT.Player('youtubeDemo', {
            events: {
                // 'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });
    }

    // 4. The API will call this function when the video player is ready.
    // function onPlayerReady(event) {
    //     event.target.playVideo();
    // }

    // 5. The API calls this function when the player's state changes.
    //    The function indicates that when playing a video (state=1),
    //    the player should play for six seconds and then stop.
    // var done = false;

    function onPlayerStateChange(event) {
        // if (event.data == YT.PlayerState.PLAYING && !done) {
        //     setTimeout(stopVideo, 6000);
        //     done = true;
        // }
        console.log("olayer state change")
        if (modal.style.display === 'none') {
            player.pauseVideo();
        }
    }

    function stopVideo() {
        player.stopVideo();
    }
}*/


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