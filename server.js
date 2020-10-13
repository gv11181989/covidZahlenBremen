const cheerio = require('cheerio'),
 axios = require('axios'),
 url = 'https://www.rki.de/DE/Content/InfAZ/N/Neuartiges_Coronavirus/Fallzahlen.html';
      
axios.get(url)
    .then((response) => {
// Load the HTML code as a string, which returns a Cheerio instance
const $ = cheerio.load(response.data)

// We can use the same API as jQuery to get the desired result
//const txt = $('#wrapperOuter').text()
const table = $("body").find("#wrapperOuter > #wrapperInner > #wrapperDivisions > #wrapperDivisions-2 > #wrapperContent > #content > #main > .text >  table > tbody > .even");
console.log(table)
// Output: "This is an example paragraph"
}).catch(function (e) {
  console.log(e);
});