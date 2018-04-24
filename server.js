var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose'); // DB control program
var PORT = process.env.PORT || 3000;

var app = express();

app.use(express.static('public'));


app.listen(3000, function(){
    console.log('Server is listening');
});
