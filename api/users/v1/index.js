'use strict';
var express = require('express');

const users = require('./users');

const router = express.Router();

router.get('/getTotalUserRegister', users.getTotalUserRegister);
router.post('/addUser', users.addUser);


module.exports = router;