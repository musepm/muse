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
  let lib = `${process.cwd()}/node_modules/musepm-${service}`;
  let fname = `${lib}/lib/signupbot.js`;
  
  let botpath = `${__dirname}/../../node_modules/musepm-signupbot`;
  cp(fname, botpath+'/newapp-'+service+'.js');
  botpath = path.resolve(botpath); 
  let botbin = `${botpath}/node_modules/.bin`;
  let env = {
    PATH: process.env.PATH+':'/+botbin
  };
  childproc.exec(`cd ${__dirname}/../../node_modules/musepm-signupbot;` +
       `npm run newapp newapp-${service}.js`, { env }, (e, o, er) => {
    console.log(o);
    if (e) console.error(e);
    if (er) console.error(er);    
  });
});

program.parse(process.argv);
