var somePromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        //resolve ("Hey, It works");
        reject("Unable to fullfil promise")
    },2500)
});

somePromise.then(function (message) {
    console.log("Success: ", message);
},function (errorMessage) {
    console.log(errorMessage);
    });