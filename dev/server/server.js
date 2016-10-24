var express = require('express');
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var manageUsers = require('./auth/manageUser');
var app = express();

mongoose.connect('mongodb://localhost:27017/sanosip');

app.use('/node_modules', express.static(__dirname + "/node_modules"));
app.use(bodyParser.json());

app.post('/api/auth/login', manageUsers.login);

app.listen(process.env.PORT || 9804, function () {
    console.log("Server started @ ", process.env.PORT || 9804);
});