var md = window.markdownit();
var result;


$(window).on('load', async () => {

	// await $.get("https://auto-dl.tech/README.md", (text, status) => {
	$.get("../content/CHANGELOG.md", (text, status) => {
		console.log("Data Status: " + status);
		
		// Get document, or throw exception on error
		try {
			// const data = jsyaml.load(text);
			// console.log(data);
			// Footer(data.footerData);
            result = md.render(text)
            // console.log("data", result)
            $('#change-log').html(result)
		} catch (e) {
			console.log(e);
		}
	});
})