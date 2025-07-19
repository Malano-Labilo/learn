const footballPlayers = function () {
    this.name = "Cristiano Ronaldo";
    this.age = 36;
    this.country = "Portugal";
    this.introducing = () =>
        `Hello, my name is ${this.name}, I am ${this.age} years old and I am from ${this.country}.`;

    // setInterval(() => {
    //     console.log(this.age);
    // }, 1000);
};

const player = new footballPlayers();
console.log(player.introducing());
