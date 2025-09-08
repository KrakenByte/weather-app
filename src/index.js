// --- ENTRY POINT ---
import "./normalize.scss"
import "./main.scss";
import { init } from "./controller/appController";
import { updateData } from "./view/weatherView";

async function run() {
    await init();
}

run();