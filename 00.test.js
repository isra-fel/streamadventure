var through = require('through2');
var split = require('split');
var tr = through(function (line, _, next) {
            var json = JSON.parse(line.toString());
            if (json.type == 'book') console.log('1');
            if (json.type == 'genre') console.log('2');
    next();
});
process.stdin.pipe(tr).pipe(process.stdout);


// {"type":"genre","name":"cyberpunk"}
// {"type":"book","name":"Neuromancer"}
// {"type":"book","name":"Snow Crash"}
// {"type":"genre","name":"space opera"}
// {"type":"book","name":"A Deepness in the Sky"}
// {"type":"book","name":"Void"}
// console.log(JSON.parse('{"type":"book","name":"Void"}').type);