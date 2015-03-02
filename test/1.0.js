var Assert = require('assert');
var Path = require('path');

describe('AutoPackage Scheme 0.2', function() {
  var package_builder = require('../scheme/1.0.js');

  var name = 'test.0.1';
  var description = 'Testing scheme 1.0';
  var license = 'FooBar';
  var author = 'someone <someone@someplace.com>';

  package_builder.name = name;
  package_builder.description = description;
  package_builder.license = license;
  package_builder.author = author;
  package_builder.versionFile(Path.join(__dirname, 'TEST_VERSION'));

  package_builder.depends('a-thing');
  package_builder.depends('another-thing', '0.1.2');
  package_builder.githubRepo('foo/bar');
  package_builder.keyword('test');

  var test_package = package_builder.toJSON();

  it('should expose package data directly', function() {
    Assert.deepEqual(package_builder, test_package);
  });

  it('should have the correct name, description, author, and license', function() {
    Assert.equal(test_package.name, name);
    Assert.equal(test_package.description, description);
    Assert.equal(test_package.author, 'someone <someone@someplace.com>');
    Assert.equal(test_package.license, license);
  });

  it('should have have the correct version', function() {
    Assert.equal(test_package.version, '1.2.3');
  });

  it('should have the correct repository, bugs, and homepage fields', function() {
    Assert.deepEqual(test_package.repository, {
      type: 'git',
      url: 'https://github.com/foo/bar.git'
    });
    Assert.equal(test_package.homepage, 'https://github.com/foo/bar');
    Assert.deepEqual(test_package.bugs, {
      url: 'https://github.com/foo/bar/issues'
    });
  });

  it('should have the correct dependencies', function() {
    Assert.deepEqual(test_package.dependencies, {
      'a-thing': '*',
      'another-thing': '0.1.2'
    });
  });

  it('should have the correct keywords', function() {
    Assert.deepEqual(test_package.keywords, ['test']);
  });

});
