let url = "https://api.openweathermap.org/data/2.5/weather?q=";
let apiKey = "894e545dc841661eee9fb0161934cc43";

const body = document.querySelector("body");
const searchInput = document.querySelector("#searchInput");
const searchBtn = document.querySelector("#searchBtn");
const content = document.querySelector("#content");

searchBtn.addEventListener("click", function(){
    let searchTerm = searchInput.value;
    console.log(searchTerm);
    sendRequest(searchTerm);
    searchInput.value = "";
})

const sendRequest = (newCity) => {
    content.classList.add("content");
    let query = `${url}${newCity}&appid=${apiKey}&units=metric&lang=tr`;
    fetch(query)
    .then((response) => response.json())
    .then((data) => {
    console.log(data)
    // console.log(data.name)
    const city = document.querySelector("#city");
    city.innerHTML = `${data.name},${data.sys.country}`

    const temp = document.querySelector("#temp");
    temp.innerHTML = `${(data.main.temp).toFixed(0)}°C` 
    
    const desc = document.querySelector("#desc");
    desc.innerHTML = `${(data.weather[0].description.toUpperCase())}`

    const minmax = document.querySelector("#minmax");
    minmax.innerHTML = `${(data.main.temp_min).toFixed(0)}°C / ${(data.main.temp_max).toFixed(0)}°C`;

}) 
}