"use strict";

// const options = {
//     name: 'test',
//     width: "1024",
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function() {
//         console.log("Test");
//     }

// };

// options.makeTest();

// console.log(Object.keys(options).length);


// const {border, bg} = options.colors;
// console.log(border);
// console.log(bg);
// // console.log(options.name);

// delete options.name;

// console.log(options);
// let counter = 0;
// for (let key in options) {
//     if(typeof(options[key]) === 'object') {
//         for (let i in options[key]) { 
//             console.log(`Свойство ${i} имеет  значение ${options[key][i]}`);
//             // counter++;
//         }
//     } else {
//         console.log(`Свойство ${key} имеет  значение ${options[key]}`);//перебрать обьекты
//         counter++;
//     }
   
// }

// console.log(counter);


// обьектно ориентированое програмирование
// let str ="some";
// let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

console.dir([1,2,3]);
 
const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log("Hello");
    }
};

const jonh = Object.create(soldier);
// Object.setPrototypeOf(jonh, soldier);
jonh.sayHello();