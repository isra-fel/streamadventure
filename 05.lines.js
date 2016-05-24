var through = require('through2');
var split = require('split');
var lineNo = 1;
process.stdin
    .pipe(split())
    .pipe(through(
    function (lineBuf, _, next) {
        this.push((lineNo % 2)?(lineBuf.toString().toLowerCase()):(lineBuf.toString().toUpperCase()));
        this.push('\n');
        ++lineNo;
        next();
    }))
    .pipe(process.stdout);