let marks = [85, 78, 92, 88, 80];

let total = 0;

for (let mark of marks) {
    total += mark;
}

let average = total / marks.length;
let percentage = (total / (marks.length * 100)) * 100;

console.log(`Average Marks: ${average.toFixed(2)}`);
console.log(`Overall Percentage: ${percentage.toFixed(2)}%`);

if (marks.some(mark => mark < 35) || percentage < 50) {
    console.log("Detained");
} else if (percentage >= 85) {
    console.log("Promoted with Distinction");
} else if (percentage >= 50 && percentage < 85) {
    console.log("Promoted");
} else {
    console.log("Detained");
}