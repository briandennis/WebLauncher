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
    win32: 'start',
    linux: 'xdg-open'
  }

  if (list.sites.length) {
    console.log(chalk.yellow('\launching...'))
    exec(`${openCommands[process.platform]} ${list.sites.join(' ')}`)
    console.log(chalk.green('Done.'))
  } else {
    console.log(chalk.green(`No sites to run in `) + chalk.cyan(list.name))
  }
}
