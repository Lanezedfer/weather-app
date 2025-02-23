import "../css/reset.css";
import "../css/index.css";
import "../css/current-weather.css";

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
  // Location
  const locationInput = document.getElementById("location_input");
  const location = document.getElementById("location");
  locationInput.addEventListener("focus", () =>
    location.classList.add("main__location--focus"),
  );
  locationInput.addEventListener("blur", () =>
    location.classList.remove("main__location--focus"),
  );
  const locationEnter = document.getElementById("location_enter");
  locationEnter.addEventListener("click", getWeather);
  const locationClear = document.getElementById("location_clear");
  locationClear.addEventListener("click", () => (locationInput.value = ""));

  // Toggle
  const dropdownToggle = document.getElementById("dropdown");
  const dropdownMenu = document.getElementById("dropdown_menu");
  dropdownToggle.addEventListener("change", () =>
    dropdownToggle.checked
      ? dropdownMenu.classList.add("header__dropdown-menu--show")
      : dropdownMenu.classList.remove("header__dropdown-menu--show"),
  );
  const measurementToggle = document.getElementById("measurement");
  measurementToggle.addEventListener("change", () => {
    getWeather();
    toggleMeasurement();
  });
  const timeToggle = document.getElementById("time");
  timeToggle.addEventListener("change", () => {
    getWeather();
    toggleTime();
  });
  const themeToggle = document.getElementById("theme");
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
