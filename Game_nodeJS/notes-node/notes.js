console.log('starting app notes.js');

var getAll = function () {
    console.log('Getting all notes');
}

var addNote = function (title, body) {
    console.log('Adding note',title, body);
};

var getNote = function(title){
    console.log('Getting note: ', title);
};

var removeNote = function(title){
    console.log('Removing note: ', title);
}

module.exports = {
    addNote: addNote,
    getAll: getAll,
    getNote: getNote,
    removeNote: removeNote
};


/*
module.exports.addnotes = function () {
    console.log('addnote');
    return 'New note';
};

module.exports.add = function (a, b) {
   return  a + b;
};
*/