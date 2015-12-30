var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var session = require('express-session');
// require('./public/Game');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', './views');
app.set('view engine', 'jade');
// app.use(express.static(__dirname + "/public"));


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


app.use(session({
  secret: "Adrian's secret",
  resave: false,
  saveUninitialized: false
}))


app.get('/', function (req, res) {
  res.render('index');
});

app.get('/weapon', function (req, res){
	var user_name = req.session.player;
	res.render('weapon', { name: user_name } );
});

app.post('/weapon/:name',function (req,res){
	req.session.player = req.body.user;
	res.redirect('/weapon');
});

app.get('/play', function (req,res){
	var user_weapon = req.session.weapon;
	var comp_weapon = req.session.comp_choice;
	var result = req.session.result;
	res.render('play', { user_weapon: user_weapon, comp_weapon: comp_weapon, result: result});
})

app.post('/play/:weapon', function (req,res){
	req.session.game = new Game();
	var game = req.session.game;
	req.session.weapon = req.body.weapon;
	var user_choice = game.userSelect(req.session.weapon);
	req.session.comp_choice = game.compChoice();
	req.session.result = game.result();
	res.redirect('/play');
})

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});


