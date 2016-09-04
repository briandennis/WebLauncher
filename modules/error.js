const chalk = require('chalk')

module.exports = (message) => {
  console.log(chalk.red('///////////'))
  console.log(chalk.red(message))
  console.log(chalk.red('///////////'))
}
