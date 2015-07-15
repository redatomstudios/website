var express = require('express');
var favicon = require('serve-favicon');

var app = express();

// Serve static assets from the public/ folder
app.use(express.static(__dirname + '/public'));

// Render as plain HTML
app.set('view engine', 'jade');

app.get('/*', function(req, res, next) {
	res.render('index');
});

app.all('/*', function(req, res, next) {
	res.status(404).json({message: 'Uhoh, the resource you\'re looking for doesn\'t exist!'});
});

app.listen(3006);

