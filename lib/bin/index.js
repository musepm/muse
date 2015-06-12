#!/usr/bin/env node
'use strict';

require('shelljs/global');
var childproc = require('child_process'),
    program = require('commander'),
    path = require('path'),
    lib = require('../index');

program.version('0.0.1').command('enable <service>').description('add service modules to project and sign up').action(function (service) {
  console.log('Setting up ' + service);
  lib.enable(service);
});

program.command('newapp <service>').description('add a new app and get a token/key for a service').action(function (service) {
  var dir = 'node_modules/musepm-' + service + '/lib';
  var fname = 'signupbot.js';
  var opts = { async: true, silent: false };
  exec('cd ' + dir + '; node lib/signup', opts, function (code, o) {
    console.log(o);
    if (er) console.error(er);
  });
});

program.parse(process.argv);