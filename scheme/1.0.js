var FS = require('fs');
var Path = require('path');

exports.versionFile = function(file) {
  exports.version = FS
    .readFileSync(Path.resolve(process.cwd(), file || 'VERSION'))
    .toString().trim();
};

exports.dependencies = {};
exports.depends = function(name, version) {
  exports.dependencies[name] = version || '*';
};

exports.devDependencies = {};
exports.devDepends = function(name, version) {
  exports.devDependencies[name] = version || '*';
};

exports.githubRepo = function(url) {
  exports.repository = {
    type: 'git',
    url: 'https://github.com/' + url + '.git'
  };

  exports.homepage = 'https://github.com/' + url;
  exports.bugs = {
    url: 'https://github.com/' + url + '/issues'
  };
};

exports.keywords = [];
exports.keyword = function(word) {
  exports.keywords.push(word);
};

exports.toJSON = function() {
  return exports;
};
