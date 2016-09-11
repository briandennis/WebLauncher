const chalk = require('chalk')

module.exports = (api, list) => {

  switch (list) {
    case 'sites':
    case 'commands':
      printCollection(api, list);
      break;

    default:
      printCollection(api, 'sites');
      printCollection(api, 'commands');
  }
}

function printCollection (api, collection) {
  const items = api.get(collection);

  if (items.length) {
    const capCollection = `${collection.slice(0,1).toUpperCase()}${collection.slice(1)}`
    console.log(chalk.green(`\n${capCollection}:\n`))
    items.forEach( (item, index) => {
      console.log(`${chalk.yellow(`${index}:`)}\t${chalk.cyan(item)}`)
    })
    console.log('\n')
  } else {
    console.log(chalk.green('No sites stored.'))
  }
}

function printCommands () {

}
