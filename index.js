console.log("Booting up RPG exmaple!");

function Pokemon(name, level = 1) {
    // Stats
    this.name = name;
    this.level = level;
    this.hp = 100 + (5 * level);
    this.attack = 10 + level;
    this.defense = 10 + level;
    this.special = 10 + level;

    // Methods
    this.greet = function() {
        console.log(`Oh hello! My name is ${this.name}.`);
    };
    this.printStats = function() {
        console.log(`${this.name}'s stats:`);
        console.log(`Name: ${this.name} | lvl: ${this.level} | HP: ${this.hp} | att: ${this.attack} | def: ${this.defense} | spcl: ${this.special}`);
    };
    this.isAlive = () => this.hp > 0;
}
var pokemonArray = [];

pokemonArray.push(new Pokemon("Pikachu"));
pokemonArray.push(new Pokemon("Charmander", 5));

for (let i = 0; i < pokemonArray.length; i++) {
    let curPokemon = pokemonArray[i];
    curPokemon.greet();
    curPokemon.printStats();
    if (curPokemon.isAlive()) {
        console.log(`${curPokemon.name} is alive!`);
    }
    else {
        console.log(`${curPokemon.name} is dead :(`);
    }
}