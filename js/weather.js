const API_KEY = "214214204sdfdfsdff3r3e2";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longtitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}appid=${API_KEY}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}
function onGeoError() {
  alert("can't find you. no weather for you!");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
