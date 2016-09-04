const spawn = require('child_process').spawn;

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

  const sites = api.get('sites')

  if (sites.length) {
    const command = sites.reduce( (prev, site, index) => {
      const seperator = index === sites.length ? '' : '|'
      return `${prev} ${openCommands(process.platform)} ${site} ${seperator}`
    }, '')

    spawn(command)
  }
}

function executeCommands (api) {

}
