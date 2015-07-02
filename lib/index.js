'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _get = require('babel-runtime/helpers/get')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

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
      return require(service + '/mock');
    } else {
      return require(service + '/lib/real');
    }
  },

  enable: function enable(service) {
    var mod = 'musepm-' + service;
    var mpm = exec('npm install --save musepm');
    var ret = exec('npm install --save ' + mod);
    require(process.cwd() + '/node_modules/' + mod + '/lib/signup');
  },

  signon: function signon(service, cfg) {
    var srv;
    return _regeneratorRuntime.async(function signon$(context$1$0) {
      while (1) switch (context$1$0.prev = context$1$0.next) {
        case 0:
          context$1$0.next = 2;
          return _regeneratorRuntime.awrap(require('musepm-' + service).signon(cfg));

        case 2:
          srv = context$1$0.sent;
          return context$1$0.abrupt('return', srv);

        case 4:
        case 'end':
          return context$1$0.stop();
      }
    }, null, this);
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