import { SnowFlakeBuilder } from "./bundle.obf.js";

const canvas = document.getElementById("canvas");
const metrics = document.getElementById("debugOverlay");
const zoomInButton = document.getElementById("zoomIn");
const zoomOutButton = document.getElementById("zoomOut");

const builder = new SnowFlakeBuilder()

let instance;

builder
    .useCanvas(canvas)
    .useDpr()
    .useEventBus()
    .useOptimalRendering()
    .useMetrics(metrics)
    .useZoomBtn(zoomInButton, zoomOutButton)
    .useWebLoader()
    .setUrlSchemaSvg("assets/schema.svg")
    .setUrlSchemaJson("assets/schema.json")
    .setUrlTicketsJson("assets/tickets.json");


builder.build()
    .then(arenite => {
        instance = arenite;
        instance.run();
    }).catch(error => {
    console.error("Ошибка при сборке SnowFlake:", error);
});

window.addEventListener('beforeunload', (event) => {
    if (instance) {
        instance.stop?.();
    }
});