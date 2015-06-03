require('shelljs/global');
var { EventEmitter } = require('events');

var obj = {
  mocking: false,

  mockAll() {
    obj.mocking = true;
  },

  doRequire(service) {
    if (obj.mocking) {
      return require(`${service}/mock`);
    } else {
      return require(`${service}/lib/real`);
    }
  },

  enable(service) {
    var mod = `musepm-${service}`;
    let mpm = exec(`npm install --save musepm`);
    let ret = exec(`npm install --save ${mod}`);
    require(`${process.cwd()}/node_modules/${mod}/lib/signup`);
  },

  signon(service, cfg) {
    require(service).signon(cfg);   
  }
}

class Api extends EventEmitter {
  constructor(config) {
    super();
    this.config = config;
  }
}

obj.Api = Api;

module.exports = obj;
