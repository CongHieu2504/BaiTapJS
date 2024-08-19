// Test Data
let bill1 = 275;
let bill2 = 40;
let bill3 = 430;

// Function to calculate the tip and total value
function calculateTip(bill) {
    // Ternary operator to determine the tip
    let tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;
    let totalValue = bill + tip;
    console.log(`The bill was ${bill}, the tip was ${tip.toFixed(2)}, and the total value ${totalValue.toFixed(2)}`);
}

// Calculate for each bill
calculateTip(bill1);
calculateTip(bill2);
calculateTip(bill3);
