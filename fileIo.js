const fs = require('fs');

function getUserHome() {
  return process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'];
}

function readInitialState() {
  try {
    return JSON.parse(fs.readFileSync(`${getUserHome()}/.web-launcher/store.json`, 'utf8'))
  } catch (err) {
    switch (err.code) {
      case 'ENOENT':
        return []
      case 'EACCES':
        throw 'Error: Cannot read store file.'
      default:
        throw `Error: ${err}`
    }
  }
}

function writeState (state) {

  if (!fs.existsSync(`${getUserHome()}/.web-launcher`)){
    fs.mkdirSync(`${getUserHome()}/.web-launcher`);
  }

  return new Promise( (resolve, reject) => {
    fs.writeFile(`${getUserHome()}/.web-launcher/store.json`, JSON.stringify(state), (err) => {
      if (!err) {
        resolve(true)
      } else {
        reject(err)
      }
    })
  })
}

module.exports = { readInitialState, writeState };
