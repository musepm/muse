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
    if (service.indexOf('/') > 0) {
      var tokens = service.split('/');
      var install = service.replace('/', '/muse-');
      var mod = 'muse-' + tokens[1];
    } else {
      var mod = install = 'muse-' + service;
    }
    var ret = exec('npm install ' + install);
    require('node_modules/' + mod + '/signup');
  }

};

module.exports = obj;