// import YAML from 'https://cdn.jsdelivr.net/npm/yaml@1.10.2/index.js'
// import YAML from 'js-yaml';
// let fs;// = require('fs')

// require(['fs'], function (f) {
//     //fs is now loaded.
//     fs = f
// });
// import { tableContent } from '../content/pricing.yml';

// import fs from 'fs'
// const fs = require ('fs');


const features = [{
    title: '&nbsp;',
    details: [{
        name: 'Test Results included',
        available: [false, true, true],
    }, {
        name: 'Additional Test Results',
        available: [false, true, true],
    }, {
        name: 'Users',
        available: [false, true, true],
    }, ],
}, {
    title: '&nbsp;',
    details: [{
        name: 'Cypress Test Runner (open source)',
        available: [false, true, true],
    }],
}, {
    title: 'Smart Orchestration',
    details: [{
        name: 'Parallelization',
        available: [false, true, true],
    }, {
        name: 'Load Balancing',
        available: [false, true, true],
    }, {
        name: 'Run failed specs first',
        available: [false, true, true],
    }, {
        name: 'Cancel run on failure',
        available: [false, true, true],
    }, ],
}, {
    title: 'Debugging',
    details: [{
        name: 'Test Code History',
        available: [false, true, true],
    }, {
        name: 'CI logs',
        available: [false, true, true],
    }, {
        name: 'Screenshots',
        available: [false, true, true],
    }, {
        name: 'Video Playback',
        available: [false, true, true],
    }, ],
}, {
    title: 'Analytics',
    details: [{
        name: 'Run Status',
        available: [false, true, true],
    }, {
        name: 'Run Duration',
        available: [false, true, true],
    }, {
        name: 'Test Suite Size',
        available: [false, true, true],
    }, {
        name: 'Top Failures',
        available: [false, true, true],
    }, {
        name: 'Common Errors',
        available: [false, true, true],
    }, {
        name: 'Slowest Tests',
        available: [false, true, true],
    }, ],
}, {
    title: 'Integrations',
    details: [{
        name: 'GitHub',
        available: [false, true, true],
    }, {
        name: 'Slack',
        available: [false, true, true],
    }, {
        name: 'GitLab',
        available: [false, true, true],
    }, {
        name: 'Bitbucket',
        available: [false, true, true],
    }, {
        name: 'JIRA',
        available: [false, true, true],
    }, {
        name: 'GitHub Enterprise',
        available: [false, true, true],
    }, ],
}, {
    title: 'Flake Management',
    details: [{
        name: 'Test Flake Detection',
        available: [false, true, true],
    }, {
        name: 'Test Flake Analytics',
        available: [false, true, true],
    }, {
        name: 'Test Muting',
        available: [false, true, true],
    }, {
        name: 'Test Burn-in',
        available: [false, true, true],
    }, ],
}, {
    title: 'Team Management',
    details: [{
        name: 'Single Sign-on (SSO)',
        available: [false, true, true],
    }]
}, ]

const headings = [{
    title: 'Free',
    price: '0',
    link: "javascript:void(0)",
    linktxt: 'Sign Up Free'
}, {
    title: 'Premium',
    price: '101',
    link: "javascript:void(0)",
    linktxt: 'Get Started'
}, {
    title: 'Enterprise',
    price: 'Custom',
    link: "javascript:void(0)",
    linktxt: 'Contact Us'
}];

function priceTable() {
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

$(window).on('load', function () {
    priceTable();

    // console.log("file", tableContent)


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

// Get document, or throw exception on error
// try {
//     const doc = yaml.load(readFileSync('../content/pricing.yml', 'utf8'));
//     console.log(doc);
//   } catch (e) {
//     console.log(e);
//   }
});