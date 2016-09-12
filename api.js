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

  getList (name) {
    const results = this.state.filter( (list) => {
      return list.name === name
    })

    return results.length ? results[0] : null
  }

  listExists (name) {
    return !!this.getList(name)
  }

  addList (name) {
    const list = this.getList(name)

    if (!list) {
      this.state.push({ name, sites: [] })
    } else {
      throw 'List already exists.'
    }
  }

  removeList (name) {
    const listExists = this.listExists(name)
    if (listExists) {
      this.state = this.state.filter( list => (list.name !== name))
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
      return this.state
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
