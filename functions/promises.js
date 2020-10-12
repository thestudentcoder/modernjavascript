// Callback
const getDataCallback = (num, callback) => {
    // simulate a delay - 2000 ms or 2 sec
    // setTimeout(() => {
    //     callback(undefined, 'This time is up');
    // }, 2000);
    setTimeout(() => {
        if (typeof num === 'number') {
            callback(undefined, num * 2);
        } else {
            callback('Number must be provided');
        }

    }, 2000);
}

getDataCallback(2,(err, data) => {
    if (err) {
        console.log(err);
    } else {
        getDataCallback(data, (err, data) => {
            if (err) {
                console.log('err');
            } else {
                console.log(data);
            }
        })
    }
});

// Promise

const getDataPromise = (num) => {
    return new Promise((resolve, reject) => {
        // call our long running process here
        setTimeout(() => {
           typeof num === 'number' ? resolve(num * 2) : reject('Number must be provided');
        }, 2000);
    });
}
// called with 2 arguments: resolve, reject
// call resolve when things went well
// call reject when things errored out
// these are two separate functions
const myPromise = getDataPromise(123);

getDataPromise(2).then((data) => {
    getDataPromise(data).then((data => {
        console.log(data)
    }, (err) => {
        console.log(err);
    }))
}, (err) => {
    console.log(err);
})

// promise chaining
getDataPromise(10).then((data) => {
    return getDataPromise(data);
}).then((data) => {
    return 'this is some test data'
}).then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
})