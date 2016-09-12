const exec = require('child_process').exec
const chalk = require('chalk')

module.exports = (api, collection) => {

  const openCommands = {
    darwin: 'open',
    win32: 'start',
    linux: 'xdg-open'
  }

  const sites = api.get(collection).sites.map( (site) => {
    return `http://${site}`
  })

  if (sites.length) {
    console.log(chalk.blue('\ntending to herd...'))
    exec(`${openCommands[process.platform]} ${sites.join(' ')}`)
    console.log(`\n
        . - . ' \` ;  \` - .
      (_,         .-:'  \`; \`-._
    ,'o"(        (_,           )
   (__,-'      ,'o"(            )>
      (       (__,-'            )
       \`-'._.--._(             )
          |||  |||\`-'._.--._.-'
                     |||  |||
      \n`)
    console.log(chalk.blue('Herd tended to.\n'))
  }
}
