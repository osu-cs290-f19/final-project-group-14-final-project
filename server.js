var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var http = require("http");
var app = express();
var port = process.env.PORT || 3000;

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.get('/', function (req, res, next)
{
	res.status(200).render('content');
});

app.use(express.static('public'));

app.get('*', function (req, res, next)
{
	res.status(404).render('404');
});

app.listen(port, function ()
{
	console.log('== Listening on port', port);
});
