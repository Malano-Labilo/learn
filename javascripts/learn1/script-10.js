//Template Literals / Template Strings
const name = "John",
    age = 27;
console.log(`Hallo, My name is ${name}, and i am ${age} years old.`);

//Embedded Expressions
console.log(`5 faktorial adalah 5 * 4 * 3 * 2 * 1 = ${5 * 4 * 3 * 2 * 1}`);
// console.log(`${alert("ini adalah hasil dari 5! atau 5 faktorial = 120")}`);
const x = 10;
//Ternary Operator
console.log(
    `${x >= 10 ? "lebih besar atau sama dengan 10" : "lebih kecil dari 10"}`
);

//HTML Fragments
const html = `
    <div class="container">
        <h1>Hallo, My name is ${name}, and i am ${age} years old.</h1>
        <p>Ini adalah contoh penggunaan template literals untuk membuat HTML fragment.</p>
    </div>
`;
console.log(html);
