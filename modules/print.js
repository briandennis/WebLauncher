const chalk = require('chalk')
const error = require('./error')

module.exports = (api, list) => {

  try {
    if (list) {
      console.log(list)
      printCollection(api.get(list))
    } else {
      api.get().forEach(printCollection)
    }
  } catch (e) {
    error(e)
  }

}

function printCollection (list) {

  const capCollection = `${list.name.slice(0,1).toUpperCase()}${list.name.slice(1)}`
  console.log(chalk.green(`\n${capCollection}:\n`))

  if (list.sites.length) {
    list.sites.forEach( (item, index) => {
      console.log(`${chalk.yellow(`${index}:`)}\t${chalk.cyan(item)}`)
    })
  } else {
    console.log(chalk.cyan('No sites stored.'))
  }
  console.log('\n')
}
