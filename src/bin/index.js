#!/usr/bin/env node

var program = require('commander');

program
.version('0.0.1')
.command('enable <service>')
.description('add service modules to project and sign up')
.action( (service) => {
  console.log(`Setting up ${service}`);
});

program.parse(process.argv);
