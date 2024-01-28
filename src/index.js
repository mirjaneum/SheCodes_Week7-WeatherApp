function refreshWeather(response) {
  //Function to refresh Weather, Humidity, Wind and City Name.
  let temperatureTodayElement = document.querySelector(
    "#weather-temperature-today-value"
  ); //Find temperature of today.
  let temperatureToday = response.data.temperature.current; //Filter for current temperature in apiUrl content.
  temperatureTodayElement.innerHTML = Math.round(temperatureToday); //Take temperature of today in HTML and replace it with the rounded value of the api.

  let cityNameElement = document.querySelector("#city-name"); //Find what needs to be replaced (here h1) with the found apiUrl content (saver than takink the Search Input because of missspelling).
  cityNameElement.innerHTML = response.data.city; //Take h1 and replace it with apiUrl content in HTML (innerHTML).

  let humidityTodayElement = document.querySelector("#humidity-today"); //Find humidity of today.
  humidityTodayElement.innerHTML = `${Math.round(
    response.data.temperature.humidity
  )}%`; //Filter for humidity and take humidity of today in HTML and replace it with the rounded value of the api.

  let windTodayElement = document.querySelector("#wind-today"); //Find wind of today.
  windTodayElement.innerHTML = `${Math.round(response.data.wind.speed)}km/h`; //Take wind in HTML and replace it with the rounded value of the api.

  let timeElement = document.querySelector("#time"); //Find time of today.
  let date = new Date(response.data.time * 1000); //get timestamp.
  timeElement.innerHTML = formatDate(date); //Replace the timeElment with the values of the Function formatDate.

  let conditionElement = document.querySelector("#condition"); //Find condition of today.
  conditionElement.innerHTML = response.data.condition.description; //Filter for current condition in apiUrl content and replace the original value with it.
  /*
   */
}

function searchCity(city) {
  //Function to make API Call and update interface.
  let apiKey = "fo1b118b4f76384a070dd0e1b5et80a0"; //Get apiKey from application page.
  let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`; //Adapt apiUrl to your needs. City from Function handleSearchSubmit and key from Variable apiKey.
  axios.get(apiURL).then(refreshWeather); //Gets data via axios with Variable apiUrl and triggers Function refreshWeather.
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  /*
if (minutes< 10) {
    minutes = `0${minutes()}`;

}
if (hours < 10) {
  hours = `0${hours()}`;
}
*/
  return `${day()} ${hours()}:${minutes()}`;
}
function handleSearchSubmit(event) {
  //Fucntion to catch Search Input and replace h1 (City name).
  event.preventDefault(); //Prevent page from relaoding.
  let searchInput = document.querySelector("#search-field"); //Find Search Input.
  searchCity(searchInput.value); //Triggers Function searchCity.
}
let searchFormElement = document.querySelector(".search-form"); //Find whole Search Form.
searchFormElement.addEventListener("submit", handleSearchSubmit); //Take action if someone writes a name into the Search Input and hits Submit; Triggers function handleSearchSubmit.

searchCity("Guttet-Feschel");
