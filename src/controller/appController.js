import { getCurrentConditions } from "../model/weatherData";
import { getUserLocation } from "../model/location";
import { updateData } from "../view/weatherView";

export async function init() {
  const locationInput = document.getElementById("search-input");
  const searchForm = document.querySelector(".search-form");
  const geoButton = document.getElementById("geo-button");
  const unitSelect = document.getElementById("unit-select");
  let currentUnit = unitSelect ? unitSelect.value : "metric";

  const loadingScreen = document.getElementById("loading-screen");
  function showLoading() {
    if (loadingScreen) loadingScreen.style.display = "flex";
  }
  function hideLoading() {
    if (loadingScreen) loadingScreen.style.display = "none";
  }
  async function loadWeather(lat, lon, nameOverride) {
    showLoading();
    try {
      const conditions = await getCurrentConditions(lat, lon, currentUnit);
      if (nameOverride) conditions.location.name = nameOverride;
      updateData(conditions);
    } catch (e) {
      // Optionally handle error
    } finally {
      hideLoading();
    }
  }

  // Initial load: use geolocation and resolve name
  (async () => {
    const { getUserLocation, getCoordsForLocationName } = await import(
      "../model/location.js"
    );
    const userLoc = await getUserLocation();
    const coords = await getCoordsForLocationName(
      `${userLoc.lat},${userLoc.lon}`
    );
    await loadWeather(coords.lat, coords.lon, coords.name);
  })();

  if (searchForm) {
    searchForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const value = locationInput.value.trim();
      if (value) {
        const { getCoordsForLocationName } = await import(
          "../model/location.js"
        );
        const coords = await getCoordsForLocationName(value);
        await loadWeather(coords.lat, coords.lon, coords.name);
      }
    });
  }

  // Handle geolocation button click
  if (geoButton) {
    geoButton.addEventListener("click", async () => {
      const userLoc = await getUserLocation();
      const coords = await getCoordsForLocationName(
        `${userLoc.lat},${userLoc.lon}`
      );
      await loadWeather(coords.lat, coords.lon, coords.name);
    });
  }

  // Handle unit change
  if (unitSelect) {
    unitSelect.addEventListener("change", async (e) => {
      currentUnit = unitSelect.value;
      // Reload weather for current location
      const { lat, lon } = await getUserLocation();
      await loadWeather(lat, lon);
    });
  }
}
