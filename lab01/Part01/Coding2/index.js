// Data 1
let massMark1 = 78;
let heightMark1 = 1.69;
let massJohn1 = 92;
let heightJohn1 = 1.95;

let BMIMark1 = massMark1 / (heightMark1 ** 2);
let BMIJohn1 = massJohn1 / (heightJohn1 ** 2);

// Data 2
let massMark2 = 95;
let heightMark2 = 1.88;
let massJohn2 = 85;
let heightJohn2 = 1.76;

let BMIMark2 = massMark2 / (heightMark2 ** 2);
let BMIJohn2 = massJohn2 / (heightJohn2 ** 2);

function compareBMIs(BMIMark, BMIJohn) {
    if (BMIMark > BMIJohn) {
        console.log(`Mark's BMI (${BMIMark.toFixed(2)}) is higher than John's (${BMIJohn.toFixed(2)})!`);
    } else if (BMIMark < BMIJohn) {
        console.log(`John's BMI (${BMIJohn.toFixed(2)}) is higher than Mark's (${BMIMark.toFixed(2)})!`);
    } else {
        console.log(`Mark and John have the same BMI (${BMIMark.toFixed(2)})!`);
    }
}

console.log("Data 1:");
compareBMIs(BMIMark1, BMIJohn1);
console.log("\nData 2:");
compareBMIs(BMIMark2, BMIJohn2);
