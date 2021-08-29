$(window).on('load', async () => {

	// await $.get("https://vedant080102.github.io/auto-dl.github.io/content/community.yml", (text, status) => {
	await $.get("../content/community.yml", (text, status) => {
		console.log("Data Status: " + status);
		
		// Get document, or throw exception on error
		try {
			const data = jsyaml.load(text);
			console.log(data);
			// Footer(data.footerData);
		} catch (e) {
			console.log(e);
		}
	});
})

// function displayComData(doc) {
//     var data = ``
// }