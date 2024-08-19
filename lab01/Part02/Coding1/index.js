const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins.toFixed(2)} vs. ${avgKoalas.toFixed(2)})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas.toFixed(2)} vs. ${avgDolphins.toFixed(2)})`);
    } else {
        console.log("No team wins!");
    }
}

// Test Data 1
let dolphinsScores1 = [44, 23, 71];
let koalasScores1 = [65, 54, 49];

// Test Data 2
let dolphinsScores2 = [85, 54, 41];
let koalasScores2 = [23, 34, 27];

// Calculate average scores for both teams
let avgDolphins1 = calcAverage(...dolphinsScores1);
let avgKoalas1 = calcAverage(...koalasScores1);

let avgDolphins2 = calcAverage(...dolphinsScores2);
let avgKoalas2 = calcAverage(...koalasScores2);

// Determine winners for both datasets
console.log("Data 1:");
checkWinner(avgDolphins1, avgKoalas1);

console.log("\nData 2:");
checkWinner(avgDolphins2, avgKoalas2);
