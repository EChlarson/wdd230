const chart = document.querySelector("#chart");
const list = 'https://echlarson.github.io/wdd230/scootes/data/vehicles.json';

async function getCont() {
    try {
        const response = await fetch(list);
        const data = await response.json();
        console.log(data);
        
        // Access the correct array
        let dataCont = data['vehicles'][0]['vehicle'];

        // Clear existing rows
        chart.innerHTML = '';

        dataCont.forEach(displayChart);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function displayChart(data) {
    // Build <tr>
    let tr = document.createElement('tr');
    let rentalType = document.createElement('td');
    let maxPersons = document.createElement('td');
    let resHalf = document.createElement('td');
    let resFull = document.createElement('td');
    let walkHalf = document.createElement('td');
    let walkFull = document.createElement('td');

    rentalType.textContent = data.RentalType;
    maxPersons.textContent = data.MaxPersons;
    resHalf.textContent = data.ReservationHalf;
    resFull.textContent = data.ReservationFull;
    walkHalf.textContent = data.WalkHalf;
    walkFull.textContent = data.WalkFull;

    tr.appendChild(rentalType);
    tr.appendChild(maxPersons);
    tr.appendChild(resHalf);
    tr.appendChild(resFull);
    tr.appendChild(walkHalf);
    tr.appendChild(walkFull);

    chart.appendChild(tr);
}

getCont();
