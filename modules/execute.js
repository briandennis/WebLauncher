const exec = require('child_process').exec

module.exports = (api, collection) => {

  switch (collection) {
    case 'sites':
      executeSites(api)
      break

    case 'commands':
      executeCommands(api)
      break

    default:
      executeSites(api)
      executeCommands(api)
  }
}

function executeSites (api) {

  const openCommands = {
    darwin: 'open',
    win32: 'start',
    linux: 'xdg-open'
  }

  const sites = api.get('sites').map( (site) => {
    return `https://${site}`
  })

  if (sites.length) {
    exec(`${openCommands[process.platform]} ${sites.join(' ')}`)
  }
}

function executeCommands (api) {

}
