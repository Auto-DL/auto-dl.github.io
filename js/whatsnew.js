var md = window.markdownit();
var result;

// read the .md file and update the website content
$(window).on('load', async () => {
	await $.get("https://auto-dl.tech/content/CHANGELOG.md", (text, status) => {
	// $.get("../content/CHANGELOG.md", (text, status) => {
		console.log("Data Status: " + status);

		// Get document, or throw exception on error
		try {
            result = md.render(text)
            // console.log("data", result)
            $('#change-log').html(result)
		} catch (e) {
			console.log(e);
		}
	});
})
