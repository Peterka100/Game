console.log('starting app notes.js');

var getAll = function () {
    console.log('Getting all notes');
}

var addNote = function (title, body) {
    console.log('Adding note',title, body)

};

module.exports = {
    addNote: addNote,
    getAll: getAll
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