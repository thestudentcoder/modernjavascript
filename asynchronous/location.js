// 1. Create getLocation function which takes no arguments
// 2. Setup getLocation to make a request to the url an parse the data
// 3. Use getLocation to print the city, region, and country information
const token = '801b4185d66f11';
const getLocationOldç = () => {
    return fetch(`https://cors-anywhere.herokuapp.com/https://ipinfo.io/json?token=${token}`).then((response) => {
        if (response.status === 200) {
            return response.json();
        } else {
            throw new Error('unable to retrieve location');
        }
    }).then((data) => {
        return data;
    })
}


const getLocation = async () => {
    const response = fetch(`https://cors-anywhere.herokuapp.com/https://ipinfo.io/json?token=${token}`);

    if (response.status === 200) {
        return await response.json();
    } else {
        throw new Error('unable to retrieve location');
    }
}

getLocation().then((data) => {
    console.log(`city: ${data.city} region: ${data.region} country: ${data.country}`);
}).catch(err => {
    console.log(err);
})