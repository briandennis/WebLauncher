const chalk = require('chalk')

module.exports = (api, collection) => {

  switch (collection) {
    case 'sites':
      printSites()
      break

    case 'commands':
      printCommands()
      break

    default:
      printSites()
      printCommands()
  }
}

function printSites () {
  const sites = api.get();

  if (sites.length) {
    console.log(chalk.green('Sites:\n'))
    sites.forEach( (site, index) => {
      console.log(`${index}\t\t${site}`)
    })
  } else {
    console.log(chalk.green('No sites stored.'))
  }
}
