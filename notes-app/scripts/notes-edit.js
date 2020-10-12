const noteId = location.hash.substring(1);
let notes = getSavedNotes();
let note = notes.find(note => note.id === noteId);

if (!note) {
    location.assign('/index.html');
}

const noteElementTitle = document.querySelector('#note-title');
const noteElementBody = document.querySelector('#note-body');
const removeButton = document.querySelector('#remove-note');
const dateElement = document.querySelector('#last-updated');

// populate textbox and textarea on load
noteElementTitle.value = note.title;
noteElementBody.value = note.body;
dateElement.textContent = generateLastEdited(note.updatedAt);

noteElementTitle.addEventListener('input', (e) => {
    note.title = e.target.value;
    note.updatedAt = moment().valueOf();
    dateElement.textContent = generateLastEdited(note.updatedAt);
    saveNotes(notes);
});
noteElementBody.addEventListener('input', (e) => {
    note.body = e.target.value;
    note.updatedAt = moment().valueOf();
    dateElement.textContent = generateLastEdited(note.updatedAt);
    saveNotes(notes);
});

removeButton.addEventListener('click', (e) => {
    removeNote(note.id);
    saveNotes(notes);
    location.assign('/index.html');
});

// This will fire for other pages that have changed data not this one
window.addEventListener('storage', (e) => {
    console.log(e);
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue);
        note = notes.find(note => note.id === noteId);

        if (!note) {
            location.assign('/index.html');
        }

        // populate textbox and textarea on load
        noteElementTitle.value = note.title;
        noteElementBody.value = note.body;
        dateElement.textContent = generateLastEdited(note.updatedAt);
    }
});