var duplexer = require('duplexer2');
var through = require('through2').obj;

module.exports = function (counter) {
    var counts = {};
    var input = through(
    function write(row, _, next) {
        counts[row.country] = (counts[row.country] || 0) + 1;
        next();
    },
    function end (done) {
        counter.setCounts(counts);
        done();
    });
    return duplexer(input, counter);
};
