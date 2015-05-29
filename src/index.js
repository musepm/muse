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
    require(`node_modules/${mod}/signup`);
  }

}

module.exports = obj;
