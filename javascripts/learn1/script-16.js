//Rest Parameter

function eksponensial(...angka) {
    // let total = 1;
    // for (const a of angka) {
    //     total = total * a;
    // }
    // return total;
    return angka.reduce((a, b) => a * b);
}

const kalkulasikan = eksponensial(2, 2, 2, 2, 2, 2, 2, 2, 2, 2);

console.log(kalkulasikan);

//filtering
function filteringBy(type, ...values) {
    return values.filter((f) => typeof f === type);
}

console.log(filteringBy("string", 1, 2, "malano", NaN, false, 55, 999, true));
