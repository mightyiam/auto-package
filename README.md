auto-package
============
Dynamically generate `package.json` files for autimated releases.

### How does this even work?
* Install it `npm install -g auto-package`
* Add `package.json` to `.gitignore`
* Write a `package.js` file like this:

```js
Package = require('auto-package');

Package.name('some-module');
Package.author('John Manero', 'john.manero@gmail.com');
Package.description('Dynamically generate package.json files for NodeJS modules');
Package.version_file(); // Read version from ./VERSION

Package.github_repo('jmanero/node-some-module');

Package.keyword('some');
Package.keyword('module');

Package.license('MIT');
```

* Run `node package.js`
* Run `npm publish`

### Why?
Because JSON is static, and continuous integration isn't. In an automated build environment, often times merging to `master` results in a release. With tools like `thor-scmversion`, automated release versioning is easy, but getting that version into your NodeJS package isn't. This utility provides a simple framework to represent package metadata as code instead of JSON.

### API
* _#name(value), #version(value), #description(value), #license(value), #repo(value), #homepage(value)_ Do exactly what you think...
* _#author(name, email)_ does too.
* _#version_file(path)_ Is more interesting. It will try to read a version string from a file at `path` (relative to CWD)
* _#keyword(word)_ Adds a keyword
* _#depends(name, version)_ Adds a dependency
* _#github_repo('owner/repo') Adds `repo`, `homepage`, and `bugs` fields to GitHub resources
