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
    exec('node_modules/' + mod + '/node_modules/.bin/signup');
  },

  save: function save(data, cb) {
    require('json-update').update('muse.json', data, function (e) {
      if (e) {
        console.error('Could not save muse.json: ' + e);
        process.exit(2);
      }
      cb();
    });
  },

  newCredentials: function newCredentials(data) {
    obj.save(data, function () {
      console.log('Muse saved credentials.');
    });
  }
};

module.exports = obj;