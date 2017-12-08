// const http = require('http');
// var url = require('url');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
// 	console.log("req: " , req);
// 	console.log("res: ", res);
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World\n');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
var http        = require('http');
var url         = require('url');
var querystring = require('querystring');
// var             = require('fs');

// http.createServer(function(request, response){
// 	pathName =url.parse(request.url).pathname;
// 	query = url.parse(request.url).query;
// 	queryAccess = querystring.parse(query);
// 	console.log("P: ", pathName);
// 	console.log("Q: ", query);
// 	console.log("QA: ", queryAccess);
// // fs.readFile(__dirname + pathName, function(err, data
// // if(err){
// //    respone.writeHead(404, {'Content-type':'text/plan'});
// //    response.write('Page Was Not Found');
// //    response.end( );
// // }else
// //    respone.writeHead(200, {'Content-type':'text/plan'});
// //    response.write(data);
// //    response.end( );
	
// 	responseJson = {
// 		indirizzo: 'ind',
// 		prova: 'ovd'
// 	}

// 	response.statusCode = 200;
//   	response.setHeader('Content-Type', 'application/json');
//   	response.end(JSON.stringify(responseJson));

// }).listen(7000, '127.0.0.1', () => {
// 	console.log("\nServer is running at http://127.0.0.1:7000\n");
// });

var http = require('http');
var url = require('url');
var querystring = require('querystring');
var fs = require('fs');

var server = http.createServer((req, res) => {

    console.dir(req.param);

    if (req.method == 'POST') {
        console.log("POST");
        var body = '';
        req.on('data', function (data) {
            body += data;
            console.log("Partial body: " + body);
        });
        req.on('end', function () {
            console.log("Body: " + body);
        });
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('post received');
    }
    else
    {
        console.log("GET");
        //var html = '<html><body><form method="post" action="http://localhost:3000">Name: <input type="text" name="name" /><input type="submit" value="Submit" /></form></body>';
        var html = fs.readFileSync('index.html');
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('Ok get');
    }

});

var port = 3000;
var host = '127.0.0.1';
server.listen((port, host) => {
	console.log('\nListening at http://' + host + ':' + port + '\n');
});