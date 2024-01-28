function refreshWeather(response) {
  let temperatureTodayElement = document.querySelector(
    "#weather-temperature-today-value"
  ); //Find temperature of today.
  let temperatureToday = response.data.temperature.current; //Filter for current temperature in apiUrl content.
  let cityNameElement = document.querySelector("#city-name"); //Find what needs to be replaced (here h1) with the found apiUrl content (saver than takink the Search Input because of missspelling).
  cityNameElement.innerHTML = response.data.city; //Take h1 and replace it with apiUrl content in HTML (innerHTML).
  temperatureTodayElement.innerHTML = Math.round(temperatureToday); //Take temperature of today in HTML and replace it with the rounded value of the api.
}

function searchCity(city) {
  //Make API Call and update interface.
  let apiKey = "fo1b118b4f76384a070dd0e1b5et80a0"; //Get apiKey from application page.
  let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`; //Adapt apiUrl to your needs. City from Function handleSearchSubmit and key from Variable apiKey.
  axios.get(apiURL).then(refreshWeather); //Gets data via axios with Variable apiUrl and triggers Function refreshWeather.
}

function handleSearchSubmit(event) {
  //Fucntion to catch Search Input and replace h1 (City name).
  event.preventDefault(); //Prevent page from relaoding.
  let searchInput = document.querySelector("#search-field"); //Find Search Input.
  searchCity(searchInput.value); //Triggers Function searchCity.
}
let searchFormElement = document.querySelector(".search-form"); //Find whole Search Form.
searchFormElement.addEventListener("submit", handleSearchSubmit); //Take action if someone writes a name into the Search Input and hits Submit; Triggers function handleSearchSubmit.
