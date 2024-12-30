import "../css/reset.css";
import "../css/index.css";
import "../css/current-weather.css";
import "../css/daily-forecast.css";
import "../css/hourly-forecast.css";

import {
  loadLocationPreference,
  loadMeasurementPreference,
  loadThemePreference,
  loadTimePreference,
} from "./local-storage.js";
import { toggleMeasurement, toggleTheme, toggleTime } from "./toggle.js";
import { getWeather } from "./weather-api.js";

const initialLoad = () => {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      loadLocationPreference();
      loadMeasurementPreference();
      loadTimePreference();
      loadThemePreference();
      getWeather();
    });
  } else {
    loadLocationPreference();
    loadMeasurementPreference();
    loadTimePreference();
    loadThemePreference();
    getWeather();
  }
};

export default initialLoad();

document.addEventListener("DOMContentLoaded", () => {
  const locationInput = document.getElementById("location_input");

  // Search
  const locationEnter = document.getElementById("location_enter");
  locationEnter.addEventListener("click", getWeather);

  const locationClear = document.getElementById("location_clear");
  locationClear.addEventListener("click", () => (locationInput.value = ""));

  const location = document.getElementById("location");
  locationInput.addEventListener("focus", () =>
    location.classList.add("main__location--focus"),
  );
  locationInput.addEventListener("blur", () =>
    location.classList.remove("main__location--focus"),
  );

  // Toggle
  const dropdownToggle = document.getElementById("dropdown_toggle");
  const dropdownMenu = document.getElementById("dropdown_menu");
  dropdownToggle.addEventListener("change", () =>
    dropdownToggle.checked
      ? dropdownMenu.classList.add("header__dropdown-menu--show")
      : dropdownMenu.classList.remove("header__dropdown-menu--show"),
  );

  const measurementToggle = document.getElementById("measurement_toggle");
  measurementToggle.addEventListener("change", () => {
    getWeather();
    toggleMeasurement();
  });

  const timeToggle = document.getElementById("time_toggle");
  timeToggle.addEventListener("change", () => {
    getWeather();
    toggleTime();
  });

  const themeToggle = document.getElementById("theme_toggle");
  themeToggle.addEventListener("change", () => {
    toggleTheme();
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    getWeather();
  }
});
