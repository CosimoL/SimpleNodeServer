const _ = require('../libs/lodash.min.js');

var Utils = {

	responseStatusOk(res,body) {
		res.statusCode = 200;
	  	res.setHeader('Content-Type', 'application/json');
	  	res.end(this.makeBodyResponse(true, body, null));
	},

	responseStatusKo(res, message) {
		res.statusCode = 500;
		res.setHeader('Content-Type', 'application/json');
		res.end(this.makeBodyResponse(false, null, message));
	},

	makeBodyResponse(status, body, message) {
		return JSON.stringify(_.assign({}, body, {
	                status,
	                message
	            }));
	}
}

module.exports = Utils;