$(function () {
    $('header').load('header.html #reuse-head');
    baseScripts();
    Footer();
});

$(window).on('load', function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl, {
            template: `<div class="tooltip" role="tooltip">
                <div class="tooltip-arrow border-right border-left border-secondary"></div>
                <div class="tooltip-inner border border-secondary"></div>
            </div>`})
    })
});

function active(id) {
    document.getElementById(id).className = 'active';
}

function baseScripts() {
    $('head').append(`
		<link rel="icon" href="../media/favicon.ico" />
        
		<!-- <meta name="google-site-verification" content="p3viVcODf5JRawEQyv8vij_vtCmqGnIVAcgdJlMHdZ8" />
		<meta name="google-site-verification" content="xee37Efxw7z9-O5cjvQ02ERSoAA3jwKI9Bu5v5yClbw" /> -->

		<meta name="description" content="Auto-DL: Build Deep Learning models without writing a single line of code.
		Simplify the tedious tasks in Deep Learning by using our platform ">

		
		<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
		integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
		
		<link rel="stylesheet" type="text/css" href="../css/base.css">
	`);

    $('body').append(`
		<script src="https://kit.fontawesome.com/553c78d64a.js" crossorigin="anonymous"></script>

		<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
			integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous">
		</script>

		<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"
			integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous">
		</script>
    `);

}



const footerData = [{
        title: 'Get Started',
        info: ['Why Auto-DL', 'Install', 'Pricing'],
    }, {
        title: 'Support',
        info: ['Docs', 'FAQ', 'Feedback'],
    }, {
        title: 'Company',
        info: ['About', 'Jobs', 'Contact'],
    },
    {
        title: 'Development',
        info: ['Contribute', 'Status', 'Work with Us'],
    }
];

function Footer() {
    let foot = ``;

    foot = `
    <div class='container'>
    <div class='row mt-4'>
        `;

    footerData.forEach(item => {
        // console.log("items", item.info)
        foot += `
        <div class='col'>
            <h4>` + item.title + `</h4>
            <ul class='foot-list'>
            ` +
            item.info.map(x => `<li>` + x + `</li>`).join('') +
            `
            </ul>
        </div>`;
    });


    foot += `
        <div class='col-12 quote mt-4'>
            “Deep learning will revolutionize supply chain automation.” <br />-Dave Waters
        </div>
        <div class='col-12 mt-4'>
            <h4>Follow us On</h4>
            <ul id='follow' class='foot-list'>
                <!-- {/* <li><a href="mailto:info.autold@gmail.com?subject=Auto-DL%20Contact%20from%20Website ">
                        <i class="far fa-envelope"></i></a></li> */} -->
                <li><a href="https://www.linkedin.com/company/autodl/ ">
                        <i class="fab fa-linkedin-in"></i></a>
                </li>
                <li><a href="https://twitter.com/auto_dl/ ">
                        <i class="fab fa-twitter"></i></a>
                </li>
                <li><a href="https://github.com/Auto-DL/ ">
                        <i class="fab fa-github"></i></a>
                </li>
                <li><a
                        href="https://autodl.slack.com/join/shared_invite/zt-qagxiwub-ywRM_oBvvF~F7YNtlBqy_Q#/shared-invite/email">
                        <i class="fab fa-slack"></i></a>
                </li>
            </ul>
        </div>
        <div class='col-12 mt-4'>
            Auto-DL 2021
        </div>
    </div>
</div>
    `;

    document.querySelector('footer').innerHTML = foot;
}