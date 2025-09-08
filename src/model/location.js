export async function getCoordsForLocationName(name) {
  const apiKey = "3SYE9J5YXHTWZ5TWZC4FW5UY9";
  const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${encodeURIComponent(name)}?key=${apiKey}&contentType=json`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data && data.latitude && data.longitude) {
      try {
        const nominatimUrl = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${data.latitude}&lon=${data.longitude}`;
        const nominatimRes = await fetch(nominatimUrl);
        const nominatimData = await nominatimRes.json();
        let locationName = data.resolvedAddress;
        if (nominatimData && nominatimData.address) {
          const city = nominatimData.address.city || nominatimData.address.town || nominatimData.address.village || nominatimData.address.hamlet;
          const region = nominatimData.address.state || nominatimData.address.county || "";
          const country = nominatimData.address.country || "";
          const queryLower = name.trim().toLowerCase();
          const countryLower = country.trim().toLowerCase();
          if (countryLower.includes(queryLower) || queryLower.includes(countryLower)) {
            if (city) {
              locationName = `${city}, ${country}`;
            } else if (region) {
              locationName = `${region}, ${country}`;
            } else {
              locationName = country;
            }
          } else {
            locationName = name;
          }
        }
        return { lat: data.latitude, lon: data.longitude, name: locationName };
      } catch (err) {
        return { lat: data.latitude, lon: data.longitude, name: data.resolvedAddress };
      }
    }
  } catch (err) {
    console.error("Location name resolution failed:", err);
  }
  const fallback = await getUserLocation();
  return { ...fallback, name: "Tunis, Tunisia" };
}

export async function getUserLocation() {
  const defaultLocation = { lat: 36.8178, lon: 10.1656, name: "Tunis, Tunisia" };
  return new Promise((resolve) => {
    if (!navigator.geolocation) {
      console.warn("Geolocation not supported, using default location.");
      resolve(defaultLocation);
      return;
    }
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        try {
          const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`;
          const response = await fetch(url);
          const data = await response.json();
          let name = "";
          if (data && data.address) {
            const city = data.address.city || data.address.town || data.address.village || data.address.hamlet || "";
            const country = data.address.country || "";
            name = city ? `${city}, ${country}` : country;
          }
          resolve({ lat, lon, name });
        } catch (err) {
          resolve({ lat, lon });
        }
      },
      (error) => {
        console.warn("Geolocation error:", error.message);
        resolve(defaultLocation);
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      }
    );
  });
}