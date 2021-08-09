// import YAML from 'https://cdn.jsdelivr.net/npm/yaml@1.10.2/index.js'
// import YAML from 'js-yaml';
// let fs;// = require('fs')

// require(['fs'], function (f) {
//     //fs is now loaded.
//     fs = f
// });
// import { tableContent } from '../content/pricing.yml';
// import tableContent from '../content/pricing.json';
// console.log("file", tableContent)

// import fs from 'fs'
// const fs = require ('fs');

// import { YAML } from './yamlparser';

// var YAML;
// require(['https://cdn.jsdelivr.net/npm/yaml@1.10.2/browser/dist/index.js'], (yaml) => YAML = yaml);


// var features = []
// var headings = []

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

$(window).on('load', async () => {

    console.log("b4 call");

    await $.get("https://vedant080102.github.io/auto-dl.github.io/content/pricing.yml", (text, status) => {
    // $.get("../content/pricing.yml", (text, status) => {
        console.log("Data Status: " + status);

        // Get document, or throw exception on error
        try {
            const data = jsyaml.load(text);
            console.log(data);
            // headings = data.headings;
            // features = data.tableContent;

            // console.log(headings, features);

            // priceTable();
            priceTable(data.headings, data.tableContent);
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