const chart = document.querySelector("#chart");
const list = 'data/vehicle.json';

async function getCont() {
    const response = await fetch(contLi);
    const data = await response.json();
    //console.log(data);
    let dataCont = data ['members'];
    dataCont.forEach(displayGrid);
    dataCont.forEach(displayList);
}