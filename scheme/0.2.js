var FS = require('fs');
var Path = require('path');
var data = exports.content = {};

['name', 'version', 'description', 'license', 'repo', 'homepage'].forEach(function(param) {
  exports[param] = function(set) {
    if (set) data[param] = set;
    return data[param];
  };
});

exports.versionFile = function(file) {
  data.version = FS
    .readFileSync(Path.resolve(process.cwd(), file || 'VERSION'))
    .toString().trim();
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

data.devDependencies = {};
exports.devDepends = function(name, version) {
  data.devDependencies[name] = version || '*';
};

exports.githubRepo = function(url) {
  data.repository = {
    type: 'git',
    url: 'https://github.com/' + url + '.git'
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

setImmediate(function() {
  FS.writeFileSync('./package.json', JSON.stringify(data, null, 2));
});


exports.toJSON = function() {
  return data;
};
