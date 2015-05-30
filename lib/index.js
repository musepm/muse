'use strict';

require('shelljs/global');

var obj = {
  mocking: false,

  doRequire: function doRequire(service) {
    if (mocking) {
      return require('' + service + '/mock');
    } else {
      return require('' + service + '/real');
    }
  },

  enable: function enable(service) {
    var mod = 'musepm-' + service;
    var ret = exec('npm install ' + mod);
    exec('pwd');
    exec('node ./node_modules/' + mod + '/lib/signup/index.js');
  }

};

module.exports = obj;