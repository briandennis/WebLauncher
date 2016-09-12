const error = require('./error')
const chalk = require('chalk')

module.exports = (section) => {
    switch (section) {
      case 'root':
      case undefined:
        printTopLevel()
        break

      case 'group'
        printGroup()
        break
    }
}

function printTopLevel () {
  console.log(chalk.yellow(`

    list [ls] \t\t\t List all groups.
    \n
    group    \t\t\t Add or remove a group.
    \n
    help    \t\t\t Print help menu.
    \n
    {groupName} \t\t Run, add or remove sites from specified group.
    `))
    printKey()
}

function printCollection () {
  console.log(chalk.yellow(`

    list [ls] \t\t\t List all sites in the group.
    \n
    add [-a] {site1} {site2} ...    \t\t\t Add sites to group.
    \n
    clear [delete] [-d] ?{siteIndex} \t\t\t Remove sites. Removes all sites if no indexes specified.
    \n
    help    \t\t\t Print help menu.
    \n
    `))
    printKey()
}

function printKey () {
  console.log(chalk.cyan('\tKey: [alias] {arg} ?{optionalArg}'))
}
