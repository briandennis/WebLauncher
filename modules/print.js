const chalk = require('chalk')
const error = require('./error')

module.exports = (api, list) => {

  try {
    if (list) {
      printCollection(api.get(list))
    } else {
      api.get.forEach( list => (api, list))
    }
  } catch (e) {
    error(e)
  }

}

function printCollection (api, list) {

  if (items.length) {
    const capCollection = `${list.name.slice(0,1).toUpperCase()}${list.name.slice(1)}`
    console.log(chalk.green(`\n${capCollection}:\n`))
    items.forEach( (item, index) => {
      console.log(`${chalk.yellow(`${index}:`)}\t${chalk.cyan(item)}`)
    })
    console.log('\n')
  } else {
    console.log(chalk.green('No sites stored.'))
  }
}
