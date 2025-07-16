//Excution

//CREATION PHASE
// console.log(nama1); // tampil error

// console.log(nama2); //tampil undefined
// var nama2 = "Maulana";

// var nama2 = "Maulana";
// console.log(nama2); //tampil Maulana

//EXECUTION PHASE
console.log(menyapa()); //tampilannya sebagai berikut
//Halo, nama saya undefined, saya undefined tahun.

var nama = "Maulana";
var umur = 21;
console.log(menyapa()); //tampilannya sebagai berikut
//Halo, nama saya Maulana, saya 21 tahun.
function menyapa() {
    return `Halo, nama saya ${nama}, saya ${umur} tahun.`;
}
