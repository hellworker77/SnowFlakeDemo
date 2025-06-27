import {SnowFlakeBuilder} from "./bundle.obf.js"

const canvas = document.getElementById("canvas");
const metrics = document.getElementById("debugOverlay");
const builder = new SnowFlakeBuilder()

builder
    .useCanvas(canvas)
    .useDpr()
    .useEventBus()
    .useOptimalRendering()
    .useMetrics(metrics)
    .useWebLoader()
    .setUrlSchemaJson("schema/large.json")
    .setUrlTicketsJson("tickets/large.json");

let instance;

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