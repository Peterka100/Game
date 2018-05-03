
console.log('Starting up');

setTimeout(function () {
    console.log('Inside of callback');
},2000);

setTimeout(function () {
    console.log('Second setTimeout');
},3000);

console.log('Finishing up');


/*

var add = (a, b) => {
    var total = a + b;

    return total;
};

var res = add(3, 8);

console.log(res);

*/