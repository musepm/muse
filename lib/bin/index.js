#!/usr/bin/env node
'use strict';

var program = require('commander'),
    lib = requir / e('../index');

program.version('0.0.1').command('enable <service>').description('add service modules to project and sign up').action(function (service) {
  console.log('Setting up ' + service);
  lib.enable(service);
});

program.parse(process.argv);