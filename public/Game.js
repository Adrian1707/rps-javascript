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

Game.prototype.lose = function(){
  if(this.userChoice == "Rock" && this.opponentChoice == "Paper" ||
    this.userChoice == "Paper" && this.opponentChoice == "Scissors" ||
    this.userChoice == "Scissors" && this.opponentChoice == "Rock"){
    return true;
  }
  else{
    return false;
  };
}

Game.prototype.result = function(){
  if(this.win() == true){
    return "Player wins";
  }
  else if(this.draw() == true){
    return "It's a draw";
  }
  else{
    return "Computer wins";
  }
}

module.exports = {  
    Game : Game 
}  


// var game = new Game();

// game.userSelect("Paper")

// game.compChoice();

// debug(game.result());
// debug("You chose " + game.userChoice)
// debug("Computer chose " + game.opponentChoice)


// var items = ["rock","paper","scissors"]

// var random = items[Math.floor(Math.random()*items.length)]

// debug(random);