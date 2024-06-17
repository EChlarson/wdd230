const cardEl = document.querySelector("#cards");
const conLi = 'https://echlarson.github.io/wdd230/chamber/data/members.json';

async function getCont() {
    const response = await fetch(conLi);
    const data = await response.json();
    console.log(data);
}

getCont();