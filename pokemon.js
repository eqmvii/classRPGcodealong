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
        damage = damage.toFixed(2);
        if (damage < 0) {
            damage = 0;
        }
        console.log(`${this.name} hits ${defender.name} for ${damage} damage!`);
        defender.hp -= damage;
    };
    this.levelUp = function () {
        console.log(`${this.name} leveled up!`);
        this.attack += 1;
        this.defense += 1;
        this.special += 1;
        this.level += 1;
        this.hp = 100 + (5 * this.level); // restore all hp
        this.printStats();
    }
}
var pokemonArray = [];

pokemonArray.push(new Pokemon("Pikachu", 10));
pokemonArray.push(new Pokemon("Charmander", 10));
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
console.log("The battle is over!");
console.log(" = = = = = = = = = = = = = =");
if(pokemonArray[0].isAlive()){
    pokemonArray[0].levelUp();
    console.log(`${pokemonArray[1].name} was defeated.`);
} else {
    pokemonArray[1].levelUp();
    console.log(`${pokemonArray[0].name} was defeated.`);
}

pokemonStatus(pokemonArray);


// print out whether each pokemon is still alive, and if so, what their hitpoints are at 
function pokemonStatus(pokeArray) {
    pokeArray.forEach(function (pokemon) {
        if (pokemon.isAlive()) {
            console.log(`${pokemon.name} has (${pokemon.hp} / ${100 + pokemon.level * 5}) hitpoints`);
        }
        else {
            console.log(`${pokemon.name} is dead :(`);
        }
    })
}