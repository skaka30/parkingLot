const responseWrapper = require('../../common/errorModule');
const parkingsComp = require('../../../components/parking');
const userComp = require('../../../components/users');

async function getParkingSlotList(req, res) {
	try {
		console.log('dsafdsd');
		const getTotalSlot = await parkingsComp.getParkingSlotList();
	    return responseWrapper.sendOk(res, null, { 'totalParkingSlot' : getTotalSlot});
	} catch(error) {
		return responseWrapper.serviceError(res);
	}
}

async function getOccupiedSlot(req, res) {
	try {
		let details = {};
		details.bookDate = req.params.bookDate;
		const getTotalSlot = await parkingsComp.getOccupiedSlot(details);
		const totalSlot = await parkingsComp.getParkingSlotList();
		totalOccupiedSlot = getTotalSlot.length + "/" + totalSlot.length;
	    return responseWrapper.sendOk(res, null, { 'totalOccupiedSlot' : totalOccupiedSlot});
	} catch(error) {
		return responseWrapper.serviceError(res);
	}
}


async function getAvailableSlot(req, res) {
	try {
		let details = {};
		details.bookDate = req.params.bookDate;
		const getTotalSlot = await parkingsComp.getOccupiedSlot(details);
		const totalSlot = await parkingsComp.getParkingSlotList();
		const totalAvailable =  Math.abs(getTotalSlot.length - totalSlot.length);
		totalAvailableSlot = totalAvailable + "/" + totalSlot.length;
	    return responseWrapper.sendOk(res, null, { 'totalAvailableSlot' : totalAvailableSlot});
	} catch(error) {
		return responseWrapper.serviceError(res);
	}
}

async function addParkingSlot(req, res) {
	try {
		let details = req.body;
		const addParkingSlot = await parkingsComp.addParkingSlot(details);
	    return responseWrapper.sendOk(res, null, addParkingSlot);
	} catch(error) {
		return responseWrapper.serviceError(res);
	}
}

async function bookParkingSlot(req, res) {
	try {
		let details = req.body;
		let validateBooking = await parkingsComp.checkBookingSlot(details);
		if (validateBooking) {
			return responseWrapper.serviceError(res, 'Booking already present in system for this date');
		} else {
			let userFound = await userComp.getUsersDetails(details.mobileNumber);
			if (!userFound) {
				let userData = {};
				userData.mobileNumber = details.mobileNumber;
				let addUserData = await userComp.addUser(userData);
			}
			const getParkingSlotList = await parkingsComp.getParkingSlotList(details);
			var slotId = '';
			var allSlotBook = '';
			var j = getParkingSlotList.length;
			for(var i = 0; i < getParkingSlotList.length;i++) {
				details.parkingSlotID = getParkingSlotList[i].parkingNumber;
				const validateSlot = await parkingsComp.checkParkingSlot(details)
				if (j >= i+1) {
					if (!validateSlot) {
						slotId = details.parkingSlotID;
						break;
					}
				} 
				if (j == i+1) {
					if (details.isReservedType == "1" || details.isReservedType == "2") {
						var tempType = details.isReservedType;
						details.isReservedType = "3";
						const getParkingSlotList2 = await parkingsComp.getParkingSlotList(details);
						var k = getParkingSlotList2.length;
						for(var p = 0; p < k; p++) {
							details.parkingSlotID = getParkingSlotList2[p].parkingNumber;
							const validateSlot1 = await parkingsComp.checkParkingSlot(details);
							if (k >= p+1) {
								if (!validateSlot1) {
									slotId = details.parkingSlotID;
									break;
								}
							} 
							if (k == p+1) {
								console.log('out')
								allSlotBook = 1
							}
						}
						details.isReservedType = tempType;
					} else {
						allSlotBook = 1
					}
				}
			}
			if (allSlotBook) {
				return responseWrapper.serviceError(res, 'No Slots avaiable for this date');
			} else {
				details.parkingSlotID = slotId;
				const bookParkingSlots = await parkingsComp.bookParkingSlot(details);
				return responseWrapper.sendOk(res, null, bookParkingSlots);
			}
		}
	} catch(error) {
		return responseWrapper.serviceError(res);
	}
}

module.exports = {
	getParkingSlotList,
	addParkingSlot,
	bookParkingSlot,
	getOccupiedSlot,
	getAvailableSlot
};