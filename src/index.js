function handleSearchSubmit(event) {
  //Fucntion to catch Search Input and replace h1 (City name).
  event.preventDefault(); //Prevent page from relaoding.
  let searchInput = document.querySelector("#search-field"); //Find Search Input.
  let cityNameElement = document.querySelector("#city-name"); //Find what needs to be replaced (here h1) with the found Search Input.
  cityNameElement.innerHTML = searchInput.value; //Take h1 and replace it with Search Input in HTML (innerHTML).
}
let searchFormElement = document.querySelector(".search-form"); //Find whole Search Form.
searchFormElement.addEventListener("submit", handleSearchSubmit); //Take action if someone writes a name into the Search Input and hits Submit; Triggers function handleSearchSubmit.
