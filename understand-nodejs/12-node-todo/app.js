var config = require('./config');

//Setup Express
var express = require('express');
var app = express();
app.use('/', express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

//Setup Controller
var setupController = require('./controllers/setupController');
setupController(app);

//API Controller
var apiController = require('./controllers/apiController');
apiController(app);

//Connect to mongoose
var mongoose = require('mongoose');
mongoose.connect(config.getDBConnectionString());

//Start Express
var port = process.env.PORT || 3000;
app.listen(port);