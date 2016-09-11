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

  // lists

  addList (list) {
    const results = this.state.filter( (list) => {
      return list.name === collection
    })

    if (!results.length) {
      this.state.push({ name: list, sites: [] })
    } else {
      throw 'List already found.'
    }
  }

  removeList (list) {
    const results = this.state.filter( (list) => {
      return list.name === collection
    })

    if (results.length) {
      this.state.filter( list => list.name !== collection)
    } else {
      throw 'List does not exist.'
    }
  }

  // list items

  addItems (list, items) {
    if (this.state[list]) {
      this.state[list] = [...this.state[list], ...items]
    } {
      throw 'List not found.'
    }
  }

  removeItems (list, indexes) {
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
