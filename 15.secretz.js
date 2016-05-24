var zlib = require('zlib');
var tar = require('tar');
var crypto = require('crypto');
var combiner = require('stream-combiner');

var decipher = crypto.createDecipher(process.argv[2], process.argv[3]);
var unziper = zlib.createGunzip();
var parser = tar.Parse();
parser.on('entry', function (e) {
    var hasher = crypto.createHash('md5', {encoding:'hex'});
    if (e.type == 'File') {
//        e.pipe(hasher).pipe(process.stdout);
        e.on('data', function (data) {
            hasher.update(data);
        });
        e.on('end', function () {
            console.log(hasher.digest('hex') + ' ' + e.path);
        });
//        console.log(' ' + e.path + '\n');
    }
});
combiner(process.stdin, decipher, unziper, parser);