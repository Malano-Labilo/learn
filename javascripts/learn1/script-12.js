//Studying Javascript with the help of WPUnpas playlist 'Javascript Lanjutan' eps 15 At 13:38 July 2025
//Destructuring Assignment / Destructuring Variables

//Destructuring Array
// const playersNames = [
//     "Erling Haaland",
//     "Cole Palmer",
//     "Phil Foden",
//     "Rico Lewis",
//     "Julián Álvarez",
//     "Lamine Yamal",
//     "Jude Bellingham",
//     "Jamal Musiala",
//     "Pedri",
//     "Gavi",
//     "Jeremy Doku",
//     "Alejandro Garnacho",
//     "Jérémy Frimpong",
//     "Josko Gvardiol",
// ];
//bisa skipping items dengan menambahkan koma di depannya
// const [
//     player1,
//     ,
//     ,
//     player4,
//     player5,
//     player6,
//     player7,
//     ,
//     player9,
//     ,
//     ,
//     player12,
// ] = playersNames;

//swapping items
// let a = 1,
//     b = 2;
// console.log(a, b);

// [a, b] = [b, a];
// console.log(a, b);

// return value pada function
// function getData() {
//     return [1, 2, 3, 4, 5];
// }
// const [a, b, c, d] = getData();
// console.log(a, b, c);

//Rest Parameter
// const [a, b, ...values] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(a, b, values, values.length, values[3]);

// Destructuring Object
// const person = {
//     name: "Paul Pogba",
//     age: 30,
//     country: "France",
// };

// const { name, age, country } = person;
// console.log(name, age, country);

//Assigment tanpa deklarasi object
// ({ name, age, country } = { name: "Paul Pogba", age: 30, country: "France" });

// console.log(name, country);

//Assigment dengan alias
// const person = {
//     name: "Buggy",
//     age: 30,
// };
// const { name: n, age: a } = person;
// console.log(n, a);

//Memverikan default value
const person = {
    name: "Shanks",
    age: 39,
    country: "East Blue",
    ship: "Red Force",
};

const { name: n, age: a, country: c, ship: s = "Unknown" } = person;
console.log(n, a, c, s);
