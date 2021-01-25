
"use strict";

function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    } else {
        document.querySelector('body').classList.add('no-webp');
    }
});


//! var a = 0; устаревший способ объявления переменных
//! let b = a; Используем д
//! const c = a / b; используем для строго типизированных данных (в большинстве случаев)
//* Example const C = {}
//* C[1] = 12; в данном примере ошибка не появится так как в объект добавился ключ 1 со значением 12

// function test() {
//     console.log(testVar);
//     if (!testVar) {
//         console.log('Ok');
//     }
//     let testVar = b;
//     //return testVar;
// }

// //! Деструктуризация объектов и массивов

// let obj = {
//     a: 100,
//     b: 'str'
// }
// //* Сама деструктуризация объекта
// let { a, b } = obj;
// console.log(a);
// console.log(b);

// //* Деструктуризация массива
// let arr = [1, 2, 10];
// let [d, e, f] = arr;
// console.log(d);
// console.log(e);
// console.log(f);

//* Задачка
// let test2 = [{ a: 1, b: 2 }, { c: '1', d: '2', e: [3, 4] }];
// let [{ a, b }, { c, d, e: [g, f] }] = test2;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(g);
// console.log(f);

let testFunc1 = function () { }
let testFunc2 = (part1, part2) => {
    console.log(part1);
    console.log(part2);
}

//* Шаблонные строки
let str = '123';
let str2 = ''



