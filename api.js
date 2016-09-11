const fileIo = require('./fileIo')
const error = require('./modules/error')
const chalk = require('chalk')

class api {
  constructor () {
    this.state = fileIo.readInitialState()
  }

  get (collection) {
    const results = this.state.filter( (list) => {
      return list.name === collection
    })

    if (results.length) {
      return results[0]
    } else {
      throw 'Collection not found.'
    }
  }

  save () {
    return fileIo.writeState(this.state)
  }

  addList (list) {
    if (!this.state[list]) {
      this.state[list] = []
    } else {
      throw 'List already found.'
    }
  }

  addItems (list, items) {
    if (this.state[list]) {
      this.state[list] = [...this.state[list], ...items]
    } {
      throw 'List not found.'
    }
  }

  remove (list, indexes) {
    if (this.state[list]) {
      if (indexes) {
        this.state[list] = this.state[list].filter( (item, index) => {
          return !indexes.includes(index)
        })
      } else {
        this.state[list] = [];
      }
    } else {
      throw 'List not found.'
    }
  }
}

module.exports = new api();
