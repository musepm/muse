#!/usr/bin/env node

var program = require('commander');
var lib = require('../lib/index');

program
.version('0.0.1')
.command('enable <service>')
.description('add service modules to project and sign up')
.action( (service) => {
  console.log(`Setting up ${service}`);
  lib.enable(service);
});

program.parse(process.argv);
