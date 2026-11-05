const feedback = "Great product! Fast delivery and amazing sound quality!";
const wordCount = feedback.trim().split(/\s+/).length;
const lowerCaseFeedback = feedback.toLowerCase();
const needsImprovement = lowerCaseFeedback.includes("bad") || lowerCaseFeedback.includes("poor");

console.log(`Word count: ${wordCount}`);
console.log(needsImprovement ? "Needs Improvement" : "Positive Feedback");
