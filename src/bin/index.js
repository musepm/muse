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
  let fname = `node_modules/musepm-${service}/lib/signupbot.js`;
  childproc.exec(`casperjs ${fname}`, {}, (e, o, er) => {
    console.log(o);
    if (e) console.error(e);
    if (er) console.error(er);    
  });
});

program.parse(process.argv);
