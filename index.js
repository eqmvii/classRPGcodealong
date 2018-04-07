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
    this.greet = function () {
        console.log(`Oh hello! My name is ${this.name}.`);
    };
    this.printStats = function () {
        console.log(`${this.name}'s stats:`);
        console.log(`Name: ${this.name} | lvl: ${this.level} | HP: ${this.hp} | att: ${this.attack} | def: ${this.defense} | spcl: ${this.special}`);
    };
    this.isAlive = () => this.hp > 0;
    this.battle = function(defender) {
        defender.hp -= this.attack;
    }
}
var pokemonArray = [];

pokemonArray.push(new Pokemon("Pikachu", 3));
pokemonArray.push(new Pokemon("Charmander", 5));
// pokemonArray.push(new Pokemon("Blastoise", 50));

// initial stats print
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

pokemonStatus(pokemonArray);
pokemonArray[0].battle(pokemonArray[1]);
pokemonStatus(pokemonArray);

// state 
function pokemonStatus(pokeArray) {
    pokeArray.forEach(function (pokemon) {
        if (pokemon.isAlive()) {
            console.log(`${pokemon.name} has ${pokemon.hp} hitpoints`);
        }
        else {
            console.log(`${pokemon.name} is dead :(`);
        }
    })
}