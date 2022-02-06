"use strict";

let str = "some";
let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

console.dir([1,2,3]);

const soldier = {
    health: 400,
    armor:  100,
    sayHello: function() {
        console.log('hello');
    }
};

const jonh = Object.create(soldier);

// Object.setPrototypeOf(jonh, soldier);
jonh.sayHello();

// const jonh = {
//     health: 200
// };



// jonh.__proto__ = soldier;    // старый код prototype

// console.log(jonh);

// console.log(jonh.armor);

