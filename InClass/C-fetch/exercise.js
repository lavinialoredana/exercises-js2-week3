/*
================

Create an HTML file that uses this javascript file.
The HTML file should contain a form with 2 inputs: (latitude and longitude), and a button with the text GET.
When you click in the button, you should use fetch function to get information from the URL https://fcc-weather-api.glitch.me/api/current?lat=35&lon=160 with 
user latitude and longitude.
When you get the response from the server, print the current temperature in an <h3> marker.


================
*/
// You can construct the URL to fetch from like this. The lat and lon values will come from the input value.

var getButton = document.getElementById("saveButton");
getButton.addEventListener("click", getWeatherData);

const getWeatherData = (event) => {
  var latitudeInput = document.querySelector(".latitude");
  var latitude = latitudeInput.value;

  var longitudeInput = document.querySelector(".longitude");
  var longitude = longitudeInput.value;

  fetchWeatherData(latitude, longitude);
  event.preventDefault();
};

const fetchWeatherData = (latitude, longitude) => {
  var url = generateWeatherUrl(latitude, longitude);

  fetch(url)
    .then((resp) => resp.json())

    .then(function (dataJson) {
      var temp = dataJson.main.temp;
      showTemperature(temp);
    });
};

const generateWeatherUrl = (latitude, longitude) => {
  var url = "https://fcc-weather-api.glitch.me/api/current";
  url += "?lat" + latitude;
  url += "?lon" + longitude;
  return url;
};

const showTemperature = (temperature) => {
  var mainDiv = document.querySelector("#main");
  var tempHeader = document.createElement("h3");
  mainDiv.appendChild(tempHeader);
  tempHeader.innerText = temperature;
};
