var md = window.markdownit();
var result;


$(window).on('load', async () => {
	await $.get("https://vedant080102.github.io/auto-dl.github.io/content/CHANGELOG.md", (text, status) => {
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