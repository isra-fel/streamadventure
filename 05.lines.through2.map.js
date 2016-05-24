//var through = require('through2');
var map = require('through2-map');
var split = require('split');
var lineNo = 1;
process.stdin
    .pipe(split())
    .pipe(map(function (lineBuf) {
        lineBuf += '\n';
        return lineNo++ % 2 ? lineBuf.toString().toLowerCase() : lineBuf.toString().toUpperCase();
    }))
    .pipe(process.stdout);

//through2-map 比 through2 简单