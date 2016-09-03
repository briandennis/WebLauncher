const fs = require('fs');

class api {
  constructor () {
    readInitialState()
      .then( (fileContents) => {
        this.state = JSON.parse(fileContents);
      })
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
  return new Promise( (resolve, reject) => {
    fs.readFile('store.json', 'utf8', (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
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
