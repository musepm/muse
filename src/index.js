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
    require(`${mod}/lib/signup`);
  },

  save(data, cb) {
    require('json-update').update('muse.json', data, (e) => {
      if (e) {
        console.error(`Could not save muse.json: ${e}`);
        process.exit(2);
      }
      cb();
    });
  },

  newCredentials(data) {
    obj.save(data, () => {
      console.log("Muse saved credentials.");
    });
  }    
}

module.exports = obj;
