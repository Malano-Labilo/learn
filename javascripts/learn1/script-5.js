//Function Expression

const showName1 = function (name) {
    return `Hello, my name is ${name}!\n\n\n`;
};
console.log(showName1("Maulana")); //

//Arrow Function versi lengkap
const showName2 = (waktu, name) => {
    return `Hello, good ${waktu} my name is ${name}!\n\n\n`;
};
console.log(showName2("night", "Malano"));

//Arrow Function versi singkat (hanya boleh jika hanya ada satu parameter)
// jika isinya hanya return, bisa langsung ditulis tanpa return dan kurung kurawal
const showName3 = (name) => `Hello, my name is ${name}!\n\n\n`;
console.log(showName3("Billow"));

//Arrow Function tanpa parameter
const showName4 = () => `Hello, my name is Billow!\n\n\n`;
console.log(showName4());

// footballPlayers array
let footballPlayers = ["Ronaldo", "Messi", "Neymar", "Mbappe"];
let totalNameAlphabetized = footballPlayers.map(function (name) {
    return name.length;
});
console.log(totalNameAlphabetized + `\n\n\n`);

// footballPlayers array versi arrow function
footballPlayers2 = [
    "Garnacho",
    "Jude Bellingham",
    "Lamine Yamal",
    "Cole Palmer",
];
let totalNameAlphabetized2 = footballPlayers2.map((name) => name.length);
console.log(totalNameAlphabetized2 + `\n\n\n`);
