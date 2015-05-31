require('shelljs/global');

var obj = {
  mocking: false,

  doRequire(service) {
    if (mocking) {
      return require(`${service}/mock`);
    } else {
      return require(`${service}/real`);
    }
  },

  enable(service) {
    var mod = `musepm-${service}`;
    let ret = exec(`npm install ${mod}`);
    require(`${process.cwd()}/node_modules/${mod}/lib/signup`);
  }

}

class Api {
  constructor(config) {
    this.config = config;
  }
}

obj.Api = Api;

module.exports = obj;
