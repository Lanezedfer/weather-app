import { displayCurrentWeather } from "./current-weather.js";
import { displayDailyForecast } from "./daily-forecast.js";
import { displayHourlyForecast } from "./hourly-forecast.js";
import {
  getCurrentTime,
  getMeasurementUnit,
  getTimeFormat,
} from "./get-format.js";
import { toggleTheme } from "./toggle.js";

export async function getWeather() {
  const location = document.getElementById("location_input");

  if (!location.value) {
    alert("Enter a location.");
    return;
  }

  try {
    localStorage.setItem("location", location.value);

    const unit = getMeasurementUnit();
    const format = getTimeFormat();
    const formattedTime = getCurrentTime(format);

    const data = await fetchWeatherData(location.value, unit);
    location.value = data.resolvedAddress;

    displayCurrentWeather(data, unit, formattedTime);
    displayHourlyForecast(data, unit);
    displayDailyForecast(data, unit);
    toggleTheme();
  } catch (error) {
    alert(`${error.message}`);
  }
}

async function fetchWeatherData(location, unit) {
  const API_KEY = ""; // Insert API key here
  if (!API_KEY) {
    throw new Error("API Key is missing.");
  }

  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=${unit}&key=${API_KEY}&contentType=json`,
  );
  if (!response.ok) {
    throw new Error(`Unable to fetch weather data. Error: ${response.status}`);
  }
  return await response.json();
}
