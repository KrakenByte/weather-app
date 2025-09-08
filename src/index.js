import "./normalize.scss"
import "./main.scss";
import { getCurrentConditions } from "./model/weatherData";
import { getUserLocation } from "./model/location";

async function init() {
    const {lat, lon} = await getUserLocation();
    const conditions = await getCurrentConditions(lat, lon);
    console.log(`Weather for ${conditions.location.name}: `, conditions);
}


init();