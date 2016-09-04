const chalk = require('chalk')

module.exports = (api, list) => {

  switch (list) {
    case 'sites':
      printSites(api)
      break

    case 'commands':
      printCommands()
      break

    default:
      printSites()
      printCommands()
  }
}

function printSites (api) {
  const sites = api.get('sites');

  if (sites.length) {
    console.log(chalk.green('\nSites:\n'))
    sites.forEach( (site, index) => {
      console.log(`${chalk.yellow(`${index}:`)}\t${chalk.cyan(site)}`)
    })
    console.log('\n')
  } else {
    console.log(chalk.green('No sites stored.'))
  }
}
