"use strict";

function first() {
    setTimeout (function() {
    console.log(1);
    }, 5000);
}
function second() {
    console.log(2);
}
first();
second();

function learnJs(lang, ballback){
console.log(`Я учу: ${lang}`);
//callback();
}
function done(){
    console.log("Я прошел этот урок");
}
learnJs('Java script', done);

// learnJs('Java script', function(){
    // console.log("Я прошел этот урок");
    // });