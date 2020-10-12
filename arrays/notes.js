const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
},{
    title: 'Habits to work on',
    body: 'Exercise.  Eating a bit better'
},{
    title: 'Office modifications',
    body: 'Getting a new seat'
}];

const findNote = function (notes, noteTitle) {
    return notes.find((note) => note.title.toLowerCase() === noteTitle.toLowerCase());
}

const filteredNotes = (searchText) => notes.filter(note => note.title.toLowerCase().includes(searchText)
    || note.body.toLowerCase().includes(searchText));

const sortNotes = (notes) => notes.sort((a,b) => a.title.localeCompare(b.title));

const note = findNote(notes,'Habits to work on');
// console.log(note);
// console.log(filteredNotes('mod'));
// console.log(notes);
sortNotes(notes);
console.log(notes);