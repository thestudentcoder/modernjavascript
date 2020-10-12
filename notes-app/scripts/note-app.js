let notes = getSavedNotes();

const filters = {
    searchText: '',
    sortBy: 'byEdited'
}

// initial load
renderNotes(notes, filters);

document.querySelector('#create-note').addEventListener('click', (e) => {
    const uuid = uuidv4();
    const timestamp = moment().valueOf();
    notes.push({
        id: uuid,
        title: '',
        body: '',
        createdAt: timestamp,
        updatedAt: timestamp
    });
    saveNotes(notes);
    location.assign(`/edit.html#${uuid}`);
});

document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value;
    renderNotes(notes, filters);
});

document.querySelector('#filter-by').addEventListener('change', (e) => {
    filters.sortBy = e.target.value;
    renderNotes(notes, filters);
});

window.addEventListener('storage', e => {
    if (e.key === 'notes') {
     notes = JSON.parse(e.newValue);
     renderNotes(notes, filters);
    }
});

