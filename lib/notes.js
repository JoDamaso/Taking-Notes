const fs = require('fs');
const path = require('path');
// modules to write a file and direct it
// was able to use the functions from my module work here

function createNote(body, notes) {
    const noteBody = body;
    notes.push(noteBody);
    fs.writeFileSync(
        path.join(__dirname, '../db/notes.json'),
        JSON.stringify({ notes }, null, 2)
    );
    return noteBody;
};

function findById(id, notesArray) {
    const result = notesArray.filter((note) => note.id === id)[0];
    return result;
};

function validateNote(note) {
    // validates if the note.title/text is a string so it can be tied in with our createNote and POST route
    if (!note.title || typeof note.title !== 'string') {
        return false;
    }
    if (!note.text || typeof note.text !== 'string') {
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

// exporting the functions to be used in the routes
module.exports = {
    filterByQuery,
    findById,
    createNote,
    validateNote
};