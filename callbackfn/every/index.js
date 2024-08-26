function every(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (!callback(array[i])) {
            return false;
        }
    }
    return true;
}

const isBelowThreshold = (currentValue) => currentValue > 40;
const array = [41, 50, 49, 79, 90, 93];

console.log(every(array, isBelowThreshold)); 