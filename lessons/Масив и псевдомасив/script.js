"use strict";

// const arr = [0, 1, 3, 4, 6, 8, 45, 23];

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри масива ${arr}`);
// });
// console.log(arr.length);
// arr.pop();
// arr.push(23);

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[3]);
// }

// for (let value of arr){
//     console.log(value);
// }
const str = prompt("", "");
const products = str.split(", ");
console.log(products);
products.sort();
console.log(products.join("; "));