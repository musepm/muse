#!/usr/bin/env node

require('shelljs/global');
var childproc = require('child_process'),
    program = require('commander'),
    path = require('path'),
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
  let dir = `node_modules/musepm-${service}/lib`;
  let fname = `signupbot.js`;
  let opts = { async:true, silent:false };
  exec(`cd ${dir}; node lib/signup`, opts, (code, o) => {
    console.log(o);
    if (er) console.error(er); 
  });
});

program.parse(process.argv);
