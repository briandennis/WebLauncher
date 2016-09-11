const exec = require('child_process').exec

module.exports = (api, collection) => {

  const openCommands = {
    darwin: 'open',
    win32: 'start',
    linux: 'xdg-open'
  }

  const sites = api.get(collection).map( (site) => {
    return `http://${site}`
  })

  if (sites.length) {
    exec(`${openCommands[process.platform]} ${sites.join(' ')}`)
  }
}
