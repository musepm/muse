'use strict';

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

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
    return regeneratorRuntime.async(function signon$(context$1$0) {
      while (1) switch (context$1$0.prev = context$1$0.next) {
        case 0:
          context$1$0.next = 2;
          return require('musepm-' + service).signon(cfg);

        case 2:
          return context$1$0.abrupt('return', context$1$0.sent);

        case 3:
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