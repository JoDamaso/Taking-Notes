// deconstructed our lib/notes.js to make our routes work!
const { validateNote, createNote, findById, filterByQuery} = require('../../lib/notes');
const router = require('express').Router();
// pulling the db/notes.json and deconstructing to only have 'notes'
const { notes } = require('../../db/notes.json');

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
    req.body.id = notes.length.toString();
    // if any data in ther req.body is incorrect, send 400 error back
    if (!validateNote(req.body)) {
        res.status(400).send('The note was formatted incorrectly');
    } else {
    const note = createNote(req.body, notes);
    res.json(note);
    }
});

// router.delete('/notes/:id', (req, res) => {

// })

module.exports = router;