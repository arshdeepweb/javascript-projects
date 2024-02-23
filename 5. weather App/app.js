// let url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=delhi&appid=e728150f716295ef12b38b0dfd99b78c";

let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let apiKey = "&appid=e728150f716295ef12b38b0dfd99b78c";

// Step 1 intialize the elements

let searchBtn = document.querySelector("#search-btn")
let temperature = document.querySelector("#temp");
let wind = document.querySelector("#wind");
let humidity = document.querySelector("#humidity");
let long = document.querySelector("#long");
let lat = document.querySelector("#lat");
let weatherDesc = document.querySelector("#weather-description");
let showCity = document.querySelector(".show-city");
let secondContainer = document.querySelector("#mini-container")

// Step 2 fetch and show the weather and all elements 

let checkWeather = async(city) =>{
  let url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=e728150f716295ef12b38b0dfd99b78c`;

  let weatherApi = await fetch(url);
  console.log("response...");
  let response = await weatherApi.json();
  console.log(response)
  temperature.innerText = Math.round(response.main.temp);
  wind.innerText = response.wind.speed;
  humidity.innerText = response.main.humidity;
  long.innerText = Math.floor(response.coord.lon);
  lat.innerText = Math.floor(response.coord.lat);
  weatherDesc.innerText = response.weather[0].description;
  weatherImg = weatherDesc.innerText;

  if(response != ""){
    secondContainer.classList.remove("hide");
  }

  showImg(weatherImg);

  

  // console.log(weatherDesc);
}

// Step 3 click the button and call the checkWeather function 

searchBtn.addEventListener("click", ()=>{
  console.log("hi");

  let inputVal = document.querySelector("#search-weather");
  let inputCity = inputVal.value.toLowerCase();
  showCity.innerText = inputCity;

  checkWeather(inputCity);
})
let d = new Date();
let time = d.getHours();
console.log(time)

// Step 4 show the image to match the weather

let showImg = (img) => {
  let showImage = document.querySelector("#show-image");
  
  if (img === "snow") {
    showImage.src = "media/snow.png";
  } else if (img === "clouds" || img === "smoke" || img === "haze" || img === "dust" || img === "fog" || img === "sand") {
    showImage.src = "media/cloudy.png";
  } else if (img === "rain" || img === "thunderstorm") {
    showImage.src = "media/raining.png";
  } else if (img === "drizzle") {
    showImage.src = "media/storm.png";
  } else {
    if (time > 19 || time < 4) {
      showImage.src = "media/moon.png";
    } else if (time > 4 && time < 18) {
      showImage.src = "media/sun.png";
    }
  }
}
