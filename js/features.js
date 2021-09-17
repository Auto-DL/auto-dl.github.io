$(window).on('load', async () => {

	console.log("b4 call")
	// await $.get("../content/features.yml", (text, status) => {
	await $.get("https://vedant080102.github.io/auto-dl.github.io/content/features.yml", (text, status) => {
		console.log("Data Status: " + status);

		// Get document, or throw exception on error
		try {
			const data = jsyaml.load(text);
			console.log(data.features);
			displayFeatures(data.features);
		} catch (e) {
			console.log(e);
		}
		console.log("call done")
	});
});

function displayFeatures(doc) {
	let ele = document.getElementById('print-features');

	let data = ``;

	doc.forEach((item, index) => {
		data += `
		<!-- ${index}. ${item.title} -->
			<section class="main-section ${item.theme}-bg">
				<div class="feature-details">
					<div class="card ">
						<div class="container">
							<div class="main-row row gx-5 gy-4">
								<div class="feature-img col-12 col-md-6">
									<img class="img-fluid" alt='feat' height="300" src="${item.media}"/>
								</div>
								<div class="col-12 col-md-6">
									<h2 class='feature-title'>${item.title}</h2>
									<div class="inner-content">
									${item.info.map((x, i) => 
										`<div class="lists">
											<div>
												<span class="point-title">${x.title}</span>
												<p>${x.details}</p>
											</div>
										</div>
										`).join("")}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		`
	});

	ele.innerHTML = data;
}