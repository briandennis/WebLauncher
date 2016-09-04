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
      clearSites()
      break
  }
}

function addSites (api, args) {
  // validate input
  if (args.length) {
    api.add(args)
  } else {
    error(`${chalk.underline.bgRed('add')} must be followed by URLS to be added.`)
  }
}

function clearSites () {
  console.log('clear triggered!')
}
