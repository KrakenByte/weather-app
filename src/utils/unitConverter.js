// Temperature Conversions

export function cToF(celsius) {
  return (celsius * 9) / 5 + 32;
}

export function fToC(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

export function cToK(celsius) {
  return celsius + 273.15;
}

export function kToC(kelvin) {
  return kelvin - 273.15;
}

export function fToK(fahrenheit) {
  return cToK(fToC(fahrenheit));
}

export function kToF(kelvin) {
  return cToF(kToC(kelvin));
}

// Wind Speed Conversions

export function mpsToKph(mps) {
  return mps * 3.6;
}

export function kphToMps(kph) {
  return kph / 3.6;
}

export function mpsToMph(mps) {
  return mps * 2.23694;
}

export function mphToMps(mph) {
  return mph / 2.23694;
}

// Pressure Conversions

export function hpaToInHg(hpa) {
  return hpa * 0.02953;
}

export function inHgToHpa(inHg) {
  return inHg / 0.02953;
}

// Format Values Nicely
export function formatValue(value, decimals = 1) {
  return Number.parseFloat(value).toFixed(decimals);
}

// Deg to Cardinal
export function getCardinalDirection(degree) {
  const cardinalDirections = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
  degree = ((degree % 360) + 360) % 360;
  const index = Math.round(degree / 45) % 8;
  return cardinalDirections[index];
}
