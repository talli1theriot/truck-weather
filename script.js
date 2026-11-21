const url =
 "https://api.open-meteo.com/v1/forecast?latitude=30.27353&longitude=-91.89928&hourly=temperature_2m&current=temperature_2m,rain,is_day,wind_speed_10m,weather_code&timezone=America%2FChicago&wind_speed_unit=mph&temperature_unit=fahrenheit&precipitation_unit=inch";
 const button = document.getElementById("check-btn");
 const weatherArea = document.getElementById("weather");

 async function getWeather () {
    weatherArea.textContent = "";
    const response = await fetch(url)
    const data = await response.json();
    console.log(data);

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