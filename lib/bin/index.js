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
  var lib = '' + process.cwd() + '/node_modules/musepm-' + service;
  var fname = '' + lib + '/lib/signupbot.js';

  var botpath = '' + __dirname + '/../../node_modules/musepm-signupbot';
  cp(fname, botpath + '/newapp-' + service + '.js');
  botpath = path.resolve(botpath);
  var botbin = '' + botpath + '/node_modules/.bin';
  var env = {
    PATH: process.env.PATH + ':' / +botbin
  };
  childproc.exec('cd ' + __dirname + '/../../node_modules/musepm-signupbot;' + ('npm run signup newapp-' + service + '.js'), { env: env }, function (e, o, er) {
    console.log(o);
    if (e) console.error(e);
    if (er) console.error(er);
  });
});

program.parse(process.argv);