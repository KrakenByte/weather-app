export async function getUserLocation() {
  const defaultLocation = { lat: 36.8178, lon: 10.1656 }; // Tunis as fallback

  return new Promise((resolve) => {
    if (!navigator.geolocation) {
      console.warn("Geolocation not supported, using default location.");
      resolve(defaultLocation);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
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