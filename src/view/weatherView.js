// --- WEATHER VIEW ---
import { getCurrentConditions } from "../model/weatherData";

export async function updateData(conditions) {
  const body = document.body;
  if (conditions.weather.icon && (conditions.weather.icon.includes("night") || conditions.weather.icon === "clear-night")) {
    body.classList.remove("day");
    body.classList.add("night");
  } else {
    body.classList.remove("night");
    body.classList.add("day");
  }
  function getWeatherClass(icon) {
    if (!icon) return "";
    if (icon === "clear-day" || icon === "clear-night") return "clear-day";
    if (icon === "partly-cloudy-day" || icon === "partly-cloudy-night") return "partly-cloudy-day";
    if (icon === "cloudy" || icon === "fog") return "cloudy";
    if (icon.includes("rain") || icon.includes("showers")) return "rain";
    if (icon.includes("snow")) return "snow";
    if (icon.includes("thunder")) return "thunder";
    return "";
  }

  const weatherClass = getWeatherClass(conditions.weather.icon);
  document.querySelectorAll('.dashboard .card').forEach(card => {
    card.classList.remove("clear-day", "partly-cloudy-day", "cloudy", "rain", "snow", "thunder");
    if (weatherClass) card.classList.add(weatherClass);
  });
  const location = document.getElementById("location-name");
  const temp = document.getElementById("temperature");
  const description = document.getElementById("description");
  const feelslike = document.getElementById("feelslike");
  const humidity = document.getElementById("humidity");
  const precip = document.getElementById("precip");
  const windSpeed = document.getElementById("wind-speed");
  const windDirection = document.getElementById("wind-direction");
  const pressure = document.getElementById("pressure");
  const visibility = document.getElementById("visibility");
  const lastUpdated = document.getElementById("last-updated");
  const source = document.getElementById("source");

  if (!conditions || !conditions.temperature || !conditions.location) {
    temp.textContent = "--\u00b0C";
    location.textContent = "--";
    console.error("Weather data is missing or incomplete:", conditions);
    return;
  }
  temp.textContent = `${conditions.temperature.value}${conditions.temperature.unit}`;
  location.textContent = conditions.location.name;
  description.textContent = conditions.weather.description || "";
  feelslike.textContent = `${conditions.temperature.feelsLike}${conditions.temperature.feelsLikeUnit}`;
  humidity.textContent = `${conditions.details.humidity}%`;
  if (precip) {
    let value = conditions.details && conditions.details.precip;
    if (value === null || value === undefined || isNaN(Number(value))) {
      precip.textContent = `-- ${conditions.details.precipUnit}`;
    } else {
      precip.textContent = `${value} ${conditions.details.precipUnit}`;
    }
  }
  windSpeed.textContent = `${conditions.details.wind.speed} ${conditions.details.wind.speedUnit}`;
  windDirection.textContent = `${conditions.details.wind.directionCardinal}`;
  pressure.textContent = `${conditions.details.pressure.value} ${conditions.details.pressure.unit}`;
  visibility.textContent = `${conditions.details.visibility} ${conditions.details.visibilityUnit}`;
  lastUpdated.textContent = `${conditions.meta.lastUpdated || "N/A"}`;
  source.textContent = `${conditions.meta.source || "N/A"}`;
  const icon = document.getElementById("weather-icon");
  if (icon && conditions.weather.icon) {
    try {
      icon.src = require(`../assets/weather-icons/${conditions.weather.icon}.svg`);
    } catch (e) {
      icon.src = require("../assets/weather-icons/clear-day.svg");
    }
    icon.alt = conditions.weather.description || "Weather Icon";
  }
  const logo = document.querySelector(".logo");
  if (logo) {
    logo.onerror = function () {
      logo.src = require("../assets/logo.png");
    };
    if (!logo.complete || logo.naturalWidth === 0) {
      logo.src = logo.src;
    }
  }
}
