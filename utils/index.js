const _ = require('../libs/lodash.min.js');

var Utils = {

	responseStatusOk(res,body) {
		res.statusCode = 200;
	  	res.setHeader('Content-Type', 'application/json');
	  	this.initHeaders(res);
	  	res.end(this.makeBodyResponse(true, body, null));
	},

	responseStatusKo(res, message) {
		res.statusCode = 500;
		res.setHeader('Content-Type', 'application/json');
		this.initHeaders(res);
		res.end(this.makeBodyResponse(false, null, message));
	},

	makeBodyResponse(status, body, message) {
		return JSON.stringify(_.assign({}, body, {
	                status,
	                message
	            }));
	},

	initHeaders(res) {
		let headers = {};
		headers["Access-Control-Allow-Origin"] = "http://localhost:8080";
        headers["Access-Control-Allow-Methods"] = "POST, GET, PUT, DELETE, OPTIONS";
        headers["Access-Control-Allow-Credentials"] = false;
        headers["Access-Control-Max-Age"] = '86400'; // 24 hours
        headers["Access-Control-Allow-Headers"] = "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept";
        res.writeHead(200, headers);
	}
}

module.exports = Utils;