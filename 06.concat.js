var concat = require('concat-stream');
process.stdin.pipe(concat(function (buf) {
    console.log(buf.toString().split('').reverse().join(''));
}));
//concat-stream 和 bl 很相像