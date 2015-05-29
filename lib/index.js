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
    require('node_modules/' + mod + '/signup');
  }

};

module.exports = obj;