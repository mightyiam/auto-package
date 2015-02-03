auto-package
============
Dynamically generate `package.json` files for autimated releases.

### How does this even work?
* Add `package.json` to `.gitignore`
* Write a `package.js` file like this:

```js
Package = require('./index');

Package.name('auto-package');
Package.version_file();
Package.author('John Manero', 'john.manero@gmail.com');
Package.description('Dynamically generate package.json files for NodeJS modules');
Package.github_repo('jmanero/auto-package');
Package.keyword('package.json');
Package.license('MIT');
```

* Run `node package.js`
