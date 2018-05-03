
console.log('Starting up');

setTimeout(function () {
    console.log('Inside of callback');
},2000);

setTimeout(function () {
    console.log('Second setTimeout');
},0);

console.log('Finishing up');