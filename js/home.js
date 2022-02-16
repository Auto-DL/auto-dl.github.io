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

$(window).on('load', () => {
	var head = document.querySelector('.home-head');

	// if (head != null && head.querySelector('.navbar') != null) {
	head.querySelector('.navbar').classList.remove('fixed-top');
	// }

	// floaty space animated background
	floatySpace()
})

$(window).on('load', async () => {

	await $.get("https://vedant080102.github.io/auto-dl.github.io/content/home.yml", (text, status) => {
	// await $.get("../content/home.yml", (text, status) => {
		console.log("Data Status: " + status);

		// Get document, or throw exception on error
		try {
			const data = jsyaml.load(text);
			// console.log(data);
			homePage(data);
		} catch (e) {
			console.log(e);
		}
	});
  
	// bootstrap tooltips & popovers
	try {
		var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
		var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
			return new bootstrap.Tooltip(tooltipTriggerEl, {
				template: `<div class="tooltip" role="tooltip">
					<div class="tooltip-arrow border-right border-left border-secondary"></div>
					<div class="tooltip-inner border border-secondary"></div>
				</div>`
			})
		});

		var popoverTriggerList = [].slice.call(document.querySelectorAll('.interface-tooltip'))
		var popoverList = popoverTriggerList.map(function (ele) {
			return new bootstrap.Popover(ele, {})
		});
		console.log("Bootstrap popover loaded");
	} catch (error) {
		console.log("Bootstrap Error:", error)
	}
});

// document.querySelector('header').classList.add("home-head");
// $(window).on('load', () => floatySpace());


// adding the youtube video in the home page
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

function homePage(doc) {
	// adding content to all sections
	// LATEST VERSION
	var data;

	data = `
	<h3 class='mb-5'>${doc.latestDetails.title}</h3>
	<p>${doc.latestDetails.desc}</p>
	`

	// document.getElementById("latest-version-details").innerHTML = data

	$("#latest-version-details").append(stringToHTML(data))


	// DEMO VIDEO
	var dem = `
	<span class="flex demo-vid" data-bs-toggle="modal" data-bs-target="#youtubeModal">
		<img class="img-fluid" src=${doc.demo.image} alt="DEMO VIDEO" height="300" width="800">
		<a class="pe-auto btn rounded-circle flex" id="yt-btn"><i class="fas fa-play"></i></a>
	</span>`

	$("#demo-video").html("")
	$("#demo-video").append(stringToHTML(dem));

	// INTERFACE
	var intr = `
	<img class="img-fluid" src="${doc.interface.image}" alt="Interface" height="300" width="800">

	<!-- popovers -->
	${
		doc.interface.info.map(x => `
			<a id="${x.pos}" class="interface-tooltip" tabindex="0" class="btn btn-lg btn-danger" role="button"
				data-bs-toggle="popover" data-bs-placement="top" data-bs-trigger="focus" title="${x.title}"
				data-bs-content="${x.desc}">
				<i class="fas fa-info-circle"></i>
			</a>
		`).join("")
	}`

	$("#interface").append(stringToHTML(intr));

	// FEATURES
	var feat = `
	<div class="feat flex row row-cols-1 row-cols-sm-2 row-cols-md-3 gy-5 mt-2">
		${
			doc.features.map(item => `
				<div class="col">
					${item.icon}
					<h4>${item.title}</h4>
					<p>${item.desc}</p>
				</div>
			`).join("")
		}
	</div>`

	$("#home-features").append(stringToHTML(feat));

	// GITHUB
	var git = `
	<div class="row row-cols-1 row-cols-md-1 row-cols-lg-3">
		${
			doc.githubSection.map(item => `
			<div class="col">
				${item.icon}
				<h4>${item.title}</h4>
				<p>${item.content}</p>
			</div>
			`).join("")
		}
		<div class="col-12">
			<h4>repo stars........</h4>
		</div>
	</div>`
	$("#github-section").append(stringToHTML(git));


	// extra section
	var xtra = `
	<h3 class='mb-5'>${doc.undecidedSection.title}</h3>
	<p>${doc.undecidedSection.content}</p>
	`
	$("#extra-section").append(stringToHTML(xtra));

	// TESTIMONIAL
	var carousel = ``
	var buttons = ``

	doc.testimonials.forEach((item, index) => {
		buttons += `
		<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="${index}" class="${index === 0 ? "active" : ''}" ${index === 0 ? "aria-current='true'" : ''} aria-label="Slide ${index}"></button>
		`
		carousel += `
			<div class="carousel-item ${index === 0 ? "active" : ''}">
				<div class="carousel-caption">
					<div class='card'>
						<!-- <h5 class="qot">"</h5>  -->
						<p class='testimonial'>${item.comment}
							<br /><br />-${item.author}.
						</p>
					</div>
				</div>
			</div>
		`
		// console.log("hi", item)
	})

	$("#carousel-inner").append(stringToHTML(carousel));
	$("#carousel-buttons").append(stringToHTML(buttons));
}