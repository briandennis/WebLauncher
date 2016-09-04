const list = require('./list')

module.exports = (api, args) => {

  const command = args.splice(0, 1)[0]

  switch (command) {
    case 'list':
    case 'ls':
      listSites('web')
      break

    case 'add':
      addSites()
      break

    case 'clear':
      clearSites()
      break
  }
}

function listSites () {
  console.log('list triggered!')
}

function addSites () {
  console.log('add triggered!')
}

function clearSites () {
  console.log('clear triggered!')
}
