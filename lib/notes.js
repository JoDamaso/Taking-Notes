const fs = require('fs');
const path = require('path');
// all filler, just need to adjust it to my code 

function createNote(body, notes) {
    const noteBody = body;
    notes.push(noteBody);
    fs.writeFileSync(
        path.join(__dirname, '../db/notes.json'),
        JSON.stringify({ notes }, null, 2)
    );
    return animal;
};

function findById(id, notesArray) {
    const result = notesArray.filter((note) => note.id === id)[0];
    return result;
};

function validateNote(animal) {
    if (!animal.name || typeof animal.name !== 'string') {
        return false;
    }
    if (!animal.species || typeof animal.species !== 'string') {
        return false;
    }
    return true;
};

function filterByQuery(query, notesArray) {
    let filteredResults = notesArray;
    if (query.title) {
        filteredResults = filteredResults.filter((note) => note.title === query.title);
    }
    return filteredResults;
};

module.exports = {
    filterByQuery,
    findById,
    createNote
    // validateNote
};