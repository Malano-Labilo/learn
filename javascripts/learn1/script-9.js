//High Order Functions Part 3
//Exercise

// ambil semua element durasi pertandingan
const gamesDuration = Array.from(
    document.querySelectorAll("[data-games-duration]")
);

//Ambil nama dari isi element <li> (tanpa <span>) dan filter berdasarkan huruf awal
//pilih fighter dengan nama depan i dan a
const firstNameIAndA = gamesDuration.filter((value) => {
    // clone value agar kita bisa manipulasi tanpa ganggu DOM
    const cloned = value.cloneNode(true);
    //hapus semua element <span> di dalamnya (agar tidak ikur diambil sebagai nama)
    cloned.querySelectorAll("span").forEach((span) => span.remove());
    //ambil nama dari isi element <li>
    const fighterName = cloned.textContent.trim();
    //ambil huruf pertama dari nama depan
    const firstLetter = fighterName.charAt(0).toUpperCase();
    //kembalikan true jika huruf pertama adalah I atau A
    return firstLetter === "I" || firstLetter === "A";
});
//ambil durasi pertandingan dari masing-masing fighter
let firstNameIAndAGamesDuration = firstNameIAndA
    .map((item) => item.dataset.gamesDuration)
    //ubah durasi pertandingan menjadi int, ubah jam dan menit menjadi detik
    .map((duration) => {
        const [hours, minutes, seconds] = duration.split(":").map(Number);
        return hours * 3600 + minutes * 60 + seconds;
    })
    //jumlahkan semua detik dari semua fighter
    .reduce((total, current) => total + current, 0);
//ubah formatnya jadi jam menit detik
let hours = Math.floor(firstNameIAndAGamesDuration / 3600);
firstNameIAndAGamesDuration = firstNameIAndAGamesDuration - hours * 3600;
const minutes = Math.floor(firstNameIAndAGamesDuration / 60);
const seconds = firstNameIAndAGamesDuration - minutes * 60;
//simpan di DOM

document.querySelector(".total-fighter").textContent = firstNameIAndA.length;
document.querySelector(
    ".total-wdl"
).textContent = `${hours} hours ${minutes} minutes ${seconds} seconds`;
