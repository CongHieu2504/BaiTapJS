// Test Data 1
let dolphinsScores1 = [96, 108, 89];
let koalasScores1 = [88, 91, 110];

// Bonus Data 1
let dolphinsScoresBonus1 = [97, 112, 101];
let koalasScoresBonus1 = [109, 95, 123];

// Bonus Data 2
let dolphinsScoresBonus2 = [97, 112, 101];
let koalasScoresBonus2 = [109, 95, 106];

// Function to calculate the average score
function calculateAverage(scoreArray) {
    let sum = scoreArray.reduce((a, b) => a + b, 0);
    return sum / scoreArray.length;
}

// Function to determine the winner
function determineWinner(avgDolphins, avgKoalas) {
    if (avgDolphins > avgKoalas && avgDolphins >= 100) {
        console.log(`Dolphins win with an average score of ${avgDolphins}!`);
    } else if (avgKoalas > avgDolphins && avgKoalas >= 100) {
        console.log(`Koalas win with an average score of ${avgKoalas}!`);
    } else if (avgDolphins === avgKoalas && avgDolphins >= 100 && avgKoalas >= 100) {
        console.log(`It's a draw! Both teams have an average score of ${avgDolphins}.`);
    } else {
        console.log("No team wins the trophy.");
    }
}

let avgDolphins1 = calculateAverage(dolphinsScores1);
let avgKoalas1 = calculateAverage(koalasScores1);
console.log("Test Data 1:");
determineWinner(avgDolphins1, avgKoalas1);


let avgDolphinsBonus1 = calculateAverage(dolphinsScoresBonus1);
let avgKoalasBonus1 = calculateAverage(koalasScoresBonus1);
console.log("\nBonus Data 1:");
determineWinner(avgDolphinsBonus1, avgKoalasBonus1);

let avgDolphinsBonus2 = calculateAverage(dolphinsScoresBonus2);
let avgKoalasBonus2 = calculateAverage(koalasScoresBonus2);
console.log("\nBonus Data 2:");
determineWinner(avgDolphinsBonus2, avgKoalasBonus2);
