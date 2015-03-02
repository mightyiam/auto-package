# encoding: utf-8

require 'bundler'
require 'bundler/setup'
require 'thor/scmversion'

##
# Sequence version-bump, package, and publish
##
class Tasks < Thor
  include Thor::Actions
  namespace :package

  desc 'test', 'Run tests'
  def test
    invoke :install
    Dir['./test/*.js'].each do |t|
      run "./node_modules/.bin/mocha #{ t }"
    end
  end

  desc 'install', 'Install dependencies'
  option 'dev', :aliases => :d
  def install
    run '/usr/bin/env node package.js'
    run '/usr/bin/env npm install'
  end

  desc 'release', 'Release package'
  def release(bump = :patch)
    invoke :version, [:bump, bump]
    run '/usr/bin/env node package.js'
    run '/usr/bin/env npm publish'
  end
end
