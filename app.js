const http        = require('http');
const url         = require('url');
const querystring = require('querystring');
const utils = require('./utils/index.js');
const routes = require('./routes/index.js');

const server = http.createServer((req, res) => {

    const pathName = url.parse(req.url).pathname;
    switch(req.method) {
        case 'POST':
            let body = '';
            req.on('data', (data) => {
                body += data;
            });
            req.on('end', () => {
                const fn = routes.dispatchFunctions(pathName);
                const responseFromFunction = fn(body);
                const bodyResponse = {data: responseFromFunction};
                if(responseFromFunction !== null && responseFromFunction !== undefined) {
                    utils.responseStatusOk(res, bodyResponse);
                } else {
                    utils.responseStatusKo(res, `(${req.method}) No results found by '${pathName}'`);
                }
            })
            break;
        case 'GET':
            query = url.parse(req.url).query;
            queryAccess = querystring.parse(query);
            const fn = routes.dispatchFunctions(pathName);
            const responseFromFunction = fn(queryAccess);
            const bodyResponse = {data: responseFromFunction};
            if(responseFromFunction !== null && responseFromFunction !== undefined) {
                utils.responseStatusOk(res, bodyResponse);
            } else {
                utils.responseStatusKo(res, `(${req.method}) No results found by '${pathName}'`);
            }
            break;
        case 'PUT':
            console.log("Ho beccato una put");
            break;
        case 'DELETE':
            console.log("Ho beccato una delete");
            break;
        default:
            console.log("Sono nel case di default");
            break;
    }
});

server.listen(3000, '127.0.0.1', () => {
    console.log('\nListening at http://' + '127.0.0.1' + ':' + 3000 + '\n');
});