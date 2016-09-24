var express = require("express");
var https = require("https");
var fs = require("fs");
var path = require('path');
var app = express();

// set port
app.set('port', (process.env.PORT || 8080));

// middleware
app.use(express.static(path.join(__dirname, '../client/dist')));



// set up server options
var options = {
  key: fs.readFileSync('./server.key'),
  cert: fs.readFileSync('./server.crt'),
  requestCert: false,
  rejectUnauthorized: false
};

// set up server
var appServer = https.createServer(options, app).listen(app.get('port'), function() {
    console.log(`Your index.html is located at: ${path.join(__dirname, '../client/dist')}`)
});
