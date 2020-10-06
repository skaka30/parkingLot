const express = require('express');
const app = express();
const routes = require('./api/routes');
var bodyParser = require("body-parser");
var mongoose = require('mongoose');
app.use(bodyParser.urlencoded({ limit: '20mb', extended: true }))
app.use(bodyParser.json());

// Default port or set .env
const PORT = process.env.PORT || 5500;

app.listen(PORT, () => console.log(`server run at PORT ${PORT}`));

//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/my_database';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
routes(app);