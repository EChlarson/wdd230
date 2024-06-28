// select all of the HTML elements that will need to be manipulated and assign them to const variables
const currentTemp = document.querySelector('#temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#desc');
const wSpeed= document.querySelector('#wSpeed');
const windchill = document.querySelector('#windchill');
const nullstr= "Not Applicable";
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

// Current Weather
//API call
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=39.73&lon=-90.22&units=imperial&appid=d2d7b88d49cdd622f123e90a8f4ec735';
//39.73371637386022, -90.22883862165104

//asynchronous function named "apiFetch()" that uses a try block to handle errors
async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      displayResults(data);
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

apiFetch();

//output to the given HTML document
function displayResults(data) {
  //current temp
  let numData = `${data.main.temp}`;
  let numDecimals = parseFloat(numData).toFixed(0);
  currentTemp.textContent = numDecimals + '°F';
  //description
  let desc = data.weather[0].description;
  captionDesc.textContent = `${desc}`;
  //weather icon
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', 'Weather Icon');
  //wind speed
  let wind = data.wind.speed;
  wSpeed.textContent = 'Wind Speed: ' + wind + 'mph';
  //windchill
    if ((currentTemp<=50)&(wSpeed>=3)) {
      var wChill= Math.round(35.74 + (0.6215 * currentTemp))-(35.75 * Math.pow(wSpeed,0.16)) + (0.4275*currentTemp*Math.pow(wSpeed,0.16));
      windchill.textContent = "Wind Chill: " + wChill;
    } else {
      windchill.textContent = "Wind Chill: " + nullstr;
    }
}


//forecast
const urlF = 'https://api.openweathermap.org/data/2.5/forecast?lat=39.73&lon=-90.22&units=imperial&appid=d2d7b88d49cdd622f123e90a8f4ec735';
const fDiv = document.querySelector('#fData');
  // API Pull on line 11 const url

async function forecastFetch() {
  try {
    const response = await fetch(urlF);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      displayforecast(data);
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

forecastFetch();

const displayforecast = (data) => {

  for (let aNum=3; aNum<30; aNum=aNum+8) {
    if (aNum < 30) {
      //Build div
      let div = document.createElement('div');
      let tempDate = document.createElement('h3');
      let wIcon = document.createElement('img');
      let fTemp = document.createElement('p');  

      //Day of the Week
      let d = new Date(data.list[aNum].dt * 1000);
      let day = weekday[d.getDay()];
      tempDate.textContent = day;

      fullDate = `${data.list[aNum].dt_txt}`;
      tempDN = fullDate.substring(8,10);

      tempDate.textContent = day + ' ' + tempDN;
      
      //Icon
      const iconsrc = `https://openweathermap.org/img/w/${data.list[aNum].weather[0].icon}.png`;
      wIcon.setAttribute('src', iconsrc);
      wIcon.setAttribute('alt', 'Weather Icon');
      
      //Temp
      fTemp.textContent = `12pm: ${data.list[aNum].main.temp}°F`;

      div.appendChild(tempDate);
      div.appendChild(wIcon);
      div.appendChild(fTemp);
      fDiv.appendChild(div);
    }
  }
}
