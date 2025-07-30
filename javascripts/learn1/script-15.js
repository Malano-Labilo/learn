//Rest Parameter /Spread Operator

const person = ["Malano", "Labilo", "Khoelho"];

console.log(...person);
console.log(...person[0]);

const liPlayer = document.querySelectorAll("li");
const player = [...liPlayer].map((m) => m.textContent);
console.log(player);
