const fileIo = require('./fileIo')

class api {
  constructor () {
    this.state = fileIo.readInitialState()
  }

  get () {
    return this.state
  }

  set (newState) {
    this.state =  newState
  }

  save () {
    return fileIo.writeState(this.state)
  }
}

module.exports = new api();
