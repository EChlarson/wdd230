const chart = document.querySelector("#chart");
const list = 'https://echlarson.github.io/wdd230/scootes/data/vehicles.json';

async function getCont() {
    const response = await fetch(list);
    const data = await response.json();
    console.log(data);
    let dataCont = data ['vehicles'];
    dataCont.forEach(displayChart);
}

function displayChart(data) {

    for (let aNum=0; aNum<7; aNum++) {
        //Build <tr>
        let tr = document.createElement('tr');
        let rentalType = document.createElement('td');
        let maxPersons = document.createElement('td');
        let resHalf = document.createElement('td');
        let resFull = document.createElement('td');
        let walkHalf = document.createElement('td');
        let walkFull = document.createElement('td');

        rentalType.textContent = `${data.vehicle[aNum].Rental-Type}`;
        maxPersons.textContent = `${data.vehicle[aNum].Rental-Type}`;
    
}}

getCont();