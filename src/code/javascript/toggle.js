import { savePreferences, saveThemePreference } from "./local-storage.js";

// Dropdown
export function toggleMeasurement() {
  const measurementToggle = document.getElementById("measurement_toggle");
  const measurementLabel = document.getElementById("measurement_toggle_label");
  measurementToggle.checked
    ? (measurementLabel.textContent = "Metric System")
    : (measurementLabel.textContent = "Imperial System");
  savePreferences();
}

export function toggleTime() {
  const timeToggle = document.getElementById("time_toggle");
  const timeLabel = document.getElementById("time_toggle_label");
  timeToggle.checked
    ? (timeLabel.textContent = "24 Hour Format")
    : (timeLabel.textContent = "12 Hour Format");
  savePreferences();
}

// Theme
const root = document.documentElement;
const headerIcons = document.querySelectorAll(".header__icon");
const mainLocationIcon = document.querySelectorAll(".main__location-icon");

function toggleLightTheme() {
  const currentWeatherIcons = document.querySelectorAll(
    ".current-weather__icon-large",
  );
  const dailyForecastIcons = document.querySelectorAll(
    ".daily-forecast__icon-large",
  );
  const hourlyForecastIcons = document.querySelectorAll(
    ".hourly-forecast__icon-large",
  );

  root.style.setProperty("--color-foreground", "#000000");
  root.style.setProperty("--color-background", "#F1F5F9");
  root.style.setProperty("--color-background-secondary", "#CBD5E1");
  root.style.setProperty("--color-background-tertiary", "#E2E8F0");
  root.style.setProperty("--color-accent", "#0756C6");
  root.style.setProperty("--color-accent-hover", "#0A6CF6");

  headerIcons.forEach((icon) => {
    icon.classList.add("icon--light-theme");
  });
  mainLocationIcon.forEach((icon) => {
    icon.classList.add("icon--light-theme");
  });
  currentWeatherIcons.forEach((icon) => {
    icon.classList.add("icon--light-theme");
  });
  dailyForecastIcons.forEach((icon) => {
    icon.classList.add("icon--light-theme");
  });
  hourlyForecastIcons.forEach((icon) => {
    icon.classList.add("icon--light-theme");
  });
}

function toggleDarkTheme() {
  const currentWeatherIcons = document.querySelectorAll(
    ".current-weather__icon-large",
  );
  const dailyForecastIcons = document.querySelectorAll(
    ".daily-forecast__icon-large",
  );
  const hourlyForecastIcons = document.querySelectorAll(
    ".hourly-forecast__icon-large",
  );

  root.style.setProperty("--color-foreground", "#FFFFFF");
  root.style.setProperty("--color-background", "#0F0F0F");
  root.style.setProperty("--color-background-secondary", "#2A2E32");
  root.style.setProperty("--color-background-tertiary", "#1B1E20");
  root.style.setProperty("--color-accent", "#0AE3F6");
  root.style.setProperty("--color-accent-hover", "#07B6C6");

  headerIcons.forEach((icon) => {
    icon.classList.remove("icon--light-theme");
  });
  mainLocationIcon.forEach((icon) => {
    icon.classList.remove("icon--light-theme");
  });
  currentWeatherIcons.forEach((icon) => {
    icon.classList.remove("icon--light-theme");
  });
  dailyForecastIcons.forEach((icon) => {
    icon.classList.remove("icon--light-theme");
  });
  hourlyForecastIcons.forEach((icon) => {
    icon.classList.remove("icon--light-theme");
  });
}

export function toggleTheme() {
  const themeToggle = document.getElementById("theme_toggle");
  const themeLabel = document.getElementById("theme_toggle_label");

  if (themeToggle.checked) {
    toggleLightTheme();
    themeLabel.textContent = "Dark Mode";
    saveThemePreference();
  } else {
    toggleDarkTheme();
    themeLabel.textContent = "Light Mode";
    saveThemePreference();
  }
}
