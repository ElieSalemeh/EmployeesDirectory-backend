// Config .env
const fs = require('fs');
const dotenv = require('dotenv');
const envConfig = dotenv.parse(fs.readFileSync('.env'));
process.env.NODE_ENV = envConfig.NODE_ENV

// Config Express app
const express = require('express');
const app = express();

// Mongoose Config
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.set('useCreateIndex', true);
mongoose.set('useNewUrlParser', true);
if (process.env.NODE_ENV === 'development') {
  mongoose.connect('mongodb://localhost:27017/employees-directory');
}
mongoose.connection.on('error', error => console.log(error) );

const bodyParser = require('body-parser');
const morgan = require('morgan');
app.use(morgan('dev'));

// Configure app to use bodyParser()
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));

let allowCrossDomain = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
};
app.use(allowCrossDomain);

// Main Route File
require('./router/index.js')(app,express.Router());

const port = 5555;

const server = app.listen(port);
console.log(`Live on Port ${port}`);


