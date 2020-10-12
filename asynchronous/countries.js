// 1. Convert getCountry to return a new prommise
// 2. Call getCountry and use then to print country name or the error
const countryCode = 'US';
const getCountryOld = (countryCode) => {
    return fetch(`https://restcountries.eu/rest/v2/alpha/${countryCode}`).then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error('unable to fetch data');
        }
    }).then((response) => {
        return response;
    })
}

const getCountry = async (countryCode) => {
    const response = await fetch(`https://restcountries.eu/rest/v2/alpha/${countryCode}`);

    if (response.status === 200) {
        return await response.json();
    } else {
        throw new Error('Unable to fetch country data');
    }
}

getCountry(countryCode).then((data) => {
    console.log(data.name);
}).catch(err => {
    console.log(err);
});