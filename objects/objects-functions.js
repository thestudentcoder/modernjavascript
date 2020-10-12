let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 723
}

const getSummary = function (book) {
    console.log(`${book.title} by ${book.author} with ${book.pageCount}`);
}

console.log(myBook);
console.log(otherBook);

// return an object from a function
// this allows you to return multiple vales

const getSummary2 = function (book) {
    return {
        summary: `${book.title} by ${book.author} with ${book.pageCount}`,
        pageCountSummary: `${book.title} has ${book.pageCount} pages long`
    };
}

let summary1 = getSummary2(myBook);
let summary2 = getSummary2(otherBook);

console.log(summary1);
console.log(summary2);
