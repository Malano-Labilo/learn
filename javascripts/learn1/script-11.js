//Tagged Template Literals
const name = "Elon Musk",
    age = 52,
    country = "USA";

function test(parameternya, ...values) {
    return parameternya.reduce(
        (result, str, index) => `${result}${str}${values[index] || ""}`,
        ""
    );
}

const str = test`Hallo, my name is ${name}, I am ${age} years old and I live in ${country}.`;
console.log(str);
