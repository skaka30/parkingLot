const fs = require('fs');
/**
 * A module containing wrappers for api error responses
 * @module api-error-responses
 */

function sendOk(res, message, data, responseTime, code = null){
	if(!message){
		message = 'success'; 
	}

	if(code == null){
		code = 200;
	}

	if(responseTime){
		return res.json({
			status: {'code':code,'message': message},
			data: data,
			resTime: responseTime
		});		
	}
	return res.json({
		status: {'code':code,'message': message},
		data: data
	});
}

function sendHtml(res, message, data, responseTime){
	fs.readFile(__dirname+'/../../'+configData['emails']['inviteUserSuccess']['templatePath'], null, function (error, data) {
		if (error) {
			res.writeHead(404);
			res.write('Whoops! File not found!');
		} else {
			let data1 = '<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js" type="text/javascript"></script><script src="/javascripts/footer.js" type="text/javascript"></script><script>window.close();</script>';
			res.write(data1);
		}
		res.end();
	});
}

function sendHtmlError(res, message, data, responseTime){
	fs.readFile(__dirname+'/../../'+configData['emails']['inviteUserError']['templatePath'], null, function (error, data) {
		if (error) {
			res.writeHead(404);
			res.write('Whoops! File not found!');
		} else {
			let data1 = '<script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min.js" type="text/javascript"></script><script src="/javascripts/footer.js" type="text/javascript"></script><script>window.close();</script>';
			res.write(data1);
		}
		res.end();
	});
}

/**
 * returns HTTP code 422. message argument ovverides the default message
 * @param  {object} res     express response object
 * @param  {string} message any sensible error message that would do justice to error code. Tend to keep it simple.	
 * @return {object}         
 */
function unprocessableEntity(res, message){
	if(!message){
		message = 'missing parameters'; 
	}
	return res.status(422).json({
		status: {'code':422,'message':message},
		data: {}
	});
}

/**
 * returns HTTP code 400. message argument ovverides the default message
 * @param  {object} res     express response object
 * @param  {string} message any sensible error message that would do justice to error code. Tend to keep it simple.	
 * @return {object}         
 */
function forbidden(res, message, code, data){
	if(!message){
		message = 'Insufficient permission for this action';
	}
	return res.status(403).json({
		status: {'code':code,'message':message},
		data: data
	});
}

/**
 * returns HTTP code 400. message argument ovverides the default message
 * @param  {object} res     express response object
 * @param  {string} message any sensible error message that would do justice to error code. Tend to keep it simple.	
 * @return {object}         
 */
function badRequest(res, message, data=null){
	if(!message){
		message = 'bad request';
	}
	let dataToSend = {};
	if(data){
		dataToSend = data;
	}
	return res.status(400).json({
		status: {'code':400,'message':message},
		data: dataToSend
	});
}

/**
 * returns HTTP code 401. message argument ovverides the default message
 * @param  {object} res     express response object
 * @param  {string} message any sensible error message that would do justice to error code. Tend to keep it simple.	
 * @return {object}         
 */
function unAuthorised(res, message, expiredToken){
	if(!message)
		message = 'user not authorised';

	return res.status(401).json({
		status: {'code':401,'message':message},
		data: {expiredToken: expiredToken}
	});
}

/**
 * returns HTTP code 503. message argument ovverides the default message
 * @param  {object} res     express response object
 * @param  {string} message any sensible error message that would do justice to error code. Tend to keep it simple.	
 * @return {object}         
 */
function serviceError(res, message, error){
	if(!message)
		message = 'service unavailable';
	console.log(error);
	return res.status(503).json({
		status: {'code':503,'message':message},
		data: {}
	});
}

/**
 * returns HTTP code 404. message argument overides the default message
 * @param  {object} res     express response object
 * @param  {string} message any sensible error message that would do justice to error code. Tend to keep it simple.	
 * @return {object}         
 */
function notFound(res, message){
	if(!message)
		message = 'not found';		
	return res.status(404).json({
		status: {'code':404,'message':message},
		data: {}
	});
}

/**
 * returns HTTP code 409. message argument ovverides the default message
 * @param  {object} res     express response object
 * @param  {string} message any sensible error message that would do justice to error code. Tend to keep it simple.	
 * @return {object}         
 */
function conflict(res, message){
	if(!message)
		message = 'a duplicate entry was found';
	return res.status(409).json({
		status: {'code':409,'message':message},
		data: {}
	});
}

function emptyResponse(res, message){
	if(!message)
		message = 'No entry found';
	return res.json({
		status: {'code':404,'message':message},
		data: {}
	});	
}

function custom(res, message){
	if(!message)
		message = 'This is most likely a forbidden url';
	return res.status(200).send(message);
}

/**
 * returns HTTP code 401. message argument ovverides the default message
 * @param  {object} res     express response object
 * @param  {string} message any sensible error message that would do justice to error code. Tend to keep it simple.	
 * @return {object}         
 */
function multiLogin(res, message,data){
	if(!message)
		message = 'user not authorised';
	//console.log(res);

	return res.status(401).json({
		status: {'code':401,'message':message},
		data: {pastLogin: data}
	});
}


module.exports = {
	sendOk,
	unprocessableEntity,
	badRequest,
	unAuthorised,
	serviceError,
	notFound,
	conflict,
	emptyResponse,
	forbidden,
	custom,
	multiLogin,
	sendHtml,
	sendHtmlError
};