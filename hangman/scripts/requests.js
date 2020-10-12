const getPuzzleOld = (wordCount) => {
    return fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
        if (response.status === 200) {
            return response.json();
        } else {
            throw new Error(`unable to fetch puzzle`);
        }
    }).then((data) => {
        // this will resolve whatever comes back from response.json() above
        return data.puzzle;
    });
};

// convert function from using promises to async await
const getPuzzle = async (wordCount) => {
    const response = await fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`);

    if (response.status === 200) {
        const data = await response.json(); // next line of will not run until you have the parsed data
        return data.puzzle;
    } else {
        throw new Error('Unable to get puzzle');
    }
};