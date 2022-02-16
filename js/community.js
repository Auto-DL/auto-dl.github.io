$(window).on('load', async () => {

	await $.get("https://vedant080102.github.io/auto-dl.github.io/content/community.yml", (text, status) => {
	// await $.get("../content/community.yml"~, (text, status) => {
		console.log("Data Status: " + status);

		// Get document, or throw exception on error
		try {
			const data = jsyaml.load(text);
			// console.log(data);
			displayComData(data.content);
		} catch (e) {
			console.log(e);
		}
	});
})

function displayComData(doc) {
	var data = ``

	data = `
	<div class="container-fluid container-xl">
		<div class="row row-cols-1 row-cols-md-3">
	`

	doc.forEach(item => {
		data += `
		<div class="card-container col">
			<div class="card ${item.theme}-bg">
				<!-- <div class="card-header"></div> -->
				<!-- <a style='text-decoration: none; color: inherit' href=${item.link}> -->
				<div class="card-body">
					<img class="card-img" src=${item.icon} height="50" alt=${item.title}>
					<div class="card-title">${item.title}</div>
					<!-- <div class="card-text">Meet other Auto-DL users and share your experiences by attending events and meetups.</div> -->
					<a class="btn ${item.theme === 'light' ? 'dark': 'light'}-btn rounded-pill" 
						target="_blank" href=${item.link}>Learn More</a>
				</div>
				<!-- </a> -->
			</div>
		</div>
		`
	});

	data += `
		</div>
	</div>`

	document.getElementById("com-cards").innerHTML = data;
}