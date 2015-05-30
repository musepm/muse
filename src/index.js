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
    exec('pwd');
    exec(`node ./node_modules/${mod}/lib/signup/index.js`);
  }

}

module.exports = obj;
