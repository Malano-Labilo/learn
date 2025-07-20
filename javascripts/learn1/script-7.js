// high order function
// console.log("Tidak ada code yang dituliskan di sesi ini");

// //contoh tidak menggunakan High Order Function
// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

// contoh menggunakan High Order Function
function repeat(n, action) {
    for (let i = 0; i < n; i++) {
        action("Ternyata bisa begini ya caranya!" + i);
    }
}
repeat(6, alert);
