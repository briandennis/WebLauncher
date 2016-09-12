const error = require('./error')
const help  = require('./help')

module.exports = (api, args) => {

  const command = args.splice(0, 1)[0]

  switch (command) {
    case 'add':
    case '-a':
      addList(api, args)
      break

    case 'clear':
    case 'delete':
    case '-d':
      removeList(api, args)
      break

    case 'help':
    default:
      error('Not sure what to do there.')
      help('groups')
  }
}

function addList (api, args) {
  try {
    api.addList(args[0])
  } catch (e) {
    error(e)
  }
}

function removeList (api, args) {
  try {
    api.removeList(args[0])
  } catch (e) {
    error(e)
  }
}
