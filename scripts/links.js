//Declare Variables
const baseURL = 'https://echlarson.github.io/wdd230/';
const linksURL = 'https://echlarson.github.io/wdd230/data/links.json';

//async function to fetch data from the JSON source url//
async function getLinks(linksURL) {
    const response = await fetch(linksURL);
    const data = await response.json(linksURL);
    console.log(data.links);
  }
  
  getLinks(linksURL);