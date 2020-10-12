// objects are key-value pairs
// properties are information stored in an object
let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 384
}

console.log(myBook);
console.log(myBook.title);
myBook.title = 'Animal Farm';
console.log(`${myBook.title} by ${myBook.author}`);