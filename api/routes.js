var express = require('express');


var users = require('./users/v1');
var parking = require('./parking/v1');

module.exports = function(app) {
	'use strict';
	// define route
	app.get('/', function(req, res, next) {
		return res.status(200).send('System working good.');
    });
    
	app.use('/v1/users', users);
	app.use('/v1/parking', parking);
};