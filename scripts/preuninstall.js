const { deleteState } = require('../fileIo');
const chalk = require('chalk')

deleteState().then(() => {
  console.log(chalk.yellow('Removing WebLauncher files.'));
  console.log(chalk.green('Beginning uninstall.'));
}).catch((err) => {
  console.log(`${chalk.red("Failure")} uninstalling WebLauncher with error: ${err}. Exiting.`)
});
