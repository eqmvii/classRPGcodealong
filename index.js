console.log("Booting up RPG exmaple!");

function Character(name){
    this.name = name;
    this.greet = function() {
        console.log(`Oh hello! My name is ${this.name}.`);
    }
}

var pikachu = new Character("pikachu");
pikachu.greet();