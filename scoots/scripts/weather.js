// select all of the HTML elements that will need to be manipulated and assign them to const variables
const curTemp = document.querySelector("#curTemp");
const curHumidity = document.querySelector("#curHumidity");
const curDesc = document.querySelector("#curDesc");
const curIcon = document.querySelector("#curIcon");

const futTemp = document.querySelector("#futTemp");
const futHumidity = document.querySelector("#futHumidity");
const futDesc = document.querySelector("#futDesc");
const futIcon = document.querySelector("#futIcon");

// Current Weather

//API call for 20.42326772526796, -86.92885229806231
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=20.42&lon=-86.93&units=imperial&appid=d2d7b88d49cdd622f123e90a8f4ec735';
//asynchronous function named "apiFetch()" that uses a try block to handle errors
async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // For debugging purposes
        displayResults(data); // Call function to display results on the HTML
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error); // Log any errors to the console
    }
  }

//output to the given HTML document
function displayResults(data) {
    //current temp
    let numData = `${data.main.temp}`;
    let numDecimals = parseFloat(numData).toFixed(0);
    curTemp.textContent = numDecimals + '°F';
    //humidity
    curHumidity.textContent = `${data.main.humidity}`;
    //description
    curDesc.textContent = `${data.weather[0].description}`;
    //weather icon
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    curIcon.setAttribute('src', iconsrc);
    curIcon.setAttribute('alt', 'Weather Icon');
}


//Tomorrows Forcast

//API call for 20.42326772526796, -86.92885229806231
const urlF = 'https://api.openweathermap.org/data/2.5/forecast?lat=20.42&lon=-86.93&units=imperial&appid=d2d7b88d49cdd622f123e90a8f4ec735';
//asynchronous function that uses a try block to handle errors
async function apiFutFetch() {
    try {
      const response = await fetch(urlF);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // For debugging purposes
        displayFutResults(data); // Call function to display results on the HTML
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error); // Log any errors to the console
    }
  }

function displayFutResults(data) {
    //current temp
    let numData = `${data.list[4].main.temp}`;
    let numDecimals = parseFloat(numData).toFixed(0);
    futTemp.textContent = numDecimals + '°F';
    //humidity
    futHumidity.textContent = `${data.list[4].main.humidity}`;
    //description
    futDesc.textContent = `${data.list[4].weather[0].description }`;
    //weather icon
    const iconsrc = `https://openweathermap.org/img/w/${data.list[4].weather[0].icon}.png`;
    futIcon.setAttribute('src', iconsrc);
    futIcon.setAttribute('alt', 'Weather Icon');
}

// Calling the API fetch functions
apiFetch();
apiFutFetch();
