//Hight Order Function Part 2
//Filter, Map & Reduce

const numbers = [1, -3, 0.3, 7.2, 5, -2, 4.1, 2, -1, 3.5, 6, -4];

// Filter: mencari angka yang lebih besar dari 1
//menggunakan for
const newNumbers = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 1) {
        newNumbers.push(numbers[i]);
    }
}
console.log(newNumbers);

//menggunakan filter
const newNumbers2 = numbers.filter((value) => value > 1);
console.log(newNumbers2);

//map
//mengkalikan semua angka dengan 10
const newNumbers3 = numbers.map((value) => value * 10);
console.log(newNumbers3);

//reduce
//menjumlahkan semua elemen dalam array
const total = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue
);
console.log(total);

//Method Chaining
//Cari angka > 1 lalu kalikan 2 lalu jumlahkan seluruhnya
const total2 = numbers
    .filter((number) => number > 1)
    .map((number) => number * 2)
    .reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(total2);
