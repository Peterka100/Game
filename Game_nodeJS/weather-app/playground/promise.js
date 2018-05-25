var somePromise = new Promise(function (resolve, reject) {
    resolve ("Hey, It works");
});

somePromise.then(function (message) {
    console.log("Success: ", message);
});