var combine = require('stream-combiner');
var split = require('split');
var through = require('through2');
var zlib = require('zlib');

module.exports = function () {
    var genre = {"name":null,"books":[]};
    return combine(
//        process.stdin,
        
        split(),
        
        through(function (lineBuf, _, next) {
            if (lineBuf.length == 0) return next();
            var line = JSON.parse(lineBuf.toString());
            if (line.type == 'book') {
                genre.books.push(line.name);
            }
            if (line.type == 'genre') {
                if (genre.name)
                    this.push(JSON.stringify(genre) + '\n');
                genre = {"name":line.name,"books":[]};
            }
            next();
        },function (done) {
            this.push(JSON.stringify(genre) + '\n'); //push the last genre
            done();
        }),
        
        zlib.createGzip()/*,
        
        process.stdout*/
    );
}