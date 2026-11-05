const scores = Array.from({ length: 8 }, () => Math.floor(Math.random() * 71) + 30);
const highestScore = Math.max(...scores);
const lowestScore = Math.min(...scores);
const totalScore = scores.reduce((total, score) => total + score, 0);
const averageScore = totalScore / scores.length;
const passingStudents = scores.filter((score) => score >= 50).length;

console.log(`Scores: ${scores.map((score) => score).join(", ")}`);
console.log(`Highest: ${highestScore}`);
console.log(`Lowest: ${lowestScore}`);
console.log(`Average: ${averageScore.toFixed(2)}`);
console.log(`Students passed: ${passingStudents}`);
