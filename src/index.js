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
    if (service.indexOf('/')>0) {
      let tokens = service.split('/');
      var install = service.replace('/','/muse-');
      var mod = `muse-${tokens[1]}`;
    } else {
      var mod = install = `muse-${service}`;
    }
    let ret = exec(`npm install ${install}`);
    require(`node_modules/${mod}/signup`);
  }

}

module.exports = obj;
