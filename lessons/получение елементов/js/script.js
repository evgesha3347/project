'use strict';

// const box = document.getElementById("box");//
// console.log(box);

// const btns = document.getElementsByTagName("button");
// console.log(btns[3]);

// const circles = document.getElementsByClassName("circle");
// console.log(circles);

// const hearts = document.querySelectorAll(".heart");
// console.log(hearts[0]);

// hearts.forEach(item => {
//     console.log(item);    
// });

// const oneHeart = document.querySelector('.heart');
// console.log(oneHeart);
const box = document.getElementById("box"),
      btns = document.getElementsByTagName("button"),
      circles = document.getElementsByClassName("circle"),
      hearts = document.querySelectorAll(".heart"),
      oneHeart = document.querySelector('.heart'),
      wrapper =  document.querySelector('.wrapper');

// box.style.backgroundColor = 'blue';
// box.style.width = '50px';
// box.style.height = '40px';   
// box.style.cssText = "background-color: green; width: 200px";
// // box.style.cssText = `background-color: green; width: ${num}px`;

// btns[1].style.borderRadius = '100%';
// circles[0].style.backgroundColor = 'red';
// circles[2].style.backgroundColor = 'green';
// btns[3].style.width = '100px';
// btns[3].style.height = '80px';
// btns[4].style.height = '120px';
// btns[4].style.width = '120px';
// btns[4].style.borderRadius = '100%';
// btns[4].style.backgroundColor = 'turquoise';

// for (let i = 0; i < hearts.length; i++){
//     hearts[i].style.backgroundColor = 'blue';
// }

// hearts.forEach(item=> {
//     item.style.backgroundColor ='brown';
// });

const div = document.createElement('div');
// const text = document.createTextNode('hello');
div.classList.add('black');
// document.body.append(div);
// document.querySelector('.wrapper').append(div);
wrapper.append(div);
// wrapper.appendChild(div);старый формат

// wrapper.prepend(div);
// hearts[0].before(div);
// hearts[1].after(div);
// wrapper.insertBefore(div, hearts[1]);

// circles[0].remove();
wrapper.removeChild(hearts[1] [0]);

// hearts[0].replaceWith(circles[0]);
// wrapper.replaceChild(circles[0], hearts[0]);
// div.innerHTML = 'Hello world';
// div.innerHTML = "<h1>Hello world</h1>";

// // div.textContent = "hello";

// div.insertAdjacentHTML('beforebegin', '<h2>helo</h2>');
// div.insertAdjacentHTML('afterbegin', '<h2>helo</h2>');
// div.insertAdjacentHTML('beforeend', '<h2>helo</h2>');
// div.insertAdjacentHTML('aftereend', '<h2>helo</h2>');