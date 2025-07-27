//For of VS For in
// Studying Javascript with the help of WPUnpas playlist 'Javascript Lanjutan' eps 17 Start At 09:50 27 July 2025

//Nodelist
const liName = document.querySelectorAll(".name");
console.log(liName);

// liName.forEach((n) => console.log(n.textContent));

// for (const n of liName) {
//     console.log(n.innerHTML);
// }

//arguments
function kalkulasi() {
    let jumlah = 0;
    for (a of arguments) {
        jumlah += a;
    }
    return jumlah;
}
console.log(kalkulasi(1, 2, 3, 4, 5));

//For in
const person = {
    name: "Malano",
    age: 18,
    address: "Jakarta",
};

for (const p in person) {
    console.log(`${p} : ${person[p]}`);
}
