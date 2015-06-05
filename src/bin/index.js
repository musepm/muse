#!/usr/bin/env node

require('shelljs/global');

var program = require('commander'),
    lib = require('../index');

program
.version('0.0.1')
.command('enable <service>')
.description('add service modules to project and sign up')
.action( (service) => {
  console.log(`Setting up ${service}`);
  lib.enable(service);
});

program
.command('newapp <service>')
.description('add a new app and get a token/key for a service')
.action( (service) => {
  exec('cd '+__dirname+'/node_modules/musepm-signupbot;' +
       'npm run signup ' + service);
});

program.parse(process.argv);
