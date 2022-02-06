
// console.log(document.body); // обращение к родителю
// console.log(document.documentElement);// обращение к всему HTML
// console.log(document.body.firstChild);
// console.log(document.body.lastChild);
console.log(document.body.childNodes);
// console.log(document.querySelector('#current').parentNode.parentNode.parentNode);// получение родителя на шаг выше
// console.log(document.querySelector('[data-current="3"]').previousSibling);
// console.log(document.querySelector('[data-current="3"]').nextElementSibling);
for (let node of document.body.childNodes) {
    if (node.nodeName == '#text') {    //оставляет елементы 
        continue;
    }
    console.log(node);
}