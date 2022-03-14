// deconstructed our lib/notes.js to make our routes work!
const { validateNote, createNote, findById, filterByQuery } = require('../../lib/notes');
const router = require('express').Router();
// pulling the db/notes.json and deconstructing to only have 'notes'
const { notes } = require('../../db/notes.json');
const { nanoid } = require('nanoid');
const fs = require('fs');
const path = require('path');

// need get all notes 
// need get a note by 'id'
// need post a note to body
// need to delete a note 

// GET all Notes
// DONE 
router.get('/notes', (req, res) => {
    let results = notes;
    if (req.query) {
        results = filterByQuery(req.query, results);
    }
    res.json(results);
});

// GET Note by 'id'
// DONE 
router.get('/notes/:id', (req, res) => {
    const result = findById(req.params.id, notes);
    if (result) {
        res.json(result);
    } else {
        res.sendStatus(404);
    }
});

// POST note 
// users send data from client side of application to server
// DONE
router.post('/notes', (req, res) => {
    req.body.id = nanoid(7);
    // if any data in ther req.body is incorrect, send 400 error back
    if (!validateNote(req.body)) {
        res.status(400).send('The note was formatted incorrectly');
    } else {
    const note = createNote(req.body, notes);
    res.json(note);
    }
});

// tons of help with Jon Taylor
router.delete('/notes/:id', (req, res) => {
    let index;
    notes.map((data, i) => {
        if (data.id !== req.params.id)
        return;
        index = i; 
    })
    notes.splice(index, 1);
    fs.writeFileSync(
        path.join(__dirname, '../../db/notes.json'),
        JSON.stringify({ notes }, null, 2)
    );
    res.json(200)
})

module.exports = router;