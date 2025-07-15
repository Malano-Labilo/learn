// Membuat Object Pada Javascript
// * Object Literal

// let footballPlayer = {
//     name: "Cristiano Ronaldo",
//     age: 38,
//     position: "Forward",
//     team: "Al Nassr",
//     attributes: {
//         attack: 95,
//         defense: 70,
//         physical: 90,
//         vision: 85,
//         skill: 95,
//     },
//     rating: 9.5,
//     energy: 24,
//     exercise: function (time) {
//         this.energy -= time;
//         console.log(`Energy after exercise: ${this.energy} hours`);

//         // untuk menghindari penggunaan angka langsung, kita bisa menggunakan map
//         // untuk mengubah angka menjadi string yang lebih mudah dibaca
//         const attributeMap = {
//             1: "attack",
//             2: "defense",
//             3: "physical",
//             4: "vision",
//             5: "skill",
//         };

//         const input = prompt(
//             `Which you want attribute to increase?\n1. Attack\n2. Defense\n3. Physical\n4. Vision\n5. Skill`
//         );

//         const choice = Number(input);
//         const chosenAttribute = attributeMap[choice];

//         if (chosenAttribute) {
//             this.attributes[chosenAttribute] += time * 0.1;
//             console.log(
//                 `${
//                     chosenAttribute.charAt(0).toUpperCase() +
//                     chosenAttribute.slice(1)
//                 } increased to: ${this.attributes[chosenAttribute].toFixed(1)}`
//             );
//         } else {
//             console.log(
//                 "Invalid choice. Please select a valid attribute.\nNo attribute was increased."
//             );
//         }

//         console.log("Attributes after exercise:");
//         for (let key in this.attributes) {
//             console.log(`- ${key}: ${this.attributes[key].toFixed(1)}`);
//         }
//     },
// };

// * Function Declaration
// function ExerciseFootballPlayer(
//     name,
//     age,
//     position,
//     team,
//     { attack = 0, defense = 0, physical = 0, vision = 0, skill = 0 } = {},
//     rating,
//     energy,
//     exercise
// ) {
//     let footballPlayer = {};
//     footballPlayer.name = name;
//     footballPlayer.exercise = exercise;
//     footballPlayer.age = age;
//     footballPlayer.position = position;
//     footballPlayer.team = team;
//     footballPlayer.attributes = { attack, defense, physical, vision, skill };
//     footballPlayer.rating = rating;
//     footballPlayer.energy = energy;
//     footballPlayer.exercise = function (time) {
//         this.energy -= time;
//         console.log(`Energy after exercise: ${this.energy} hours`);
//         // untuk menghindari penggunaan angka langsung, kita bisa menggunakan map
//         // untuk mengubah angka menjadi string yang lebih mudah dibaca
//         const attributeMap = {
//             1: "attack",
//             2: "defense",
//             3: "physical",
//             4: "vision",
//             5: "skill",
//         };

//         const input = prompt(
//             `Which you want attribute to increase?\n1. Attack\n2. Defense\n3. Physical\n4. Vision\n5. Skill`
//         );

//         const choice = Number(input);
//         const chosenAttribute = attributeMap[choice];

//         if (chosenAttribute) {
//             this.attributes[chosenAttribute] += time * 0.1;
//             console.log(
//                 `${
//                     chosenAttribute.charAt(0).toUpperCase() +
//                     chosenAttribute.slice(1)
//                 } increased to: ${this.attributes[chosenAttribute].toFixed(1)}`
//             );
//         } else {
//             console.log(
//                 "Invalid choice. Please select a valid attribute.\nNo attribute was increased."
//             );
//         }

//         console.log("Attributes after exercise:");
//         for (let key in this.attributes) {
//             console.log(`- ${key}: ${this.attributes[key].toFixed(1)}`);
//         }
//     };
//     return footballPlayer;
// }

// const haaland = ExerciseFootballPlayer(
//     "Erling Haaland",
//     24,
//     "Striker",
//     "Manchester City",
//     { attack: 99, physical: 95 },
//     9.6,
//     20
// );

// console.log(haaland.attributes);

// * Constructor Function (keyword new)
// function ExerciseFootballPlayer(
//     name,
//     age,
//     position,
//     team,
//     { attack = 0, defense = 0, physical = 0, vision = 0, skill = 0 } = {},
//     rating,
//     energy,
//     exercise
// ) {
//     this.name = name;
//     this.exercise = exercise;
//     this.age = age;
//     this.position = position;
//     this.team = team;
//     this.attributes = { attack, defense, physical, vision, skill };
//     this.rating = rating;
//     this.energy = energy;
//     this.exercise = function (time) {
//         this.energy -= time;
//         console.log(`Energy after exercise: ${this.energy} hours`);
//         // untuk menghindari penggunaan angka langsung, kita bisa menggunakan map
//         // untuk mengubah angka menjadi string yang lebih mudah dibaca
//         const attributeMap = {
//             1: "attack",
//             2: "defense",
//             3: "physical",
//             4: "vision",
//             5: "skill",
//         };

//         const input = prompt(
//             `Which you want attribute to increase?\n1. Attack\n2. Defense\n3. Physical\n4. Vision\n5. Skill`
//         );

//         const choice = Number(input);
//         const chosenAttribute = attributeMap[choice];

//         if (chosenAttribute) {
//             this.attributes[chosenAttribute] += time * 0.1;
//             console.log(
//                 `${
//                     chosenAttribute.charAt(0).toUpperCase() +
//                     chosenAttribute.slice(1)
//                 } increased to: ${this.attributes[chosenAttribute].toFixed(1)}`
//             );
//         } else {
//             console.log(
//                 "Invalid choice. Please select a valid attribute.\nNo attribute was increased."
//             );
//         }

//         console.log("Attributes after exercise:");
//         for (let key in this.attributes) {
//             console.log(`- ${key}: ${this.attributes[key].toFixed(1)}`);
//         }
//     };
// }

// const garnacho = new ExerciseFootballPlayer(
//     "garnacho",
//     20,
//     "Left Wings",
//     "Manchester United",
//     { attack: 88, physical: 70 },
//     9.6,
//     20
// );

// console.log(garnacho.attributes);

// * Object.create()
// Dilanjutkan di file script-2.js
