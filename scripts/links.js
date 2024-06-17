const listEl = document.querySelector("#weeks");
const baseURL = "https://echlarson.github.io/wdd230/";
const linksURL = "https://echlarson.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    
    weeks= Object.keys(data);
    displayLinks(data,weeks);
}

function displayLinks(data,weeks) {
    weeks.forEach(week => {
        //Build Element listCon/List Content
        let listCon = document.createElement("li");
        //Build li
        listCon.textContent = week + ": ";
        

        data[week].forEach(links => {
            //Build Element linkCon/Link Content
            let linkCon = document.createElement("a");
            //Build a
            linkCon.setAttribute("href", lesson.url);
            linkCon.textContent = lesson.title + " | ";
            //create loop
            listCon.appendChild(linkCon);
        });
        

        listEl.appendChild(listCon);
    });
}

getLinks();