function priceTable(headings, features) {
    let ele = document.getElementById('price-table');
    let data = `
    <thead>
        <tr>
            <th scope="col"></th>
    `

    data += headings.map(x => `
            <th class=${x.title + '-table'} scope="col">
                <h4 class='table-head'>${x.title}</h4>
                ${x.price === 'Custom' ? `<p>Custom</p>` : `<p>&#8377;${x.price}/month</p>`}
                <a class='btn rounded-pill plan-btn' href=${x.link}>${x.linktxt}</a>
            </th>
            `).join("")

    data += `
        </tr>
    </thead><tbody>
    `;

    features.forEach(item => {
        data += `
        <tr class="table-secondary">
            <td><strong>${item.title}</strong></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        `;

        // printing the rows and the columns
        data += item.details.map(detail => `
        <tr>
            <td>${detail.name}</td>
            <td>${ detail.available[0] ? '<i class="fas fa-check"></i>' : '-'}</td>        
            <td>${ detail.available[1] ? '<i class="fas fa-check"></i>' : '-'}</td>        
            <td>${ detail.available[2] ? '<i class="fas fa-check"></i>' : '-'}</td>        
        </tr>
        `).join("")
    })

    data += `</tbody>`;

    ele.innerHTML = data;
}

function planCards(doc) {
    data = `<div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3 justify-content-center gy-5 mx-2 mx-md-5 px-1 px-md-5 mb-5">`

    doc.forEach(item => {
        data += `
        <div class="card-container col">
			<div class="card ${item.title.toLowerCase()}-card">
				<div class="card-header">
					<img class="head-img" src=${item.icon} height="30" alt="Free-Plan">
				</div>
				<div class="card-body">
					<div class="card-title">${item.title.toUpperCase()}</div>
					<div class="card-text">
						<p class="invisible">Starting At</p>
						<div class='plan-price'>
							<span class='symbol'>&#8377;</span>
							<span class='value'>${item.price}</span>
							<span class='period'>/month</span>
						</div>
						<ul class="list-group list-group-flush">
							<li class="list-group-item d-flex justify-content-between">
								<span>Users</span>
								<strong>${item.users}</strong>
							</li>
							<li class="list-group-item d-flex justify-content-between">
								<span>Test Results</span>
								<strong>${item.testResults}</strong>
							</li>
						</ul>
						<a class="btn plan-btn my-4 rounded-pill" href=${item.link}>${item.linktxt}</a>
						<ul class="check-bullet list-unstyled text-start">
							<h6>Everything you get with Free:</h6>
                            ${item.perks.map(x => `
                                <li class="list-group-item border-0">${x}</li>
                            `).join("")}
						</ul>
					</div>
				</div>
			</div>
		</div>
        `        
    })

    data += `</div>`

    document.getElementById("pricing-cards").innerHTML = data;
}


$(window).on('load', async () => {

    console.log("b4 call");

    await $.get("https://vedant080102.github.io/auto-dl.github.io/content/pricing.yml", (text, status) => {
    // await $.get("../content/pricing.yml", (text, status) => {
        console.log("Data Status: " + status);

        // Get document, or throw exception on error
        try {
            const data = jsyaml.load(text);
            console.log(data);

            planCards(data.plans)
            priceTable(data.plans, data.tableContent);
        } catch (e) {
            console.log(e);
        }
    });

    console.log("after call");


    // var fi = new File([Text], '../content/pricing.yml', {type: "text/yaml"});
    // var reader = new FileReader();
    // var fileToRead = '../content/pricing.yml';

    // // attach event, that will be fired, when read is end
    // reader.onload = function (event) {
    //     // reader.result contains the contents of blob as a typed array
    //     // we insert content of file in DOM here
    //     console.log("file", event.target.result)
    // }

    // // start reading a loaded file
    // reader.readAsText(fi);

    /*
        fs.open('../content/pricing.yml', 'r', (err, fd) => {
            if (err) {
                if (err.code === 'ENOENT') {
                    console.error('myfile does not exist');
                    return;
                }

                throw err;
            }

            console.log(fd);
        });
    */
});