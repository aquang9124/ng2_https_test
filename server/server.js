var express = require("express");
var https = require("https");
var app = express();

// set port
app.set("port", (process.ENV.port || 8080));

// middleware
app.use('/dist', express.static(__dirname + '/client/dist'));

// set up server options
var options = {
  key: fs.readFileSync('../key.pem'),
  cert: fs.readFileSync('../cert.pem')
};

// set up server
var appServer = https.createServer(options, function(req, res) {
    res.writeHead(200);
    res.end(`Your server is now listening on port ${app.get('port')}`);
}).listen(app.get('port'));
