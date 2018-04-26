// console.log('starting app notes.js');
const fs = require('fs');



var getAll = function () {
    console.log('Getting all notes');
    return fetchNotes();
};


// ADD NOTE
//------------------------------------------------------------------------
var addNote = function (title, body) {
    // console.log('Adding note: ',title, body);
    var notes = fetchNotes();
    var note = {
        title,
        body
    };


        var duplicateNote = notes.filter(function (note) {
            return note.title === title;
        }) ;


        if (duplicateNote.length === 0) {
            notes.push(note);
            saveNotes(notes);
            return note;
        }


};


// READING NOTE
//------------------------------------------------------------------------

var getNote = function(title){
  //  console.log('Getting note: ', title);
    var notes = fetchNotes();
    var filteredNotes = notes.filter(function (note) {
        return note.title === title;
    });
  ;
    return filteredNotes[0];
};

// REMOVE NOTE
//------------------------------------------------------------------------
var removeNote = function(title){
   // console.log('Removing note: ', title);
    var notes = fetchNotes();
    var filteredNotes = notes.filter(function (note) {
       return note.title != title;
    });
    saveNotes(filteredNotes);

    return notes.length !== filteredNotes.length;
};


// FUNKCE PRO NAHRADI a ULOZENI DAT DO SOUBORU
//------------------------------------------------------------------------

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

var logNote = function (note) {
    debugger;
    console.log('--');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
};

module.exports = {
    addNote: addNote,
    getAll,
    getNote,
    removeNote,
    logNote
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