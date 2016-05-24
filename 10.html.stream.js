var trumpet = require('trumpet');
var map = require('through2-map');
var tr = trumpet();
var stream = tr.select('.loud').createStream();
stream.pipe(map(function (trunc) {
    return trunc.toString().toUpperCase();
})).pipe(stream);
process.stdin.pipe(tr).pipe(process.stdout);

