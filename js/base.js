$(function () {
	baseScripts();

	$('header').load('header.html #reuse-head');

	// var fo = document.createElement('DIV')
	// // fo.appendChild(data); 
	// document.querySelector('footer').appendChild(fo);

	$('footer').load('header.html #footer');
});

$(window).on('load', async () => {

	await $.get("https://vedant080102.github.io/auto-dl.github.io/content/base.yml", (text, status) => {
		// $.get("../content/base.yml", (text, status) => {
		console.log("b4 call")
		console.log("Data Status: " + status);
		
		// Get document, or throw exception on error
		try {
			const data = jsyaml.load(text);
			console.log(data);
			Footer(data.footerData);
		} catch (e) {
			console.log(e);
		}
		console.log("after call")
	});

	try {
		/* Play animation on click - second click play animation forward */
		var icon8 = document.querySelector('.anim-icon-menu-004');
	
		var animation8 = bodymovin.loadAnimation({
			container: icon8,
			renderer: 'svg',
			loop: false,
			autoplay: false,
			path: "media/menuV4.json"
		});
		animation8.setSpeed(1.4);
	
	
		var direction8 = 1;
		icon8.addEventListener('click', (e) => {
			animation8.setDirection(direction8);
			animation8.play();
			direction8 = -direction8;
		});
	} catch (error) {
		console.log("Bodymovin error:", error)
	}

});

function baseScripts() {
	$('head').append(`
		<link rel="icon" href="media/favicon.ico" />
        
		<!-- <meta name="google-site-verification" content="p3viVcODf5JRawEQyv8vij_vtCmqGnIVAcgdJlMHdZ8" />
		<meta name="google-site-verification" content="xee37Efxw7z9-O5cjvQ02ERSoAA3jwKI9Bu5v5yClbw" /> -->

		<meta name="description" content="Auto-DL: Build Deep Learning models without writing a single line of code.
		Simplify the tedious tasks in Deep Learning by using our platform ">

		
		<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
		integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
		
		<link rel="stylesheet" type="text/css" href="css/base.css">

		<script src="https://cdnjs.cloudflare.com/ajax/libs/js-yaml/4.1.0/js-yaml.min.js" integrity="sha512-CSBhVREyzHAjAFfBlIBakjoRUKp5h7VSweP0InR/pAJyptH7peuhCsqAI/snV+TwZmXZqoUklpXp6R6wMnYf5Q==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
		`);

	$('body').append(`
		
		<script src="https://kit.fontawesome.com/553c78d64a.js" crossorigin="anonymous"></script>

		<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
			integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous">
		</script>

		<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"
			integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous">
		</script>

		<script src='https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.6.4/lottie_svg.min.js'></script>
    `);

}


function Footer(footerData) {
	let foot = ``;

	footerData.forEach(item => {
		// console.log("items", item.info)
		foot += `
        <div class='col'>
            <h4>` + item.title + `</h4>
            <ul class='foot-list'>
            ` +
			item.info.map(x => `<li><a href='${x.link}'>${x.name}</a></li>`).join('') +
			`
            </ul>
        </div>`;
	});

	document.getElementById('footer-nav').innerHTML = (foot);
}