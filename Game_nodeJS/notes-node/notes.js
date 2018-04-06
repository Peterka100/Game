console.log('starting app notes.js');

module.exports.age = 25;
module.exports.addnotes = function () {
    console.log('addnote');
    return 'New note';
};

module.exports.add = function (a, b) {
   return  a + b;
};
