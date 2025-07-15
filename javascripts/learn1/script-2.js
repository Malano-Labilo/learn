// Object.Create
//function declaration
// const methodFootballPlayer = {
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
//         // Agar prompt lebih rapi dan agar reuseable
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

// function FootballPlayer(
//     name,
//     age,
//     position,
//     team,
//     { attack = 0, defense = 0, physical = 0, vision = 0, skill = 0 } = {},
//     rating,
//     energy,
//     exercise
// ) {
//     let footballPlayer = Object.create(methodFootballPlayer);
//     footballPlayer.name = name;
//     footballPlayer.exercise = exercise;
//     footballPlayer.age = age;
//     footballPlayer.position = position;
//     footballPlayer.team = team;
//     footballPlayer.attributes = { attack, defense, physical, vision, skill };
//     footballPlayer.rating = rating;
//     footballPlayer.energy = energy;
//     return footballPlayer;
// }

// //Constructor Function
// function FootballPlayer(
//     name,
//     age,
//     position,
//     team,
//     { attack = 0, defense = 0, physical = 0, vision = 0, skill = 0 } = {},
//     rating,
//     energy
// ) {
//     // let footballPlayer = Object.create(methodFootballPlayer);
//     this.name = name;
//     this.age = age;
//     this.position = position;
//     this.team = team;
//     this.attributes = { attack, defense, physical, vision, skill };
//     this.rating = rating;
//     (this.energy = 24), (this.energy = energy);
// }

// FootballPlayer.prototype.exercise = function (time) {
//     this.energy -= time;
//     console.log(`Energy after exercise: ${this.energy} hours`);
//     // untuk menghindari penggunaan angka langsung, kita bisa menggunakan map
//     // untuk mengubah angka menjadi string yang lebih mudah dibaca
//     const attributeMap = {
//         1: "attack",
//         2: "defense",
//         3: "physical",
//         4: "vision",
//         5: "skill",
//     };
//     // Agar prompt lebih rapi dan agar reuseable
//     const input = prompt(
//         `Which you want attribute to increase?\n1. Attack\n2. Defense\n3. Physical\n4. Vision\n5. Skill`
//     );

//     const choice = Number(input);
//     const chosenAttribute = attributeMap[choice];

//     if (chosenAttribute) {
//         this.attributes[chosenAttribute] += time * 0.1;
//         console.log(
//             `${
//                 chosenAttribute.charAt(0).toUpperCase() +
//                 chosenAttribute.slice(1)
//             } increased to: ${this.attributes[chosenAttribute].toFixed(1)}`
//         );
//     } else {
//         console.log(
//             "Invalid choice. Please select a valid attribute.\nNo attribute was increased."
//         );
//     }

//     console.log("Attributes after exercise:");
//     for (let key in this.attributes) {
//         console.log(`- ${key}: ${this.attributes[key].toFixed(1)}`);
//     }
// };

// let Ronaldo = new FootballPlayer(
//     "Cristiano Ronaldo",
//     40,
//     "CF",
//     "Al-Nassr",
//     {
//         attack: 98,
//         defense: 70,
//         physical: 93,
//         vision: 88,
//         skill: 87,
//     },
//     94,
//     24
// );

//VERSI CLASS

class FootballPlayer {
    constructor(
        name,
        age,
        position,
        team,
        { attack = 0, defense = 0, physical = 0, vision = 0, skill = 0 } = {},
        rating,
        energy
    ) {
        this.name = name;
        this.age = age;
        this.position = position;
        this.team = team;
        this.attributes = { attack, defense, physical, vision, skill };
        this.rating = rating;
        (this.energy = 24), (this.energy = energy);
    }

    exercise(time) {
        this.energy -= time;
        console.log(`Energy after exercise: ${this.energy} hours`);
        // untuk menghindari penggunaan angka langsung, kita bisa menggunakan map
        // untuk mengubah angka menjadi string yang lebih mudah dibaca
        const attributeMap = {
            1: "attack",
            2: "defense",
            3: "physical",
            4: "vision",
            5: "skill",
        };
        // Agar prompt lebih rapi dan agar reuseable
        const input = prompt(
            `Which you want attribute to increase?\n1. Attack\n2. Defense\n3. Physical\n4. Vision\n5. Skill`
        );

        const choice = Number(input);
        const chosenAttribute = attributeMap[choice];

        if (chosenAttribute) {
            this.attributes[chosenAttribute] += time * 0.1;
            console.log(
                `${
                    chosenAttribute.charAt(0).toUpperCase() +
                    chosenAttribute.slice(1)
                } increased to: ${this.attributes[chosenAttribute].toFixed(1)}`
            );
        } else {
            console.log(
                "Invalid choice. Please select a valid attribute.\nNo attribute was increased."
            );
        }

        console.log("Attributes after exercise:");
        for (let key in this.attributes) {
            console.log(`- ${key}: ${this.attributes[key].toFixed(1)}`);
        }
    }
}
