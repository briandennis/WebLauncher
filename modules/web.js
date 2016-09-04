const chalk = require('chalk')
const list = require('./list')

module.exports = (api, args) => {

  const command = args.splice(0, 1)[0]

  switch (command) {
    case 'list':
    case 'ls':
      list(api, 'sites')
      break

    case 'add':
      addSites()
      break

    case 'clear':
      clearSites()
      break
  }
}

function addSites () {
  console.log('add triggered!')

}

function clearSites () {
  console.log('clear triggered!')
}
