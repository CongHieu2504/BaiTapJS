function reduce(array, callback, initialValue) {
    let accumulator = initialValue;
    for (let i = 0; i < array.length; i++) {
        accumulator = callback(accumulator, array[i], i, array);
    }
    return accumulator;
}

// Ví dụ sử dụng
const numbers = [1, 2, 3, 4];
const sum = reduce(numbers, (acc, num) => acc + num, 0);

console.log(sum);