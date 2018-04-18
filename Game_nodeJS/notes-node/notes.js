console.log('starting app notes.js');
const fs = require('fs');

var getAll = function () {
    console.log('Getting all notes');
};

var addNote = function (title, body) {
    console.log('Adding note: ',title, body);
    var notes = fetchNotes();
    var note = {
        title,
        body
    };


    /*
    try {
        var noteString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(noteString);
    } catch (e) {

    }
    */

        var duplicateNote = notes.filter(function (note) {
            return note.title === title;
        }) ;


        if (duplicateNote.length === 0) {
            notes.push(note);
            saveNotes(notes);
        }


};

var getNote = function(title){
    console.log('Getting note: ', title);
};

var removeNote = function(title){
    console.log('Removing note: ', title);
};

var fetchNotes = function () {
    try {
        var noteString = fs.readFileSync('notes-data.json');
        return JSON.parse(noteString);
    } catch (e) {
        return [];
    }
};

var saveNotes = function (notes) {
        fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};



module.exports = {
    addNote: addNote,
    getAll: getAll,
    getNote: getNote,
    removeNote: removeNote,
};


/*
//ADDING NOTE

const fs = require('fs');
var  addNote  = function (title,body) {
    var notes = [];
    var note = {
        title,
        body
    };

    notes.push(note);
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

*/

/*
module.exports.addnotes = function () {
    console.log('addnote');
    return 'New note';
};

module.exports.add = function (a, b) {
   return  a + b;
};
*/