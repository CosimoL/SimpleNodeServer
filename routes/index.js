const Actions = require('../Actions/index.js');

var Routes = {
    dispatchFunctions(pathName) {
        switch(pathName) {
            case '/accounts':
                return Actions.getAccounts;
            case '/newAccount':
                return Actions.newAccount;
            case '/deleteAccount':
                return Actions.deleteAccount;
            default:
                break;
        }
    }
}

module.exports = Routes;