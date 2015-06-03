'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _get = require('babel-runtime/helpers/get')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

require('shelljs/global');

var _require = require('events');

var EventEmitter = _require.EventEmitter;

var obj = {
  mocking: false,

  mockAll: function mockAll() {
    obj.mocking = true;
  },

  doRequire: function doRequire(service) {
    if (obj.mocking) {
      return require('' + service + '/mock');
    } else {
      return require('' + service + '/lib/real');
    }
  },

  enable: function enable(service) {
    var mod = 'musepm-' + service;
    var mpm = exec('npm install --save musepm');
    var ret = exec('npm install --save ' + mod);
    require('' + process.cwd() + '/node_modules/' + mod + '/lib/signup');
  },

  signon: function signon(service, cfg) {
    obj.doRequire(service).signon(service, cfg);
  }
};

var Api = (function (_EventEmitter) {
  function Api(config) {
    _classCallCheck(this, Api);

    _get(Object.getPrototypeOf(Api.prototype), 'constructor', this).call(this);
    this.config = config;
  }

  _inherits(Api, _EventEmitter);

  return Api;
})(EventEmitter);

obj.Api = Api;

module.exports = obj;