var http = require('http');
//var fs = require('fs');
//var bl = require('bl');
var map = require('through2-map');
http.createServer(function (req, res) {
    req.pipe(map(function (data) {
        return data.toString().toUpperCase();
    })).pipe(res);
}).listen(process.argv[2]);