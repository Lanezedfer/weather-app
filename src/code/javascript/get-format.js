import clearDayIcon from "../../assets/images/icons/clear-day-icon.svg";
import clearNightIcon from "../../assets/images/icons/clear-night-icon.svg";
import cloudyIcon from "../../assets/images/icons/cloudy-icon.svg";
import fogIcon from "../../assets/images/icons/fog-icon.svg";
import partlyCloudyDayIcon from "../../assets/images/icons/partly-cloudy-day-icon.svg";
import partlyCloudyNightcon from "../../assets/images/icons/partly-cloudy-night-icon.svg";
import rainIcon from "../../assets/images/icons/rain-icon.svg";
import snowIcon from "../../assets/images/icons/snow-icon.svg";
import windIcon from "../../assets/images/icons/wind-icon.svg";

// Icon
export function getWeatherIcon(condition) {
  const mapping = {
    "clear-day": clearDayIcon,
    "clear-night": clearNightIcon,
    "cloudy": cloudyIcon,
    "fog": fogIcon,
    "partly-cloudy-day": partlyCloudyDayIcon,
    "partly-cloudy-night": partlyCloudyNightcon,
    "rain": rainIcon,
    "snow": snowIcon,
    "wind": windIcon,
  };
  return mapping[condition];
}

// Time
export function formatTime(time) {
  const timeToggle = document.getElementById("time_toggle");

  let [hour, minute] = time.split(":").map(Number);

  if (timeToggle.checked) {
    const period = hour >= 12 ? "PM" : "AM";
    hour = hour % 12 || 12;
    return `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")} ${period}`;
  }

  return `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`;
}

export function getCurrentTime(format) {
  const retrievedAt = new Date();
  return retrievedAt.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: format,
  });
}

export function getTimeFormat() {
  const timeToggle = document.getElementById("time_toggle");
  return timeToggle.checked ? "h12" : "h23";
}

// Unit
export function getMeasurementUnit() {
  const measurementToggle = document.getElementById("measurement_toggle");
  return measurementToggle.checked ? "us" : "metric";
}

export function getDistanceUnit(unit) {
  const mapping = {
    metric: "km",
    us: "mi",
  };
  return mapping[unit];
}

export function getSpeedUnit(unit) {
  const mapping = {
    metric: "kph",
    us: "mph",
  };
  return mapping[unit];
}

export function getTemperatureUnit(unit) {
  const mapping = {
    metric: "°C",
    us: "°F",
  };
  return mapping[unit];
}