// digitalpal.js
// create an exciting tamagotchi experience in node.js!

var inquirer = require("inquirer");

var DigitalPal = function(name) {
    this.name = name;
    this.hungry = false;
    this.sleepy = false;
    this.bored = true;
    this.age = 0;
    this.greet = function(){
        console.log(`Hello I am ${this.name}!`);
    };
    this.feed = function() {
        if (this.hungry) {
            this.hungry = false;
            this.sleepy = true;
            console.log("Thanks for the food!");
        } else {
            console.log("No thanks, I am full!");
        }
    }
}

inquirer.prompt([
    {
      type: "input",
      name: "petName",
      message: "What shold we name your neat digital pet?"
    }
]).then(function(answers) {
    console.log(answers);
    var myPet = new DigitalPal(answers.petName);
    myPet.greet();
    gameLoop(myPet);
});

function gameLoop(digipal) {
    inquirer.prompt([
        {
            type: "list",
            name: "action",
            message: "Do something with your digital pal?",
            choices: ["feed", "pet", "walks", "quit"]
        }
    ]).then(function(answers) {
        if (answers.action === "feed") {
            digipal.feed();
        } else if (answers.action === "quit") {
            console.log("Goodbye!");
            return;
        } else {
            console.log("Action not yet implemented");
        }
        setTimeout(function() {
            gameLoop(digipal);
        }, 500)
    })

}