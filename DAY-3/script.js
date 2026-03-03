// Rotate an array to the left by k positions

let arr = [1, 2, 3, 4, 5];
let k = 2;

let result = arr.slice(k).concat(arr.slice(0, k));

console.log(result);