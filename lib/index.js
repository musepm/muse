'use strict';

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

require('shelljs/global');

var obj = {
  mocking: false,

  doRequire: function doRequire(service) {
    if (obj.mocking) {
      return require('' + service + '/mock');
    } else {
      return require('' + service + '/lib/real');
    }
  },

  enable: function enable(service) {
    var mod = 'musepm-' + service;
    var ret = exec('npm install ' + mod);
    require('' + process.cwd() + '/node_modules/' + mod + '/lib/signup');
  }

};

var Api = function Api(config) {
  _classCallCheck(this, Api);

  this.config = config;
};

obj.Api = Api;

module.exports = obj;