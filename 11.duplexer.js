var spawn = require('child_process').spawn;

module.exports = function (cmd, args) {
    var child = spawn(cmd, args);
    var duplexer = require('duplexer');
    return duplexer(child.stdin, child.stdout);
};