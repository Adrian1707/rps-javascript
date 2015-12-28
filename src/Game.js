function Game() {
  this.choices = ["Rock","Paper","Scissors"];
  this.userChoice = "";
  this.opponentChoice = "";
}

Game.prototype.userSelect = function(choice){
  this.userChoice = choice;
}

Game.prototype.compChoice = function(){
  this.opponentChoice = this.choices[Math.floor(Math.random()*this.choices.length)];
  return this.opponentChoice;
}

Game.prototype.draw = function(){
  if(this.userChoice === this.opponentChoice){
    return true;
  }
  else{
    return false;
  };
}

Game.prototype.win = function(){
  if(this.userChoice == "Rock" && this.opponentChoice == "Scissors" ||
    this.userChoice == "Paper" && this.opponentChoice == "Rock" ||
    this.userChoice == "Scissors" && this.opponentChoice == "Paper"){
    return true;
  }
  else{
    return false;
  };
}

var game = new Game();

game.userSelect("Rock")

game.compChoice();

// debug(game.draw());


// var items = ["rock","paper","scissors"]

// var random = items[Math.floor(Math.random()*items.length)]

// debug(random);