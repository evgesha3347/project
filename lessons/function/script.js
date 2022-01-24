"use strict";

function showFirstMessage() {            
    console.log("Hello world!");
}

showFirstMessage();

function showFirstMessage(text) {  
    console.log(text);
}

showFirstMessage("Hello world!");


let num = 10;
function showFirstMessage(text) {  // function declaration  
    console.log(text);             // создается до начала выполнения скрипта 
  let num = 20;                    // можно вызвать перед обьявлением
}

showFirstMessage("Hello world!");
console.log(num);

function calc(a, b) {
    return (a + b);
}

console.log(calc(4, 6));
console.log(calc(5, 6));
console.log(calc(10, 6));

 function ret(){
     let num = 50;
     return num;
 }

 const anotherNum  = ret();
 console.log(anotherNum);


 const logger = function() {    //function expression 
     console.log("hello");      // создается когда доходит поток кода. вызвать только после обьявления
 };

 logger();

 //const calc = (a, b) => { return a + b };
  const calc1 = (a, b) => {    //стрелочная функция
      console.log('1');        // не имеет своего контекста (this)
      return a + b;
  };