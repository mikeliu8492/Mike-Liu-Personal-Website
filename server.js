var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var index = require('./routes/index');

var port = 3000;

var app = express()

//View Engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

//Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

//HTML view pages
app.use('/', index)

//CSS and other static pages
app.use(express.static(path.join(__dirname + '/public')));
app.use(express.static(path.join(__dirname, '/viewmodels')));
app.use(express.static(path.join(__dirname, '/scripts')));

app.listen(port, function() {
    console.log('Server started on port:  ' + port)
});