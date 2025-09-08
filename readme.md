
# Weather Now

A beautiful, modern weather dashboard web app built with vanilla JavaScript, SCSS, and Webpack. Instantly view current weather conditions for any location, with geolocation, unit conversion, and a responsive card-based UI.

---

## Features

- **Instant Weather Search:** Enter any city or coordinates to get live weather data.
- **Geolocation:** One-click to use your current location.
- **Unit Conversion:** Switch between Metric and Imperial units.
- **Precipitation, Wind, Pressure, Visibility:** All key weather metrics at a glance.
- **Location Name Resolution:** Smart city/country display using Nominatim and Visual Crossing APIs.
- **Loading Animation:** Smooth Lottie-based loading screen for API fetches.
- **Responsive Design:** Works great on desktop and mobile.
- **Weather-based Card Coloring:** Cards adapt to current weather conditions.
- **Error Handling:** Defensive UI for missing data, network issues, and asset fallback.

---

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm

### Installation
1. Clone the repository:
	 ```sh
	 git clone https://github.com/KrakenByte/weather-app.git
	 cd weather-app
	 ```
2. Install dependencies:
	 ```sh
	 npm install
	 ```
3. Start the development server:
	 ```sh
	 npm run dev
	 ```
4. Open your browser at `http://localhost:8080` (or the port shown in your terminal).

---

## Usage
- **Search:** Type a city or coordinates and hit Enter.
- **Geolocation:** Click the location button to use your device's location.
- **Units:** Use the dropdown to switch between Metric and Imperial.
- **Cards:** View temperature, feels like, humidity, precipitation, wind, pressure, visibility, last updated, and source.

---

## Project Structure
```
weather-app/
	src/
		index.js           # Entry point
		main.scss          # Main styles
		normalize.scss     # CSS normalization
		template.html      # Main HTML template
		assets/            # Logo and weather icons
		controller/
			appController.js # App logic
		model/
			location.js      # Location/geocoding logic
			weatherData.js   # Weather API logic
		utils/
			unitConverter.js # Unit conversion helpers
		view/
			loader.js        # Loading screen logic
			weatherView.js   # UI rendering
```

---

## API & Attribution
- **Weather Data:** [Visual Crossing Weather API](https://www.visualcrossing.com/weather-api)
- **Geocoding:** [Nominatim OpenStreetMap](https://nominatim.openstreetmap.org/)
- **Loading Animation:** [LottieFiles](https://lottiefiles.com/)

---

## Customization
- Change the color palette in `main.scss` for your own look.
- Add more weather metrics or cards in `weatherView.js` and `template.html`.
- Replace the logo in `src/assets/logo.png`.

---

## License
MIT

---

## Author
Made by KrakenByte. Contributions welcome!

---

## Special Thanks
Big thanks to [The Odin Project](https://www.theodinproject.com/) for their excellent free learning resources and community support. This project would not have been possible without their guidance and curriculum.
