function map(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i], i, array));
    }
    return result;
}

// Ví dụ sử dụng
const numbers = [1, 2, 3, 4];
const doubled = map(numbers, (num) => num * 2);

console.log(doubled); // Output: [2, 4, 6, 8]