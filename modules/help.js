const error = require('./error')
const chalk = require('chalk')

module.exports = (section) => {
    switch (section) {
      case 'root':
      case undefined:
        printTopLevel()
        break

      case 'groups':
        printGroup()
        break

      case 'group':
        printGroupInstance()
        break
    }
}

function printTopLevel () {
  console.log(chalk.yellow(`

list [ls] \t\t\t List all groups.
\n
group    \t\t\t Add or remove a group.
\n
run [open] {groupName} \t\t Open group in default browser.
\n
help    \t\t\t Print help menu.
\n
{groupName} \t\t\t Run, add or remove sites from specified group.
`))
    printKey()
}

function printGroupInstance () {
  console.log(chalk.green('> web {groupName} :'))
  console.log(chalk.yellow(`
list [ls] \t\t\t\t List all sites in the group.
\n
add [-a] {site1} {site2} ...    \t Add sites to group.
\n
clear [delete] [-d] ?{siteIndex} \t Remove sites. If no args, removes all.
\n
run [open] \t\t\t\t Open group in default browser.
\n
help    \t\t\t\t Print this help menu.
    `))
    printKey()
}

function printGroup () {
  console.log(chalk.green('> web group :'))
  console.log(chalk.yellow(`
list [ls] \t\t\t\t List all sites in the group.
\n
add [-a] {groupName}   \t\t\t Add group with specified name.
\n
clear [delete] [-d] {groupName}\t\t Remove group with specified name.
\n
help    \t\t\t\t Print this help menu.
    `))
    printKey()
}

function printKey () {
  console.log(chalk.cyan('Key: [alias] {arg} ?{optionalArg}\n'))
}
