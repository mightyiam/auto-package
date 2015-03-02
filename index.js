var FS = require('fs');
var Path = require('path');

var LATEST = '1.0';
function scheme(version) {
  module.exports = require(Path.join(__dirname, 'scheme', version));
  module.exports.scheme = scheme;
}

scheme(LATEST);

setImmediate(function() {
  FS.writeFileSync(
    Path.resolve(process.cwd(), './package.json'),
    JSON.stringify(module.exports, null, 2) + '\n');
});
