const url =
 "https://api.open-meteo.com/v1/forecast?latitude=30.27353&longitude=-91.89928&current=temperature_2m,wind_speed_10m&temperature_unit=fahrenheit";
 const button = document.getElementById("check-btn");
 const weatherArea = document.getElementById("weather");

 async function getWeather () {
    const response = await fetch(url)
    const data = await response.json();
    console.log(data);
}

button.addEventListener("click", getWeather);