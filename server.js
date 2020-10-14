const cheerio = require('cheerio'),
 axios = require('axios'),
 url = 'https://www.rki.de/DE/Content/InfAZ/N/Neuartiges_Coronavirus/Fallzahlen.html';
      
axios.get(url)
    .then((response) => {
// Load the HTML code as a string, which returns a Cheerio instance
const $ = cheerio.load(response.data)


const table = $("table > tbody > tr").eq(4).find("td").eq(4); 
console.log(table.text())

}).catch(function (e) {
  console.log(e);
});