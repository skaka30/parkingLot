const responseWrapper = require('../../common/errorModule');
const usersComp = require('../../../components/users');

async function getTotalUserRegister(req, res) {
	try {
		const getTotalUser = await usersComp.getTotalUserRegister();
	    return responseWrapper.sendOk(res, null, { 'totalRegisterUser' : getTotalUser});
	} catch(error) {
		return responseWrapper.serviceError(res);
	}
}

async function addUser(req, res) {
	try {
		let details = req.body;
		const addUserData = await usersComp.addUser(details);
	    return responseWrapper.sendOk(res, null, addUserData);
	} catch(error) {
		return responseWrapper.serviceError(res);
	}
}

async function getUsersDetails(mobileNumber) {
	try {
		const getTotalUser = await usersComp.getUsersDetails(mobileNumber);
	    return responseWrapper.sendOk(res, null, { 'totalRegisterUser' : getTotalUser});
	} catch(error) {
		return responseWrapper.serviceError(res);
	}
}



module.exports = {
	getTotalUserRegister,
	addUser,
	getUsersDetails
};