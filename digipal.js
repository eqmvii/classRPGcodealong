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
    kindOfPet(myPet);
});

function kindOfPet(digipal){
    inquirer.prompt([
        {
            type: "list",
            name: "petType",
            message: `What kind of digital pal is ${digipal.name}?`,
            choices: ["dog", "cat", "neither"]
        }
    ]).then(function(answers){
        var actionsArray = ["feed", "sleep", "play"];
        if(answers.petType === "dog"){
            // console.log("No dog yet!");
            digipal.outside = false;
            digipal.bark = function () { console.log("woof! woof!"); };
            digipal.goOutside = function () { 
                if(this.outside){
                    console.log("I am already outside!");
                }
                else {
                    console.log("I am going outside!");
                    this.outside = true;
                }
            };
            digipal.goInside = function () {
                if (this.outside) {
                    console.log("I am going inside now!");
                    this.outside = false;
                } else {
                    console.log("I am already inside!");
                }
            };
            actionsArray.push("bark");
            actionsArray.push("go outside");
            actionsArray.push("go inside");
        } else if (answers.petType === "cat") {
            console.log("No cat implemented yet!");
        }
        actionsArray.push("quit");
        gameLoop(digipal, actionsArray);

    });
}

function gameLoop(digipal, actionsArray) {
    inquirer.prompt([
        {
            type: "list",
            name: "action",
            message: `Do something with ${digipal.name}?`,
            choices: actionsArray
        }
    ]).then(function(answers) {
        if (answers.action === "feed") {
            digipal.feed();
        } else if (answers.action === "sleep") {
            digipal.sleep();
        } else if (answers.action === "play") {
            digipal.play();
        } else if (answers.action === "bark") {
            digipal.bark();
        } else if (answers.action === "go outside") {
            digipal.goOutside();
        } else if (answers.action === "go inside") {
            digipal.goInside();
        } else if (answers.action === "quit") {
            console.log("Goodbye!");
            return;
        } else {
            console.log("Action not yet implemented");
        }
        setTimeout(function() {
            gameLoop(digipal, actionsArray);
        }, 250)
    })

}