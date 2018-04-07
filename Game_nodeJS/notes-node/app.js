console.log('starting app.js');

const fs = require('fs');
const os = require('os');
const _ = require ('lodash');
const notes = require ('./notes.js');


//var user;
//user = os.userInfo();
//var res = notes.addnotes();
//console.log(res);

console.log('return:' + notes.add(9,2));
console.log(_.isString('Gary'));
console.log(_.isString(true));

var filteredArray = _.uniq(['Gary',1,1,1,2,'Gary',2,1,2,3,4,5,5,'Garz','Gary' ]);
console.log(filteredArray);


//fs.appendFileSync('greetings.txt','Hello ' + user.username + '! ');
//fs.appendFileSync(`greetings.txt`,`Hellos ${user.username} Jsem ${notes.age} let starý`);

console.log('end of run');