const url =
 "https://api.open-meteo.com/v1/forecast?latitude=30.27353&longitude=-91.89928&hourly=temperature_2m&current=temperature_2m,rain,is_day,wind_speed_10m,weather_code&timezone=America%2FChicago&wind_speed_unit=mph&temperature_unit=fahrenheit&precipitation_unit=inch";
 const button = document.getElementById("check-btn");
 const weatherArea = document.getElementById("weather");

 async function getWeather () {
    weatherArea.textContent = "";
    weatherArea.className = "card bg-dark text-light p-4 w-50 m-auto"
    const response = await fetch(url)
    const data = await response.json();
    console.log(data);

    //icon
    const icon = document.createElement("p");
    icon.className = "fs-4";
    icon.textContent = getIcon(data.current.weather_code);

    weatherArea.appendChild(icon);

    //temp
    const temp = document.createElement("p");
    temp.className = "fs-4";
    temp.textContent = "Temperature: " + data.current.temperature_2m + " " + data.current_units.temperature_2m;

    weatherArea.appendChild(temp);

    //wind
    const wind = document.createElement("p");
    wind.className = "fs-4";
    wind.textContent = "Wind Speed: " + data.current.wind_speed_10m + " " + data.current_units.wind_speed_10m;

    weatherArea.appendChild(wind);

    //time
    const time = document.createElement("p");
    time.className = "fs-4";
    time.textContent = "Time: " + new Date(data.current.time).toLocaleString();

    weatherArea.appendChild(time);
    
    //rain
    const rain = document.createElement("p");
    rain.className = "fs-4";
    rain.textContent = "Rain: " + data.current.rain + " " + data.current_units.rain;

    weatherArea.appendChild(rain);

 }

button.addEventListener("click", getWeather);

function getIcon(code) {
    if(code === 0)"☀️ Clear";
    if (code <= 2) return "🌤️ Partly Cloudy";
    if (code === 3) return "☁️ Cloudy";
    if (code <= 48) return "🌫️ Fog";
    if (code <= 57) return "🌦️ Drizzle";
    if (code <= 67) return "🌧️ Rain";
    if (code <= 77) return "❄️ Snow";
    if (code <= 82) return "🌧️ Showers";
    if (code <= 86) return "🌨️ Snow Showers";
    return "⛈️ Thunderstorms";
}