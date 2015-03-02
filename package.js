#!/usr/bin/env node
Package = require('./index').scheme('1.0');

Package.name = 'auto-package';
Package.author = 'John Manero <john.manero@gmail.com>';
Package.description = 'Dynamically generate package.json files for JS modules';
Package.license = 'MIT';

Package.keyword('package');
Package.keyword('json');

Package.devDepends('mocha');

Package.versionFile();
Package.githubRepo('jmanero/auto-package');
