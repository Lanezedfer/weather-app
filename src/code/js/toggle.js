import { savePreferences, saveThemePreference } from "./local-storage.js";

// Dropdown
export function toggleMeasurement() {
  const measurementToggle = document.getElementById("measurement");
  const measurementLabel = document.getElementById("measurement_label");
  measurementToggle.checked
    ? (measurementLabel.textContent = "Metric System")
    : (measurementLabel.textContent = "Imperial System");
  savePreferences();
}

export function toggleTime() {
  const timeToggle = document.getElementById("time");
  const timeLabel = document.getElementById("time_label");
  timeToggle.checked
    ? (timeLabel.textContent = "24 Hour Format")
    : (timeLabel.textContent = "12 Hour Format");
  savePreferences();
}

// Theme
const root = document.documentElement;
const headerIcons = document.querySelectorAll(".header__icon");
const mainLocationIcon = document.querySelectorAll(".main__location-icon");

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

  root.style.setProperty("--color-foreground", "#ffffff");
  root.style.setProperty("--color-background-primary", "#0f0f0f");
  root.style.setProperty("--color-background-secondary", "#2a2e32");
  root.style.setProperty("--color-background-tertiary", "#1b1e20");
  root.style.setProperty("--color-accent", "#0ae3f6");
  root.style.setProperty("--color-accent-hover", "#07b6c6");

  currentWeatherIcons.forEach((icon) => {
    icon.classList.remove("icon--light-theme");
  });
  dailyForecastIcons.forEach((icon) => {
    icon.classList.remove("icon--light-theme");
  });
  headerIcons.forEach((icon) => {
    icon.classList.remove("icon--light-theme");
  });
  hourlyForecastIcons.forEach((icon) => {
    icon.classList.remove("icon--light-theme");
  });
  mainLocationIcon.forEach((icon) => {
    icon.classList.remove("icon--light-theme");
  });
}

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
  root.style.setProperty("--color-background-primary", "#f1f5f9");
  root.style.setProperty("--color-background-secondary", "#cbd5e1");
  root.style.setProperty("--color-background-tertiary", "#e2e8f0");
  root.style.setProperty("--color-accent", "#0756c6");
  root.style.setProperty("--color-accent-hover", "#0a6cf6");

  currentWeatherIcons.forEach((icon) => {
    icon.classList.add("icon--light-theme");
  });
  dailyForecastIcons.forEach((icon) => {
    icon.classList.add("icon--light-theme");
  });
  headerIcons.forEach((icon) => {
    icon.classList.add("icon--light-theme");
  });
  hourlyForecastIcons.forEach((icon) => {
    icon.classList.add("icon--light-theme");
  });
  mainLocationIcon.forEach((icon) => {
    icon.classList.add("icon--light-theme");
  });
}

export function toggleTheme() {
  const themeToggle = document.getElementById("theme");
  const themeLabel = document.getElementById("theme_label");

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
