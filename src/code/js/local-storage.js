import { toggleMeasurement, toggleTheme, toggleTime } from "./toggle.js";

// Save
export function savePreferences() {
  saveLocationPreference();
  saveMeasurementPreference();
  saveTimePreference();
}

function saveLocationPreference() {
  const location = document.getElementById("location_input");
  localStorage.setItem("locationPreference", location);
}

function saveMeasurementPreference() {
  const measurementToggle = document.getElementById("measurement");
  const measurementPreference = measurementToggle.checked
    ? "imperial"
    : "metric";
  localStorage.setItem("measurementPreference", measurementPreference);
}

export function saveThemePreference() {
  const themeToggle = document.getElementById("theme");
  const themePreference = themeToggle.checked ? "light" : "dark";
  localStorage.setItem("themePreference", themePreference);
}

function saveTimePreference() {
  const timeToggle = document.getElementById("time");
  const timePreference = timeToggle.checked ? "12hr" : "24hr";
  localStorage.setItem("timePreference", timePreference);
}

// Load
export function loadLocationPreference() {
  const location = document.getElementById("location_input");
  const savedLocation =
    localStorage.getItem("location") ||
    "Iloilo City, Western Visayas, Philippines";
  location.value = savedLocation;
}

export function loadMeasurementPreference() {
  const measurementPreference =
    localStorage.getItem("measurementPreference") || "metric";
  const measurementToggle = document.getElementById("measurement");

  if (measurementPreference === "imperial") {
    measurementToggle.checked = true;
    toggleMeasurement();
  } else {
    measurementToggle.checked = false;
    toggleMeasurement();
  }
}

export function loadThemePreference() {
  const themePreference = localStorage.getItem("themePreference") || "dark";
  const themeToggle = document.getElementById("theme");

  if (themePreference === "light") {
    themeToggle.checked = true;
    toggleTheme();
  } else {
    themeToggle.checked = false;
    toggleTheme();
  }
}

export function loadTimePreference() {
  const timePreference = localStorage.getItem("timePreference") || "h23";
  const timeToggle = document.getElementById("time");

  if (timePreference === "h12") {
    timeToggle.checked = true;
    toggleTime();
  } else {
    timeToggle.checked = false;
    toggleTime();
  }
}
