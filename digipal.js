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
    };
    // * The second method is "sleep()" - If sleepy is true, print `Zzzzzzzz`, set sleepy to false, then set bored to true, and then run increaseAge(). If sleepy is false, print "No way! I'm not tired."
    this.sleep = function() {
        if(this.sleepy){
            console.log("Zzzzzz");
            this.sleepy = false;
            this.bored = true;
            this.increaseAge();
        } else {
            console.log("No way! I am not tired!");
        }
    };
    this.increaseAge = function() {
        this.age += 1;
        console.log(`Happy Birthday to ${this.name}! I am ${this.age} unit(s) of time old!`)
    };
    //  The third method is "play()" - If bored is true, print "Yay! Let's play!", set bored to false, and then set hungry to true. If bored is false, print "Not right now. Later?"
    this.play = function() {
        if (this.bored) {
            console.log("Yay! Let's play!");
            this.bored = false;
            this.hungry = true;
        } else {
            console.log("Nah let's not play now. Later?");
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
            message: `Do something with ${digipal.name}?`,
            choices: ["feed", "sleep", "play", "quit"]
        }
    ]).then(function(answers) {
        if (answers.action === "feed") {
            digipal.feed();
        } else if (answers.action === "sleep") {
            digipal.sleep();
        } else if (answers.action === "play") {
            digipal.play();
        } else if (answers.action === "quit") {
            console.log("Goodbye!");
            return;
        } else {
            console.log("Action not yet implemented");
        }
        setTimeout(function() {
            gameLoop(digipal);
        }, 250)
    })

}