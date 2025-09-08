import { fToC, hpaToInHg, formatValue, getCardinalDirection } from "../utils/unitConverter.js";

export async function getCurrentConditions(lat, lon) {
  const apiKey = "3SYE9J5YXHTWZ5TWZC4FW5UY9";
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${lat},${lon}?unitGroup=us&key=${apiKey}&contentType=json`
  );
  const data = await response.json();

  const raw = data.currentConditions;

  return {
    location: {
      name: data.resolvedAddress,
      lat,
      lon,
    },
    temperature: {
      celsius: formatValue(fToC(raw.temp)),   // convert from F → C
      fahrenheit: formatValue(raw.temp),
      feelsLikeC: formatValue(fToC(raw.feelslike)),
      feelsLikeF: formatValue(raw.feelslike),
    },
    weather: {
      description: raw.conditions,
      icon: raw.icon,
    },
    details: {
      humidity: raw.humidity,
      wind: {
        speedMps: formatValue(raw.windspeed / 2.23694), // mph → m/s
        speedMph: formatValue(raw.windspeed),           // mph
        directionDeg: raw.winddir,
        directionCardinal: getCardinalDirection(raw.winddir)
      },
      pressure: {
        hPa: raw.pressure,                               // already hPa
        inHg: formatValue(hpaToInHg(raw.pressure)),      // convert to inHg
      },
      visibility: raw.visibility,                        // in miles (unitGroup=us)
    },
    meta: {
      lastUpdated: raw.datetime,
      source: raw.source,
    },
  };
}
