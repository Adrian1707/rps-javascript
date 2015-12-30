var express = require('express');
var bodyParser = require('body-parser');
var app = module.exports = express();
var session = require('express-session');
var Game = require('./public/Game.js').Game;
var new_game = new Game();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', './views');
app.set('view engine', 'jade');
app.use(express.static(__dirname + "/public"));

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
	req.session.game = new_game;
	var game = req.session.game;
	console.log(game.choices);
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




