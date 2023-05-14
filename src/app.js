//connect to mysql db
var express = require('express');
var router = require('./router');
var http = require('http')

const port = 8080;

var app = express();

app.use(express.json())
app.use((req, res, next) => {
    console.log(req.query);
    res.on('finish', () => {
        console.log(res.statusCode);
    })
    next();
})

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    next();
})

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
