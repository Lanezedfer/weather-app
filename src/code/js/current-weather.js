import cloudCoverIcon from "../../assets/images/icons/cloud-cover-icon.svg";
import humidityIcon from "../../assets/images/icons/humidity-icon.svg";
import precipitationIcon from "../../assets/images/icons/precipitation-icon.svg";
import sunriseIcon from "../../assets/images/icons/sunrise-icon.svg";
import sunsetIcon from "../../assets/images/icons/sunset-icon.svg";
import uvIcon from "../../assets/images/icons/uv-icon.svg";
import visibilityIcon from "../../assets/images/icons/visibility-icon.svg";
import windSpeedIcon from "../../assets/images/icons/wind-speed-icon.svg";

import {
  formatTime,
  getDistanceUnit,
  getSpeedUnit,
  getTemperatureUnit,
  getWeatherIcon,
} from "./get-format.js";

export function displayCurrentWeather(data, unit, retrievedAt) {
  const currentWeather = document.getElementById("current_weather");

  const distance = getDistanceUnit(unit);
  const speed = getSpeedUnit(unit);
  const temperature = getTemperatureUnit(unit);

  const currentConditions = data.currentConditions;
  const sunrise = formatTime(currentConditions.sunrise);
  const sunset = formatTime(currentConditions.sunset);
  const weatherIcon = getWeatherIcon(currentConditions.icon);

  currentWeather.innerHTML = `
    <div class="current-weather__main-data">
      <img
        src="${weatherIcon}"
        alt="Current weather icon"
        class="current-weather__icon-large"
      />
      <p class="current-weather__txt-temperature">
        ${currentConditions.feelslike} ${temperature}
      </p>
      <p class="current-weather__txt-condition">
        ${currentConditions.conditions}
      </p>
    </div>
    <p class="current-weather__txt-time">
      Last updated: ${retrievedAt}
    </p>
    <div class="current-weather__secondary-data-container">
      <div class="current-weather__secondary-data">
        <img
          src="${humidityIcon}"
          alt="Current humidity icon"
          class="current-weather__icon-small"
        />
        <p class="current-weather__txt-title">Humidity</p>
        <p class="current-weather__txt-data">
          ${currentConditions.humidity} %
        </p>
      </div>
      <div class="current-weather__secondary-data">
        <img
          src="${precipitationIcon}"
          alt="Current precipitation icon"
          class="current-weather__icon-small"
        />
        <p class="current-weather__txt-title">Precipitation</p>
        <p class="current-weather__txt-data">
          ${currentConditions.precipprob} %
        </p>
      </div>
      <div class="current-weather__secondary-data">
        <img
          src="${cloudCoverIcon}"
          alt="Current cloud cover icon"
          class="current-weather__icon-small"
        />
        <p class="current-weather__txt-title">Cloud Cover</p>
        <p class="current-weather__txt-data">
          ${currentConditions.cloudcover} %
        </p>
      </div>
      <div class="current-weather__secondary-data">
        <img
          src="${visibilityIcon}"
          alt="Current visibility icon"
          class="current-weather__icon-small"
        />
        <p class="current-weather__txt-title">Visibility</p>
        <p class="current-weather__txt-data">
          ${currentConditions.visibility} ${distance}
        </p>
      </div>
      <div class="current-weather__secondary-data">
        <img
          src="${uvIcon}"
          alt="Current UV icon"
          class="current-weather__icon-small"
        />
        <p class="current-weather__txt-title">UV Index</p>
        <p class="current-weather__txt-data">
          ${currentConditions.uvindex}
        </p>
      </div>
      <div class="current-weather__secondary-data">
        <img
          src="${windSpeedIcon}"
          alt="Current wind speed icon"
          class="current-weather__icon-small"
        />
        <p class="current-weather__txt-title">Wind Speed</p>
        <p class="current-weather__txt-data">
          ${currentConditions.windspeed} ${speed}
        </p>
      </div>
      <div class="current-weather__secondary-data">
        <img
          src="${sunriseIcon}"
          alt="Current sunrise icon"
          class="current-weather__icon-small"
        />
        <p class="current-weather__txt-title">Sunrise</p>
        <p class="current-weather__txt-data">${sunrise}</p>
      </div>
      <div class="current-weather__secondary-data">
        <img
          src="${sunsetIcon}"
          alt="Current sunset icon"
          class="current-weather__icon-small"
        />
        <p class="current-weather__txt-title">Sunset</p>
        <p class="current-weather__txt-data">${sunset}</p>
      </div>
    </div>
  `;
}
