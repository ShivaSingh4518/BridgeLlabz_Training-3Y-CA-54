let temperature = 28;
let isRaining = false;
let windSpeed = 10;

if (isRaining) {
    console.log("Stay indoors with hot coffee.");
} else if (temperature > 35 && !isRaining) {
    console.log("Go swimming.");
} else if (temperature < 15 && windSpeed > 20) {
    console.log("Too cold and windy — stay home.");
} else if (temperature >= 15 && temperature <= 35 && !isRaining && windSpeed <= 20) {
    console.log("Perfect day for a walk.");
} else {
    console.log("Stay safe and choose an indoor activity.");
}