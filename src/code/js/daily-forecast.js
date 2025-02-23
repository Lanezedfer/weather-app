import cloudCoverIcon from "../../assets/images/icons/cloud-cover-icon.svg";
import precipitationIcon from "../../assets/images/icons/precipitation-icon.svg";
import sunriseIcon from "../../assets/images/icons/sunrise-icon.svg";
import sunsetIcon from "../../assets/images/icons/sunset-icon.svg";
import uvIcon from "../../assets/images/icons/uv-icon.svg";

import {
  formatDate,
  formatTime,
  getTemperatureUnit,
  getWeatherIcon,
} from "./get-format.js";

export function displayDailyForecast(data, unit) {
  const dailyForecast = document.getElementById("daily_forecast");
  dailyForecast.innerHTML = "";

  const days = data.days.slice(1, 7);

  const temperature = getTemperatureUnit(unit);

  days.forEach((day) => {
    const formattedDate = formatDate(day.datetime);
    const sunrise = formatTime(day.sunrise);
    const sunset = formatTime(day.sunset);
    const weatherIcon = getWeatherIcon(day.icon);

    const card = document.createElement("div");
    card.classList.add("daily-forecast__card");
    card.innerHTML = `
      <p class="daily-forecast__txt-date">${formattedDate}</p>
      <hr />
      <div class="daily-forecast__main-data-container">
        <img
          src="${weatherIcon}"
          alt="${formattedDate} weather icon"
          class="daily-forecast__icon-large"
        />
        <div>
          <p class="daily-forecast__txt-temperature">
            ${day.feelslikemin} ${temperature}
          </p>
          <p class="daily-forecast__txt-temperature-label">min</p>
          <p class="daily-forecast__txt-temperature">
            ${day.feelslikemax} ${temperature}
          </p>
          <p class="daily-forecast__txt-temperature-label">max</p>
        </div>
      </div>
      <p class="daily-forecast__txt-condition">${day.conditions}</p>
      <div class="daily-forecast__secondary-data-container">
        <div class="daily-forecast__secondary-data">
          <img
            src="${precipitationIcon}"
            alt="${formattedDate} precipitation icon"
            class="daily-forecast__icon-small"
          />
          <p class="daily-forecast__txt-data">${day.precipprob} %</p>
        </div>
        <div class="daily-forecast__secondary-data">
          <img
            src="${uvIcon}"
            alt="${formattedDate} UV icon"
            class="daily-forecast__icon-small"
          />
          <p class="daily-forecast__txt-data">${day.uvindex}</p>
        </div>
        <div class="daily-forecast__secondary-data">
          <img
            src="${cloudCoverIcon}"
            alt="${formattedDate} cloud cover icon"
            class="daily-forecast__icon-small"
          />
          <p class="daily-forecast__txt-data">${day.cloudcover} %</p>
        </div>
        <div class="daily-forecast__secondary-data">
          <img
            src="${sunriseIcon}"
            alt="${formattedDate} sunrise icon"
            class="daily-forecast__icon-small"
          />
          <p class="daily-forecast__txt-data">${sunrise}</p>
        </div>
        <div class="daily-forecast__secondary-data">
          <img
            src="${sunsetIcon}"
            alt="${formattedDate} sunset icon"
            class="daily-forecast__icon-small"
          />
          <p class="daily-forecast__txt-data">${sunset}</p>
        </div>
      </div>
    `;

    dailyForecast.appendChild(card);
  });
}
