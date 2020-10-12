// strict mode
'use strict'

// Read existing notes from localStorag
const getSavedNotes = () => {
    const notesJSON = localStorage.getItem('notes');
    try {
        return notesJSON? JSON.parse(notesJSON) : [];
    } catch (e) {
        return [];
    }
}

// Remove a note from the list
const removeNote = (id) => {
    // the function inside findIndex gets called for each note
    const noteIndex = notes.findIndex(function (note) {
        return note.id === id;
    });

    if (noteIndex > -1) {
        notes.splice(noteIndex, 1);
    }
}

// Generate the DOM structure for a note
const generateNoteDom = (note) => {

    const noteElement = document.createElement('a');
    const textElement = document.createElement('p');
    const statusElement = document.createElement('p');

    // setup links for notes

    textElement.innerHTML = note.title;
    textElement.classList.add('list-item__title');

    // setup remove button
    // const button = document.createElement('button');
    //
    // button.textContent = 'x'
    // noteElement.appendChild(button);
    // button.addEventListener('click', (e) => {
    //     removeNote(note.id);
    //     renderNotes(notes, filters);
    //     saveNotes(notes);
    // })

    if (note.title.length > 0) {
        textElement.textContent = note.title;
    } else {
        textElement.textContent = "Unnamed note";
    }

    noteElement.appendChild(textElement);
    noteElement.setAttribute('href',`/edit.html#${note.id}`);
    noteElement.classList.add('list-item');

    statusElement.textContent = generateLastEdited(note.updatedAt);
    statusElement.classList.add('list-item__subtitle');
    noteElement.appendChild(statusElement);

    return noteElement;
}

// Sort your notes by 1 of 3 ways
const sortNotes =  (notes, sortBy) => {
    if (sortBy === 'byEdited') {
        return notes.sort((a,b) => b.updatedAt - a.updatedAt);
    } else if (sortBy === 'byCreated') {
        return notes.sort((a,b) => a.createdAt - b.createdAt);
    } else if (sortBy === 'alphabetical') {
        return notes.sort((a,b) => a.title.localeCompare(b.title));
    } else {
        return notes;
    }
}

// Render application notes
const renderNotes = (notes, filters) => {
    notes = sortNotes(notes, filters.sortBy);
    const filteredNotes = notes.filter((note) => {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
    });

    const notesDiv = document.querySelector('#notes');
    notesDiv.innerHTML = '';

    if (filteredNotes.length > 0) {
        filteredNotes.forEach((note) => {
            const noteEl = generateNoteDom(note);
            notesDiv.appendChild(noteEl);
        });
    } else {
        const emptyMessage = document.createElement('p');
        emptyMessage.textContent = 'No notes to show';
        emptyMMessage.classList.add('empty-message');
        notesDiv.appendChild(emptyMessage);
    }
}

// Save the notes to localStorage
const saveNotes = (notes) => localStorage.setItem('notes', JSON.stringify(notes));

// Generate the last edited message
const generateLastEdited = (timestamp) => `Last updated at ${moment(timestamp).fromNow()} ago.`;