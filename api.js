const fileIo = require('./fileIo')

class api {
  constructor () {
    this.state = fileIo.readInitialState()
  }

  get (collection) {
    switch (collection) {
      case 'sites':
        return this.state.sites

      case 'commands':
        return this.state.commands

      default:
        return this.state
    }
  }

  set (newState) {
    this.state =  newState
  }

  save () {
    return fileIo.writeState(this.state)
  }

  add (list, items) {
    console.log(typeof this.state)
    this.state[list] = [...this.state[list], ...items]
  }

  remove (list, indexes) {
    if (indexes) {
      this.state[list] = this.state[list].filter( (item, index) => {
        return !indexes.includes(index)
      })
    } else {
      this.state[list] = [];
    }
  }
}

module.exports = new api();
