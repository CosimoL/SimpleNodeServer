const _ = require('../libs/lodash.min.js');
const fs = require('fs');
const pathResource = '/../resources/data.json';

var Actions = {
    getAccounts() {
        try {
            const res = JSON.parse(fs.readFileSync(__dirname + pathResource, 'utf8'));
            // return res.accounts.list.map(elem => {
            //     return CryptoJS.AES.decrypt(elem.password, KEY_CRYPTO);
            // });
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
            // let bodyParsed = JSON.parse(body);
            // bodyParsed['password'] = CryptoJS.AES.encrypt(bodyParsed.password, KEY_CRYPTO);
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
    },

    deleteAccount(value) {
        const readFile = JSON.parse(fs.readFileSync(__dirname + pathResource, 'utf8'));
        if (!readFile) {
            return null;
        } else {
            const indexObj = Actions.findIndexByKey(readFile.accounts.list, 'id', JSON.parse(value)['id']);
            if(indexObj) {
                readFile.accounts.list.splice(indexObj, 1);
            }
            try {
                fs.writeFileSync(__dirname + pathResource, JSON.stringify(readFile));
                return readFile.accounts.list;
            } catch (err) {
                console.log("Exception - fs.writeFileSync (deleteAccount): ", err);
                return null;
            }
        }
    },

    findIndexByKey(array, key, value) {
        for (var i = 0; i < array.length; i++) {
            if (array[i][key] === value) {
                return i;
            }
        }
        return null;
    }
}

module.exports = Actions;