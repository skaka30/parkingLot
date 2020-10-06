const getParkingSlotList = require('./getParkingSlotList');
const addParkingSlot = require('./addParkingSlot');
const bookParkingSlot = require('./bookParkingSlot');
const checkBookingSlot = require('./checkBookingSlot');
const checkParkingSlot = require('./checkParkingSlot');
const getOccupiedSlot = require('./getOccupiedSlot');


module.exports = {
	getParkingSlotList,
	addParkingSlot,
	bookParkingSlot,
	checkBookingSlot,
	checkParkingSlot,
	getOccupiedSlot
};