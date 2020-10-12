const getDataPromise = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
        typeof num === 'number' ? resolve(num * 2) : reject('Number must be provided')
    }, 2000);
});

// async always returns a promise
const processData = async () => {
    // function will reject when an error is thrown
    //throw new Error('Something went wrong');
    // the promise gets resolve with whatever value we return
    let data = await getDataPromise(2);
    data = await getDataPromise(data);
    return data;
}

processData().then((data) => {
    console.log('Data', data)
}).catch((error) => {
    console.log('Error', error);
})
console.log(processData());