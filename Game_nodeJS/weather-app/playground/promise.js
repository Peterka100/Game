/*
var somePromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve ("Hey, It works");
        resolve();
        reject("Unable to fullfil promise")
    },2500)
});

somePromise.then(function (message) {
    console.log("Success: ", message);
},function (errorMessage) {
    console.log(errorMessage);
    });
*/

var asyncAdd = function (a,b) {
    return new Promise(function (resolve, reject) {
       setTimeout(function () {
           if (typeof a === 'number' && typeof b === 'number'){
               resolve(a + b)
           } else {
               reject('Arguments must be numbers');
           };
       },1500)
    });
};

asyncAdd(5, 7).then(function(res) {
    console.log('Result:', res);
return asyncAdd(res, 33);
}).then(function(res) {
    console.log('Should be 45', res);
}).catch(function(errorMessage) {
    console.log(errorMessage);
});