console.log('Starting app.js')

const yargs = require('yargs')
const notes = require('./notes.js')
const argv = yargs.argv

//console.log('Yargs', yargs.argv)

const title= yargs.argv.title
const body = yargs.argv.body
const command = yargs.argv._[0]
// console.log(title, body, command)

if (command === 'add'){
    console.log('adding note')
    notes.addingNote(title, body)
} else if (command === 'remove'){
    console.log('removing note')
    notes.removingNote(title)
} else if (command === 'read'){
    console.log('reading note')
    notes.readingNote(title)
} else if (command === 'list'){
    console.log('listing all note')
    notes.listingNote()
} else {
    console.log(
        "\n ERROR!!!: Unknown command was used \n the list off commands: \n add Note\n remove Note\n read Note\n list Note")
}