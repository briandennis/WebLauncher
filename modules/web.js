const chalk = require('chalk')
const list = require('./list')
const error = require('./error')

module.exports = (api, args) => {

  const command = args.splice(0, 1)[0]

  switch (command) {
    case 'list':
    case 'ls':
      list(api, 'sites')
      break

    case 'add':
      addSites(api, args)
      break

    case 'clear':
      clearSites(api, args)
      break
  }
}

function addSites (api, args) {
  // validate input
  if (args.length) {
    api.add('sites', args)
  } else {
    error(`${chalk.underline.bgRed('add')} must be followed by URLS to be added.`)
  }
}

function clearSites (api, args) {
  const validatedArgs = args.filter( (arg) => {
    return !isNaN(parseInt(arg))
  })
  if (args.length && validatedArgs.length === args.length) {
    api.remove('sites', validatedArgs)
  } else if (!args.length) {
    api.remove('sites')
  } else {
    error(`${chalk.underline.bgRed('clear')} must have 0 or more integer arguments.`)
  }
}
