"use strict";

const str = "Test";
const arr = [1, 2, 4];

// console.log(str[5]);

//console.log(str.toUpperCase());// верхний регистр
console.log(str.toLowerCase());  // нижний  регистр
console.log(str);

const fruit = "Some fruit port";

console.log(fruit.indexOf("t"));//  проверить на наличие символа

const logg = "01234567890tj57wybartu,rt rt rthrth";
//console.log(logg.slice(3,8)); //  вырезать с какого по какой символ

//console.log(logg.substring(3,8)); //вырезать с какого по какой символ

console.log(logg.substr(12,29)); //   обрезать от какого символа и количество символов

const num = 12.2;
console.log(Math.round(num));  // округление числа

const test = "12.2px";
//console.log(parseInt(test));// возвращает целое число
console.log(parseFloat(test));//  возвращает плавающее число