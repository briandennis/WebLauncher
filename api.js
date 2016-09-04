

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
