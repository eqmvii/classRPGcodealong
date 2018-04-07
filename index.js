console.log("Booting up RPG exmaple!");

function Pokemon(name, level = 0) {
    // Stats
    this.name = name;
    this.level = level;
    this.hp = 100;
    this.attack = 10;
    this.defense = 10;
    this.special = 10;

    // Methods
    this.greet = function() {
        console.log(`Oh hello! My name is ${this.name}.`);
    };
    this.printStats = function(){
        console.log(`${this.name}'s stats:`);
        console.log(`Name: ${this.name} | lvl: ${this.level} | HP: ${this.hp} | att: ${this.attack} | def: ${this.defense} | spcl: ${this.special}`);
    };
}

var pikachu = new Pokemon("pikachu");
pikachu.greet();
pikachu.printStats();