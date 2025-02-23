import cloudCoverIcon from "../../assets/images/icons/cloud-cover-icon.svg";
import precipitationIcon from "../../assets/images/icons/precipitation-icon.svg";
import windSpeedIcon from "../../assets/images/icons/wind-speed-icon.svg";

import {
  formatTime,
  getSpeedUnit,
  getTemperatureUnit,
  getWeatherIcon,
} from "./get-format.js";

export function displayHourlyForecast(data, unit) {
  const hourlyForecast = document.getElementById("hourly_forecast");
  hourlyForecast.innerHTML = "";

  const currentHour = new Date().getHours();
  let hours = [];

  // Filter hours starting one hour from now
  hours = data.days[0].hours.filter((hour) => {
    const forecastHour = parseInt(hour.datetime.split(":")[0], 10);
    return forecastHour > currentHour;
  });

  // If not enough hours, add hours from next day's forecast
  if (hours.length < 6 && data.days[1]) {
    const remainingHours = 6 - hours.length;
    hours = hours.concat(data.days[1].hours.slice(0, remainingHours));
  }

  // Limit forecast to 6 hours only
  hours = hours.slice(0, 6);

  const temperature = getTemperatureUnit(unit);
  const speed = getSpeedUnit(unit);

  hours.forEach((hour) => {
    const weatherIcon = getWeatherIcon(hour.icon);
    const time = formatTime(hour.datetime);

    const card = document.createElement("div");
    card.classList.add("hourly-forecast__card");
    card.innerHTML = `
      <p class="hourly-forecast__txt-time">${time}</p>
      <hr />
      <div class="hourly-forecast__main-data">
        <img
          src="${weatherIcon}"
          alt="${time} weather icon"
          class="hourly-forecast__icon-large"
        />
        <p class="hourly-forecast__txt-temperature">
          ${hour.feelslike} ${temperature}
        </p>
      </div>
      <p class="hourly-forecast__txt-condition">
        ${hour.conditions}
      </p>
      <div class="hourly-forecast__secondary-data-container">
        <div class="hourly-forecast__secondary-data">
          <img
            src="${precipitationIcon}"
            alt="${time} precipitation icon"
            class="hourly-forecast__icon-small"
          />
          <p class="hourly-forecast__txt-data">
            ${hour.precipprob} %
          </p>
        </div>
        <div class="hourly-forecast__secondary-data">
          <img
            src="${cloudCoverIcon}"
            alt="${time} cloud cover icon"
            class="hourly-forecast__icon-small"
          />
          <p class="hourly-forecast__txt-data">${hour.cloudcover} %</p>
        </div>
        <div class="hourly-forecast__secondary-data">
          <img
            src="${windSpeedIcon}"
            alt="${time} wind speed icon"
            class="hourly-forecast__icon-small"
          />
          <p class="hourly-forecast__txt-data">
            ${hour.windspeed} ${speed}
          </p>
        </div>
      </div>
    `;

    hourlyForecast.appendChild(card);
  });
}
