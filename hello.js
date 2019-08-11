// console.log("Hello Fucking World!");

var http = require("http");
var url = require("url");
var fs = require("fs");

http.createServer(function (req, res) {
	var q = url.parse(req.url, true);
	// console.log(q);
	console.log(q.pathname);
	var filename = "." + q.pathname;
	console.log(filename);
	// if (filename == "./") { filename = "./index.html"; }
	if (filename == "./") { filename = "./index"; }
	filename = filename + ".html";
	console.log(filename); 
	// fs.readFile("index.html", function(err, data) {
	fs.readFile(filename, function(err, data) {
		if (err) {
			res.writeHead(404, {"Content-Type": "text/html"});
			return res.end("404 Not Found");
		}
		res.writeHead(200, {"Content-Type": "text/html"});
		res.write(data);
		// console.log("...Incoming Request: " + req.url);
		// res.end();
		return res.end();
	});
	/* res.writeHead(200, {"Content-Type": "text/html"});
	// res.end("Hello World!");
	var q = url.parse(req.url, true).query;
	var month = q.month;
	var year = q.year;
	var date = month + " " + year;
	// res.write(req.url);
	// res.end();
	res.end(date); */
}).listen(8080); 

console.log("Server Listening on Port 8080...");