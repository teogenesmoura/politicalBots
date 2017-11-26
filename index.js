const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

const options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
                  replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } }; 
let mongodbUri = 'mongodb://bot:bot@ds121696.mlab.com:21696/politicalbot';
mongoose.connect(mongodbUri, options);
let conn = mongoose.connection;             
conn.on('error', console.error.bind(console, 'connection error:')); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(expressValidator());
app.use(require('./routes'));
app.set('view engine', 'ejs');

app.listen(port, function() {
	console.log('express listening on port' + port);
});