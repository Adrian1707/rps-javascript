var express = require('express');
var app = express();
app.set('views', './views');
app.set('view engine', 'jade');

app.get('/', function (req, res) {
  res.render('index');
});

app.get('/weapon', function (req, res){
	res.render('weapon');
});

app.post('/weapon',function (req,res){
	res.redirect('/weapon');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});