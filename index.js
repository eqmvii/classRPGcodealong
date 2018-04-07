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
        var damage = (Math.random() * this.attack) - (defender.defense / 10);
        if (damage < 0) {
            damage = 0;
        }
        console.log(`${this.name} hits ${defender.name} for ${damage} damage!`);
        defender.hp -= damage;
        defender.hp = defender.hp.toFixed(2);
    }
}
var pokemonArray = [];

pokemonArray.push(new Pokemon("Pikachu", 60));
pokemonArray.push(new Pokemon("Charmander", 57));
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
while (pokemonArray[0].isAlive() && pokemonArray[1].isAlive()) {
    pokemonArray[0].battle(pokemonArray[1]);
    pokemonArray[1].battle(pokemonArray[0]);
    // pokemonStatus(pokemonArray);
}
console.log(" = = = = = = = = = = = = = =");
console.log("A pokemon died!!!");
console.log(" = = = = = = = = = = = = = =");

pokemonStatus(pokemonArray);


// print out whether each pokemon is still alive, and if so, what their hitpoints are at 
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