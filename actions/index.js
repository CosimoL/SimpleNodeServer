const _ = require('../libs/lodash.min.js');
const fs = require('fs');
const pathResource = '/../resources/data.json';

var Actions = {
    getAccounts() {
        try {
            const res = JSON.parse(fs.readFileSync(__dirname + pathResource, 'utf8'));
            return res.accounts.list;
        } catch (err) {
            console.log("Exception - fs.readFileSync (getAccounts): ", err);
            return null;
        }
    },

    newAccount(body) {
        const readFile = JSON.parse(fs.readFileSync(__dirname + pathResource, 'utf8'));
        if(!readFile) {
            return null;
        } else {
            const count = readFile.accounts.count + 1;
            readFile.accounts.list.push(_.assign({}, JSON.parse(body), {
                id: count
            }));
            readFile.accounts.count = count;
            try{
                fs.writeFileSync(__dirname + pathResource, JSON.stringify(readFile));
                return count;
            } catch (err) {
                console.log("Exception - fs.writeFileSync (newAccount): ", err);
                return null;
            }
        }
    }
}

module.exports = Actions;