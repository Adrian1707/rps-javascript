var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var session = require('express-session');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', './views');
app.set('view engine', 'jade');

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
	res.render('play', { weapon: user_weapon});
})

app.post('/play/:weapon', function (req,res){
	req.session.weapon = req.body.weapon;
	console.log(req.session.weapon);
	res.redirect('/play');
})

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});


// pass variable paramater around controller (maybe using sessions?) and 