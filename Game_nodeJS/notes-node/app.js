console.log('starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require ('./notes.js');

var user;
user = os.userInfo();
var res = notes.addnotes();
console.log(res);

console.log('return:' + notes.add(9,2));


//fs.appendFileSync('greetings.txt','Hello ' + user.username + '! ');
fs.appendFileSync(`greetings.txt`,`Hellos ${user.username} Jsem ${notes.age} let starý`);

console.log('end of run');