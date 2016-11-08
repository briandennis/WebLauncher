const exec = require('child_process').exec
const chalk = require('chalk')
const error = require('./error')

module.exports = (api, list) => {

  try {
    if (list) {
      executeList(api, api.get(list))
    } else {
      api.get().forEach(executeList.bind(api))
    }
  } catch (e) {
    error(e)
  }

}

function executeList (api, list) {
  const openCommands = {
    darwin: 'open',
    linux: 'xdg-open'
  }

  function getCommandString(platform, sites) {
    // run commands separated by & for windows
    if (platform === 'win32') return sites.map(site => `start ${site}`).join(' & ')
    return `${openCommands[process.platform]} ${sites.join(' ')}`
  }

  if (list.sites.length) {
    console.log(chalk.yellow('\launching...'))
    exec(getCommandString(process.platform, list.sites))
    console.log(chalk.green('Done.'))
  } else {
    console.log(chalk.green(`No sites to run in `) + chalk.cyan(list.name))
  }
}
