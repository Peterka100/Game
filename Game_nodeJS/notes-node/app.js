console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;
var command = process.argv[2];
console.log('Command:', command);
console.log('Yargs', argv);

if (command === 'add') {
    notes.addNote(argv.title, argv.body);
} else if (command === 'list') {
    notes.getAll();
} else if (command === 'read') {
    notes.getNote(argv.title);
} else if (command === 'remove') {
    console.log('Removing note');
} else {
    console.log('Command not recognized');
}



/*
var user;
user = os.userInfo();
var res = notes.addnotes();
console.log(res);

console.log('return:' + notes.add(9,2));
console.log(_.isString('Frank'));
console.log(_.isString(true));
console.log(_.uniq([1,2,'Peter',2,3,1,'Hanicka',1,2,3,4,5,'Mike']));

fs.appendFileSync('greetings.txt','Hello ' + user.username + '! ');
fs.appendFileSync(`greetings.txt`,`Hellos ${user.username} Jsem ${notes.age} let starý`);

console.log('end of run');

*/