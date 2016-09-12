const fileIo = require('./fileIo')
const error = require('./modules/error')
const chalk = require('chalk')

class api {
  constructor () {
    this.state = fileIo.readInitialState()
  }

  save () {
    return fileIo.writeState(this.state)
  }

  // lists

  getList(name) {
    const results = this.state.filter( (list) => {
      return list.name === name
    })

    return results.length ? results[0] : null
  }

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

  removeList (name) {
    const list = this.getList(name)

    if (list) {
      this.state.filter( list => list.name !== collection)
    } else {
      throw 'List does not exist.'
    }
  }

  // list items

  get (name) {
    const list = this.getList(name)

    if (list) {
      return list
    } else {
      throw 'Collection not found.'
    }
  }

  addItems (name, items) {
    const list = this.getList(name)

    if (list) {
      list.sites = list.sites.concat(items)
    } else {
      throw 'List not found.'
    }
  }

  removeItems (name, indexes) {
    const list = this.getList(name)

    if (list) {
      if (indexes) {
        list.sites = list.sites.filter( (item, index) => {
          return !indexes.includes(index)
        })
      } else {
        list.sites = [];
      }
    } else {
      throw 'List not found.'
    }
  }
}

module.exports = new api();
