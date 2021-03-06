var FS = require('fs');
var Path = require('path');
var data = exports.package = {};

['name', 'version', 'description', 'license', 'repo', 'homepage'].forEach(function(param) {
  exports[param] = function(set) {
    if (set) data[param] = set;
    return data[param];
  };
});

exports.version_file = function(file) {
  data.version = FS
    .readFileSync(Path.resolve(__dirname, file || 'VERSION'))
    .toString();
};

exports.author = function(name, email) {
  data.author = {
    name: name,
    email: email
  };
};

data.dependencies = {};
exports.depends = function(name, version) {
  data.dependencies[name] = version || '*';
};

exports.github_repo = function(url) {
  data.repository = {
    type: 'git',
    url: 'git@github.com:' + url + '.git'
  };

  data.homepage = 'https://github.com/' + url;
  data.bugs = {
    url: 'https://github.com/' + url + '/issues'
  };
};

data.keywords = [];
exports.keyword = function(word) {
  data.keywords.push(word);
};

exports.toJSON = function() {
  return data;
};
