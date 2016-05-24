var through = require('through2');
function write (buffer, encoding, next) {
    this.push(buffer.toString().toUpperCase());
    next();
}
var ts = through(write, null);
process.stdin.pipe(ts).pipe(process.stdout);