const fs = require('fs');
const pathResource = '/../resources/data.json';
var Actions = {
	getAccounts(body) {
		console.log("getAccounts: ", body);
		console.log("\n\n");
		const res = JSON.parse(fs.readFileSync(__dirname + pathResource, 'utf8'));
		return res.accounts.list;
	},

	newAccount(body) {
	}
}

module.exports = Actions;