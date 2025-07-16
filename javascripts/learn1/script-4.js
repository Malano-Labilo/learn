// function init() {
//     let name = "Maulana";
//     function showName() {
//         console.log(name);
//     }
//     return showName;
// }
// let callName = init();
// callName();

let counter = 100;

let add = (function () {
    let counter = 0;
    return function () {
        return ++counter;
    };
})();

// let counter = 100;
console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
