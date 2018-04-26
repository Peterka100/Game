//console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOption = {
    describe: 'Ttile of note',
    demand: true,
    alias: 't'
};

const argv = yargs
    .command('add','add a new note',{
        title:titleOption,
        body:{
            describe: 'Body of note',
            demand: true,
            alias: 'b'
        }
    })
    .command('list', 'List all notes')
    .command('read', 'Read a note', {
        title: titleOption
    })
    .command('remove', 'Remove a note',{
        title: titleOption
    })
    .help()
    .argv;
var command = process.argv[2];
//console.log('Command:', command);
//console.log('Yargs', argv);

// ADD NOTES ----------------------------------------
if (command === 'add') {
    var note = notes.addNote(argv.title,argv.body);
    console.log(note);
    if (note) {
        console.log('Note created');
        notes.logNote(note);
    } else {
        console.log('Note title taken');
    }}


    // LIST OF NOTES ----------------------------------------
    else if (command === 'list') {
    var allNotes = notes.getAll();
    console.log('Printing ${allNotes.length} notes.');
    allNotes.forEach (function (note) {
        notes.logNote(note);
    });
    }


    // READ ALL NOTES ----------------------------------------
    else if (command === 'read') {
    //notes.getNote(argv.title);
    var note = notes.getNote(argv.title);
    console.log(note);
    if (note) {
        console.log('Note found');
        notes.logNote(note);
    } else {
        console.log('Note not found');
    }


    // REMOVE NOTE ----------------------------------------
} else if (command === 'remove') {
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Note was removed' : 'Note not found';
    console.log(message);
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