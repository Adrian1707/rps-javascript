function Game() {
  this.choices = ["rock","paper","scissors"];
  this.userChoice = "";
}

Game.prototype.userSelect = function(choice){
  this.userChoice = choice;
}
