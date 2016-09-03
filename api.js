const fs = require('fs');

class api {
  constructor () {
    this.state = readInitialState()
  }

  get () {
    return this.state
  }

  set (newState) {
    this.state =  newState
  }

  save () {
    return writeState(this.state)
  }
}

module.exports = new api();

// private

function readInitialState() {
  try {
    return fs.readFileSync('store.json', 'utf8')
  } catch (err) {
    switch (err.code) {
      case 'ENOENT':
        return {}
      case 'EACCES':
        throw 'Error: Cannot read store file.'
      default:
        throw `Error: ${err}`
    }
  }
}

function writeState (state) {
  return new Promise( (resolve, reject) => {
    fs.writeFile('store.json', JSON.stringify(state), (err) => {
      if (!err) {
        resolve(true)
      } else {
        reject(err)
      }
    })
  })
}
