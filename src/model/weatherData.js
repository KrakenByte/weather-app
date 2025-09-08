// --- WEATHER DATA MODEL ---
import { fToC, cToF, hpaToInHg, inHgToHpa, formatValue, getCardinalDirection, mpsToMph, mphToMps } from "../utils/unitConverter.js";

export async function getCurrentConditions(lat, lon, unitGroup = "metric") {
  const apiKey = "3SYE9J5YXHTWZ5TWZC4FW5UY9";
  const apiUnit = unitGroup === "imperial" ? "us" : "metric";
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat},${lon}?unitGroup=${apiUnit}&key=${apiKey}&contentType=json`
  );
  const data = await response.json();

  const raw = data.currentConditions;

  // Prepare values for both systems
  let temperature, feelsLike, windSpeed, pressure, visibility, precip;
  if (unitGroup === "imperial") {
    temperature = formatValue(raw.temp);
    feelsLike = formatValue(raw.feelslike);
    windSpeed = formatValue(raw.windspeed);
    pressure = formatValue(hpaToInHg(raw.pressure));
    visibility = formatValue(raw.visibility);
    precip = typeof raw.precip !== "undefined" ? formatValue(raw.precip) : "--";
  } else {
    temperature = formatValue(raw.temp);
    feelsLike = formatValue(raw.feelslike);
    windSpeed = formatValue(raw.windspeed);
    pressure = formatValue(raw.pressure);
    visibility = formatValue(raw.visibility);
    precip = typeof raw.precip !== "undefined" ? formatValue(raw.precip) : "--";
  }

  return {
    location: {
      name: data.resolvedAddress,
      lat,
      lon,
    },
    temperature: {
      value: temperature,
      unit: unitGroup === "imperial" ? "\u00b0F" : "\u00b0C",
      feelsLike: feelsLike,
      feelsLikeUnit: unitGroup === "imperial" ? "\u00b0F" : "\u00b0C",
    },
    weather: {
      description: raw.conditions,
      icon: raw.icon,
    },
    details: {
      humidity: raw.humidity,
      precip: precip,
      precipUnit: unitGroup === "imperial" ? "in" : "mm",
      wind: {
        speed: windSpeed,
        speedUnit: unitGroup === "imperial" ? "mph" : "m/s",
        directionDeg: raw.winddir,
        directionCardinal: getCardinalDirection(raw.winddir)
      },
      pressure: {
        value: pressure,
        unit: unitGroup === "imperial" ? "inHg" : "hPa",
      },
      visibility: visibility,
      visibilityUnit: unitGroup === "imperial" ? "miles" : "km",
    },
    meta: {
      lastUpdated: raw.datetime,
      source: raw.source,
    },
    unitGroup,
  };
}
