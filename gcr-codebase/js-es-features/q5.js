"use strict";

console.log("Prediction: score is undefined, announce works, and startGame prints ready.");

function runOriginalSequence() {
  console.log(score);
  announce();
  var score = 50;
  function announce() {
    console.log("Game started");
  }
  let status = "ready";
  startGame();
  function startGame() {
    console.log(status);
  }
}

runOriginalSequence();

// var is hoisted as undefined; function declarations are hoisted with their body.
var score = 50;
function announce() {
  console.log("Game started");
}
const status = "ready";
function startGame() {
  console.log(status);
}

console.log("Fixed sequence:");
console.log(score);
announce();
startGame();

const arrowAnnounce = () => console.log("Arrow game started");
const arrowStartGame = () => console.log("Arrow status:", status);

console.log("Arrow functions are not callable before their const assignment.");
arrowAnnounce();
arrowStartGame();
