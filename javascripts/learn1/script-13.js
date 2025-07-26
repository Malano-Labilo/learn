//Destructuring
// Studying Javascript with the help of WPUnpas playlist 'Javascript Lanjutan' eps 16 Start At 10:04 26 July 2025

// Destructuring Array
function kalkulasi(a, b) {
    return [a * b, a / b, a + b, a - b];
}
const [kali, bagi, tambah, kurang = "tidak ada"] = kalkulasi(6, 5);
console.log(kali);

// Destructuring Object
function kalkulasiObjek(a, b) {
    return {
        kali: a * b,
        bagi: a / b,
        tambah: a + b,
        kurang: a - b,
    };
}

const {
    bagi: bag,
    kali: kal,
    tambah: tam,
    kurang: kur = "tidak ada",
} = kalkulasiObjek(6, 5);
console.log(kal);
console.log(bag);
console.log(tam);
