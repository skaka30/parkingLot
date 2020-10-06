'use strict';
var express = require('express');

const parking = require('./parking');

const router = express.Router();

router.get('/getParkingSlotList', parking.getParkingSlotList);
router.get('/getOccupiedSlot/:bookDate',  parking.getOccupiedSlot);
router.get('/getAvailableSlot/:bookDate',  parking.getAvailableSlot);
router.post('/addParkingSlot', parking.addParkingSlot);
router.post('/bookSlot', parking.bookParkingSlot);

module.exports = router;