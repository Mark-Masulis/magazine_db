//connect to mysql db
var express = require('express');
var router = require('./router');
var mysql = require('mysql');
var http = require('http')

const port = 8080;

var app = express();

app.use('/', router);

app.set('port', port);
var server = http.createServer(app);
server.listen(port);
server.on('error', (error) => {
    console.log(error);
    process.exit(1);
});
server.on('listening', () => {
    console.log(server.address());
});

module.exports = app;
